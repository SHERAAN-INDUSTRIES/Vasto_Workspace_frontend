# UI Content Reference

This living document is the single source of truth for user-facing text, labels, and placeholder content in the UI. Update it when visible copy changes. Entries marked **Provisional** are suggested copy for future empty/error states that are not currently rendered.

## Sidebar and navigation

- Brand: `VASTO`
- Workspace label: `Workspace`
- Navigation: `Home`, `AI Assistant`, `Code Editor`, `Video Meetings`, `Group Chat`, `Documents`, `Projects`, `More`
- Workspace promotion: `Pro workspace`
- Promotion description: `Unlock AI agents, unlimited documents and team groups.`
- Promotion button: `Upgrade now`

## Dashboard and shared header

- Search placeholder: `Search anything...`
- Welcome heading: `Welcome back`
- Welcome description: `Your workspace at a glance`
- Dashboard page heading: `Home dashboard`
- Breadcrumb prefix: `Workspace`
- Overview metrics: `Projects`, `Team members`, `Messages`, `Documents`
- Dashboard panels: `Quick actions`, `Recent activity`
- Quick actions: `Ask AI`, `Open editor`, `Join meeting`, `New document`, `Upload files`, `Create a meeting`, `Create project`
- Recent activity examples: `Website redesign updated`, `New team member joined`, `Document shared`, `Meeting scheduled`

## AI Assistant

- Panel headings: `Conversation`, `Assistant response`, `Recent chats`
- Prompt display placeholder: `Your prompt / message`
- Input placeholder: `Ask anything...`
- Submit button: `Send`
- Mock chat titles: `Product strategy`, `Meeting recap`, `Project planning`, `Landing page copy`

## Code Editor

- Panels: `Explorer`, `App.jsx / Editor`, `Terminal`
- Mock project tree items: `src`, `components`, `pages`, `App.jsx`, `index.css`, `public`, `package.json`
- Mock code line: `// code line / function content`
- Mock command: `$ npm run dev`
- Mock status: `Server running · localhost:5173`

## Video Meetings

- Meeting title: `Team meeting · 4 participants`
- Participant panel: `Participants`
- Mock participants: `Participant 1`, `Participant 2`, `Participant 3`, `Participant 4`
- Controls: `Mute`, `Camera`, `Share`, `Chat`, `Leave`
- Bottom sheet trigger: `Create a meeting`

## Group Chat

- Panels: `Channels`, `Members`
- Active channel: `# general`
- Mock channels: `general`, `development`, `design`, `random`
- Channel action: `Create channel`
- Bottom sheet trigger: `Create a chat server`
- Mock message labels: `Member 1`, `Member 2`, `Member 3`, `Member 4`, `Member 5`
- Mock message examples: `Message preview`, `Project update attached`, `Can we review this?`, `The latest version is ready`, `Thanks everyone`
- Input placeholder: `Type a message...`
- Mock member labels: `Team member 1`, `Team member 2`, `Team member 3`, `Team member 4`, `Team member 5`

## Documents

- Panel: `My documents`
- Action: `New document`
- Columns: `Name`, `Owner`, `Last edited`, `Progress`
- Mock document names: `Website brief`, `Sprint notes`, `Design guidelines`, `Project proposal`, `Meeting summary`, `Research report`, `Launch checklist`
- Mock owner and date labels: `Team member`, `Recently`
- Bottom sheet trigger: `Upload files`

## Projects

- Page heading: `Projects`
- Bottom sheet trigger: `Create project`
- Project action: `Open project`
- Card description placeholder: `Project description / team`
- Progress label: `Progress`
- Mock projects: `Website redesign`, `AI chatbot`, `Mobile app`, `Team portal`

## More features

- Introductory copy: `Add tools to your workspace as your team grows.`
- Tools: `Task manager`, `Calendar`, `File storage`, `Notifications`, `Integrations`, `Analytics`, `Settings`, `Custom apps`
- Tool action: `Open tool`

## Forms, modal, and bottom sheet copy

- Bottom sheet default accessible name: `Bottom sheet`
- Bottom sheet close button accessible name: `Close bottom sheet`
- Dashboard bottom sheet accessible name: `Workspace action`
- Placeholder headings: `Upload files — placeholder content`, `Create a meeting — placeholder content`, `Create a chat server — placeholder content`, `Create project — placeholder content`
- Placeholder note pattern: `Replace this with the [action name] experience.`
- The caller supplies the title and body; the shared component has no feature-specific content.
- Search input: `Search anything...`
- AI prompt input: `Ask anything...`
- Group chat input: `Type a message...`
- **Provisional empty state:** `Nothing here yet.`
- **Provisional error message:** `Something went wrong. Please try again.`

## Existing sign-in screen

The existing sign-in page remains owned by the human developer; its visible copy includes:

- `Vasto WorkSpace`
- `It's a all in one workplace every thing you need is all in here get started now and be make your work easier and faster by a click of button`
- `Sign in to WorkSpace`
- `Continue with your vasto account to Sign in to workspace`
- `Continue With Vasto`
- `Don't have a Vasto account?`
- `Sign up`

Do not modify the sign-in flow or its authentication-related copy without the human developer's direction.

## Placeholder / Mock Data

All current examples are static UI fixtures; they are not fetched or persisted.

- `src/App/Dashboad/DashboardViews.tsx`
  - Home: metric objects shaped as `{ label, value }` and recent activity strings.
  - AI Assistant: recent-chat title strings and a UI-only prompt field.
  - Code Editor: file-name strings and numbered placeholder code lines.
  - Meetings: participant-name strings.
  - Group Chat: channel-name and message strings; member names are generated as `Team member N`.
  - Documents: document-name strings with display-only owner/date labels and progress widths.
  - Projects: `[name, progress]` pairs.
  - More Features: tool-name strings and matching display icons.
- `src/App/Dashboad/sidebar/Sidebar.tsx`: static navigation labels and icons.
- `src/App/Dashboad/HomePage/Home.tsx` and `src/App/Components/Cards.tsx`: pre-existing static profile, project, and meeting examples that remain in the repository.

## Backend Integration Notes

Only the human developer connects real data. Do not implement the connections in this frontend UI task.

- `DashboardViews.tsx` Home: replace static metrics and activity examples with workspace overview values.
- `DashboardViews.tsx` AI Assistant: replace local prompt/response presentation and recent chat titles with the developer-owned AI integration.
- `DashboardViews.tsx` Code Editor: replace the example explorer tree and terminal status with workspace project/editor state.
- `DashboardViews.tsx` Video Meetings: replace mock participants with the active meeting's participant list.
- `DashboardViews.tsx` Group Chat: replace mock channels, messages, and members with workspace chat content.
- `DashboardViews.tsx` Documents: replace mock document names, owner/date labels, and progress values with real document records.
- `DashboardViews.tsx` Projects: replace mock project names, descriptions, and progress values with real project records.
- The shared `BottomSheet` accepts injected children; the human developer supplies feature-specific content and controls its open state.
- Existing TODO comments in view components mark these integration points. Keep them UI-only until the human developer takes over.
