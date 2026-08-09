# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project status

`fitness-tasty` is a pnpm monorepo in its initial scaffolding stage, structured
for **multiple frontends and multiple backend services**, most of which don't
exist yet:

- `apps/frontend-landing` — the only real, working app. It's a stock
  `pnpm create vite` React+TypeScript template, not yet customized (`App.tsx`
  still contains the default Vite/React starter content).
- `apps/frontend-doctor`, `apps/frontend-patient` — planned React+Vite SPAs
  (doctor-facing, patient-facing). Currently stub packages: only
  `package.json` + `README.md`, no source code.
- `apps/backend-api` (NestJS), `apps/backend-bot` (Telegram bot(s)),
  `apps/backend-cli` (internal CLI tools), `apps/backend-cron` (scheduled
  jobs) — all planned, all currently stub packages.
- `packages/ui`, `packages/api-client`, `packages/types` — planned shared
  code (React component library, typed API client, shared TS types/DTOs)
  meant to be reused across the `apps/frontend-*` and `apps/backend-*`
  packages instead of duplicating code between them. Currently stub
  packages.

More apps of the same role are expected (e.g. a second landing page for a
different brand, a per-role Telegram bot) — these follow the same
`apps/frontend-<role>[-<variant>]` / `apps/backend-<role>[-<variant>]` naming
pattern rather than getting a new top-level category.

Each stub package's `README.md` documents the scaffold command for that
specific app (e.g. `pnpm create vite <name> -- --template react-ts` for a
frontend, `pnpm dlx @nestjs/cli new <name> --package-manager pnpm` for
`backend-api`) and the wiring steps to do afterward (package name, ESLint
glob, which `packages/*` to depend on). Read that file before scaffolding
a given package rather than re-deriving the steps.

## Commands

Run from the repo root unless noted. Requires Node.js 22+ and pnpm 10+
(`corepack enable`).

```bash
pnpm install         # install deps for all workspace packages
pnpm dev:landing      # run apps/frontend-landing in dev mode (Vite) — the only app with a real dev script today
pnpm build            # build all packages (pnpm -r build)
pnpm lint             # eslint . across the whole monorepo
pnpm format           # prettier --write .
pnpm format:check     # prettier --check .
```

Target a single package with `--filter` (works for stub packages too, though
they have no scripts yet):

```bash
pnpm --filter @fitness-tasty/frontend-landing dev
pnpm --filter @fitness-tasty/frontend-landing build   # tsc -b && vite build
pnpm --filter @fitness-tasty/frontend-landing lint
pnpm --filter @fitness-tasty/frontend-landing preview
```

Once a new `apps/*` package is scaffolded, add a matching root-level
`dev:<role>` script (mirroring `dev:landing`) rather than relying only on
`--filter`.

There is no test runner configured yet anywhere in the repo.

## Architecture

- **Monorepo layout**: `pnpm-workspace.yaml` includes `apps/*` **and**
  `packages/*`. Every package under either directory is an independent pnpm
  package with its own `package.json`, dependencies, and build scripts —
  dropping a new directory with a `package.json` under `apps/` or
  `packages/` is enough for pnpm to pick it up, no workspace config changes
  needed.
- **`apps/*` vs `packages/*`**: `apps/*` are deployable units (a frontend
  users load, a backend process that runs). `packages/*` are libraries with
  no independent deployment, consumed via workspace dependencies by one or
  more `apps/*`. When code is needed by more than one app (a component, an
  API client, a shared type), it belongs in `packages/*`, not copied between
  apps.
- **Shared tooling lives at the root**: ESLint (`eslint.config.js`) and
  Prettier (`.prettierrc.json`) are configured once at the repo root and
  apply across all `apps/*` and `packages/*` packages — do not create
  per-app lint/format configs.
  - `eslint.config.js`'s React/TypeScript block currently matches
    `apps/frontend-*/**/*.{ts,tsx}` and `packages/ui/**/*.{ts,tsx}` (via
    `tseslint.config`, `eslint-plugin-react-hooks`,
    `eslint-plugin-react-refresh`). When any `apps/backend-*` package gains
    real source, it needs its **own** `files` block — Node globals instead
    of `globals.browser`, and no `react-hooks`/`react-refresh` plugins.
  - Prettier config: no semicolons, single quotes, trailing commas
    everywhere, 100-char print width.
- **Frontend stack** (`apps/frontend-landing`, and future
  `frontend-doctor`/`frontend-patient`): React 19 + TypeScript + Vite 8,
  built via `@vitejs/plugin-react`. TypeScript is split into
  `tsconfig.app.json` (app code) and `tsconfig.node.json` (Vite config
  itself), composed through the app's own `tsconfig.json` project
  references — each frontend builds with `tsc -b && vite build` (build
  mode, not a single tsconfig).
- **Backends**: not yet created. `backend-api` is planned as NestJS per the
  README; `backend-bot`/`backend-cli`/`backend-cron` have no framework
  decided yet. All four are expected to depend on `packages/types` for
  shared DTOs, and `backend-bot`/`backend-cli`/`backend-cron` are expected
  to talk to `backend-api` through `packages/api-client` rather than
  reimplementing HTTP calls.

## Conventions

- Repository documentation (README.md) is written in Russian; code and
  identifiers are in English.
- Package names are scoped under `@fitness-tasty/*`, mirroring the
  directory name (e.g. `apps/frontend-doctor` → `@fitness-tasty/frontend-doctor`).
- Naming pattern for new apps: `apps/frontend-<role>` for a frontend,
  `apps/backend-<role>` for a backend service; append `-<variant>` if a
  second app of the same role is needed (e.g. `frontend-landing-b2b`).
- `.mcp.json` (real MCP secrets) is gitignored; `.mcp.json.example` is the
  checked-in template — copy it rather than committing real tokens.
