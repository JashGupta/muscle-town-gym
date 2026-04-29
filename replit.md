# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Hosts the Muscle Town Fitness marketing website.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **Frontend**: React + Vite + Tailwind CSS + shadcn/ui + Framer Motion

## Artifacts

- `artifacts/muscle-town` — Muscle Town Fitness marketing site (frontend-only, served at `/`)
- `artifacts/mockup-sandbox` — Internal canvas/mockup sandbox

## Contact form

The Contact section in `artifacts/muscle-town/src/components/sections/Contact.tsx`
posts inquiries to FormSubmit, which forwards them to the gym owner's email.
The owner address is set via the `OWNER_EMAIL` constant at the top of that file.
On the very first submission to a new email address, FormSubmit sends a
one-time confirmation link that the owner must click; afterwards every
submission lands directly in the inbox. No backend required.

## Key Commands

- `pnpm install` — install dependencies
- `pnpm run typecheck` — typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/muscle-town run dev` — run the website locally

See the `pnpm-workspace` skill for workspace structure and conventions.
