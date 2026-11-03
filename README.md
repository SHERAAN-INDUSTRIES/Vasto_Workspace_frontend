# Vasto_Workspace_frontend

## Local Vasto sign-in

The **Continue With Vasto** link starts authorization through the Workspaces backend at `/api/auth/vasto/start/`. During development, Vite proxies `/api` requests to `http://127.0.0.1:8001`; the browser stays on the same hostname through sign-in so the Workspaces session cookie is available after the callback.

1. Complete setup in the Vasto and Workspaces backend repositories, then start both backend servers as described in the [Workspaces setup guide](../VastoWorkspacesBackend/docs/development/local-vasto-oidc-client-setup.md). Vasto uses port `8000`; Workspaces uses port `8001`.
2. In this repository, install frontend packages if needed and start Vite:

   ```bash
   npm install
   npm run dev
   ```

3. Open **http://127.0.0.1:3000/** (use `127.0.0.1`, not `localhost`) and select **Continue With Vasto**. The browser goes to the Workspaces authorization-start endpoint, completes the Vasto sign-in, then returns to the frontend. The frontend checks `/api/auth/me/` and shows the signed-in Workspaces identity (including its local user ID and profile picture, when present) instead of the sign-in button.

The development proxy is configured in `vite.config.ts`. The Workspaces backend's local `.env` must set `WORKSPACES_FRONTEND_URL=http://127.0.0.1:3000/` so the OAuth callback returns to the same frontend origin. The frontend never receives or handles the OAuth client secret or authorization code.

For frontend route methods and response examples, see [Authentication routes](docs/authentication-routes.md).

## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.
