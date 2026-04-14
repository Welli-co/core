# Welli core

Monorepo for the Welli core platform: a Next.js admin dashboard, a Storybook workspace for previewing shared UI, and a shadcn/ui component package consumed by both.

## Stack

- **pnpm** workspaces + **Turborepo**
- **Next.js 16** (App Router, Turbopack) for `apps/admin`
- **Vite 6 + Storybook 8** for `apps/storybook`
- **Tailwind CSS v4** with shadcn/ui (base style, Open Runde font, forced light mode)
- **Base UI** primitives + **Phosphor Icons** (`@phosphor-icons/react`)
- **TanStack React Table** for data tables
- **TypeScript 5.9**

## Monorepo structure

```
apps/
  admin/                  # Next.js dashboard (main app)
  storybook/              # Vite + Storybook, component previews
packages/
  ui/                     # @workspace/ui — shared shadcn components, fonts, globals.css
  eslint-config/          # @workspace/eslint-config
  typescript-config/      # @workspace/typescript-config
cloudbuild/               # Cloud Build YAML for stg / prod deploys
```

## Getting started

```bash
pnpm install
pnpm dev                           # runs turbo dev across all workspaces
```

Or run a single app:

```bash
pnpm --filter admin dev            # http://localhost:3000
pnpm --filter storybook dev        # http://localhost:6006
```

## Adding shadcn components

Components live in `packages/ui` so they can be reused across apps. Run the shadcn CLI with `-c packages/ui`:

```bash
pnpm dlx shadcn@latest add button -c packages/ui
pnpm dlx shadcn@latest add carousel accordion dialog drawer -c packages/ui
```

Blocks that are app-specific (e.g. auth pages) can be installed into the admin app:

```bash
pnpm dlx shadcn@latest add login-02 -c apps/admin
```

## Using components

Import shared components from the workspace package:

```tsx
import { Button } from "@workspace/ui/components/button"
import {
  TypographyH1,
  TypographyP,
} from "@workspace/ui/components/typography"

export function Example() {
  return (
    <section>
      <TypographyH1>Pulso</TypographyH1>
      <TypographyP>Resumen diario de tus créditos.</TypographyP>
      <Button>Solicitar desembolso</Button>
    </section>
  )
}
```

Styles, fonts, and theme tokens come from `@workspace/ui/globals.css` (imported once in each app's root layout).

## Admin app conventions

- **Data access layer** — server-side data helpers live in `apps/admin/data/` (e.g. `loans.ts` exports `getLoans()`, `getLoanById(id)`, `getLoansByState(slug)` plus the mock `LoanApplication` type). Pages consume them directly as async server components.
- **Route groups** — `app/(dashboard)/` holds the sidebar-based layout. Inside:
  - `/` — loan list (index page)
  - `/[state]` — filtered list per credit status (`/en-revision`, `/aprobados`, `/en-progreso`, `/completados`, `/cerrados`)
  - `/al/[loan_id]` — loan detail
  - `/pulse`, `/benefits`, `/check`, `/code`, `/integrators` — sales channel / overview pages
- **Sidebar nav** — configured in `apps/admin/components/app-sidebar.tsx` as arrays of `SidebarNavItem`. The generic `SidebarNavGroup` (in the same folder) handles active state, badges, external links with trailing `ArrowUpRight`, and optional `drawer` triggers.

## Scripts

All scripts run via Turbo and can be filtered to a single workspace.

```bash
pnpm dev         # turbo dev
pnpm build       # turbo build
pnpm lint        # turbo lint
pnpm typecheck   # turbo typecheck
pnpm format      # turbo format (prettier --write)
```

## Deployment

The `cloudbuild/` folder contains Google Cloud Build pipelines:

- `cloudbuild-stg.yaml` — builds the admin Docker image, pushes it to Artifact Registry, and deploys to Cloud Run in the staging project
- `cloudbuild-prod.yaml` — production pipeline

Both expect the repository to be wired to a Cloud Build trigger (push to `main`).
