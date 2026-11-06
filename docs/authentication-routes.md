# Authentication routes used by the frontend

This document is the frontend-facing route and response reference for signing in to Vasto Workspaces with a Vasto account. The detailed server-to-server OIDC contract and failure cases are documented in [the Workspaces integration route reference](../../VastoWorkspacesBackend/docs/api/vasto-workspaces-auth-routes.md).

## Sign-in flow

The browser starts at the frontend origin. Vite proxies `/api` to Workspaces during local development; production needs an equivalent same-origin proxy or compatible credentialed cross-origin cookie setup.

1. Navigate the browser to `GET /api/auth/vasto/start/`.
2. Workspaces redirects through Vasto sign-in and returns the browser to the configured frontend URL after successful authorization.
3. The browser retains the Workspaces HttpOnly session cookie.
4. The current frontend returns to its sign-in page after authorization and continues to show the **Continue With Vasto** button. It does not fetch or display the authenticated profile response.

## Routes

### `GET /api/auth/vasto/start/`

Starts authorization. Navigate the browser to this route; do not use `fetch` because the user must complete the redirect flow.

- **Request:** no body or user ID.
- **Success:** redirect to Vasto's sign-in/authorization page, then back through the Workspaces callback.
- **Browser behavior:** keep the navigation in the same window and allow cookies.

### `GET /api/auth/me/` (available for frontend integration; not currently called by this page)

Returns the signed-in Workspaces user. The route is available to frontend features that need the profile, but the current page does not call it or show its response.

Example:

```ts
const response = await fetch('/api/auth/me/', {
  credentials: 'same-origin',
  headers: { Accept: 'application/json' },
});

if (response.status === 401) {
  // Show the signed-out state.
} else if (response.ok) {
  const result = await response.json();
  // result.user.id is the local Workspaces user ID.
}
```

#### Success: `200 OK`

```json
{
  "status": "success",
  "message": "Authenticated user profile retrieved successfully.",
  "authenticated": true,
  "user": {
    "id": 42,
    "username": "sample-user",
    "first_name": "Sample",
    "last_name": "User",
    "display_name": "Sample User",
    "email": "sample@example.test",
    "email_verified": true,
    "profile_picture": "https://pwaninet.app/media/profile_pic/sample.jpg",
    "status": "active"
  },
  "session": {
    "status": "active",
    "expires_at": "2026-11-03T13:30:00+00:00",
    "expires_in_seconds": 50400
  }
}
```

`user.id` belongs to the Workspaces database. The Workspaces backend stores the Vasto OIDC issuer and `sub` in its identity-link table; the frontend does not need that provider identifier. `profile_picture` can be `null`. Session expiry is informational; the session key is held in an HttpOnly cookie and is not part of this response.

#### Signed out: `401 Unauthorized`

```json
{
  "status": "error",
  "message": "Authentication is required.",
  "authenticated": false
}
```

The message may instead say `No Vasto identity is linked to this session.` when the session has no Vasto identity mapping.

### `POST /api/auth/logout/` (backend route; not currently wired in this frontend)

Ends the Workspaces session only. It requires the browser credentials and a valid Django CSRF token. No user ID or JSON body is required.

- **200 OK:** `{"authenticated":false,"logged_out":true}`
- **401 Unauthorized:** `{"authenticated":false}`
- **403 Forbidden:** CSRF token missing or invalid.

The current backend does not provide a CSRF bootstrap route for this frontend. Do not call logout until the app's approved CSRF token mechanism is available.

## Routes the frontend does not call

- `GET /api/auth/vasto/callback/` is called by Vasto's browser redirect. The frontend must not construct or call it.
- Vasto authorization, token, UserInfo, metadata, and signing-key endpoints are managed by the Workspaces backend OIDC client. The frontend must not call them or handle OAuth tokens.
