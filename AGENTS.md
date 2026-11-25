# Agent Guidelines

## Project overview

This repository is the React + TypeScript + Vite dashboard frontend for Vasto Workspace. Dashboard screens are based on the images and wireframes in `Design/`.

## Ownership and scope

The human developer owns all backend integration, authentication (including the existing "Continue With Vasto" OAuth flow), dynamic data fetching and parsing, `localStorage`, `sessionStorage`, cookies, and session management. Agents own UI/UX implementation only.

### Hard prohibitions

- Do not add backend code, `/api` calls, `fetch`, Axios, WebSockets, or change proxy settings.
- Do not change authentication code or OAuth, token, or session handling.
- Do not use `localStorage`, `sessionStorage`, or cookies.
- Do not add dynamic data fetching or API-driven state.
- Never delete, rewrite, or revert existing working code; extend it instead.

### Allowed work

- Build and refine UI based on the images and wireframes in `Design/`.
- Use hard-coded mock data in components or a local mock-data file.
- Mark mock data integration points with `// TODO: Replace with real data from backend`.
- Use React hooks only for UI concerns such as view switching, modals, tabs, form fields, and animation.
- Implement dashboard component switching with React state and/or React Router for UI flow only.
- Follow the existing styling approach and visual language in `Design/`.

## Shared components

Reusable dashboard components belong in `src/App/Components/`. The content-agnostic `BottomSheet` component lives there and is mounted once at the dashboard layout level so it can be used from any dashboard tab. Its parent controls open state and injects content.

## Before you start

1. Inspect the relevant images and wireframes in `Design/`.
2. List the screens and components you plan to change or create.
3. Confirm the plan before writing code.
4. Inspect existing files and worktree changes, then extend the current implementation.
