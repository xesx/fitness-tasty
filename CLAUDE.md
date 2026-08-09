# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project status

`fitness-tasty` is a pnpm monorepo in its initial scaffolding stage. Only
`apps/frontend` exists (a stock `pnpm create vite` React+TypeScript template,
not yet customized — `App.tsx` still contains the default Vite/React
starter content). `apps/backend` (NestJS) is planned but has not been
created yet. Expect most of the codebase to be greenfield work.

## Commands

Run from the repo root unless noted. Requires Node.js 22+ and pnpm 10+
(`corepack enable`).

```bash
pnpm install        # install deps for all workspace packages
pnpm dev             # run apps/frontend in dev mode (Vite)
pnpm build           # build all packages (pnpm -r build)
pnpm lint            # eslint . across the whole monorepo
pnpm format          # prettier --write .
pnpm format:check    # prettier --check .
```

Target a single package with `--filter`:

```bash
pnpm --filter @fitness-tasty/frontend dev
pnpm --filter @fitness-tasty/frontend build   # tsc -b && vite build
pnpm --filter @fitness-tasty/frontend lint
pnpm --filter @fitness-tasty/frontend preview
```

There is no test runner configured yet in either the root `package.json` or
`apps/frontend/package.json`.

## Architecture

- **Monorepo layout**: `pnpm-workspace.yaml` includes `apps/*`. Each app
  under `apps/` is an independent pnpm package with its own
  `package.json`, dependencies, and build scripts.
- **Shared tooling lives at the root**: ESLint (`eslint.config.js`) and
  Prettier (`.prettierrc.json`) are configured once at the repo root and
  apply across all `apps/*` packages — do not create per-app lint/format
  configs.
  - `eslint.config.js` currently scopes its React/TypeScript rules to
    `apps/frontend/**/*.{ts,tsx}` specifically (via `tseslint.config`,
    `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`). When
    `apps/backend` is added, its file glob will likely need its own entry
    in this config.
  - Prettier config: no semicolons, single quotes, trailing commas
    everywhere, 100-char print width.
- **Frontend stack** (`apps/frontend`): React 19 + TypeScript + Vite 8,
  built via `@vitejs/plugin-react`. TypeScript is split into
  `tsconfig.app.json` (app code) and `tsconfig.node.json` (Vite config
  itself), composed through the root `tsconfig.json` project references —
  `apps/frontend` builds with `tsc -b && vite build` (build mode, not a
  single tsconfig).
- **Backend**: not yet created. Per the README, when it's added it should
  be scaffolded into `apps/backend` (e.g. via `@nestjs/cli`); because
  `pnpm-workspace.yaml` already globs `apps/*`, no workspace config changes
  should be needed to pick it up.

## Conventions

- Repository documentation (README.md) is written in Russian; code and
  identifiers are in English.
- Package names are scoped under `@fitness-tasty/*` (e.g.
  `@fitness-tasty/frontend`).
- `.mcp.json` (real MCP secrets) is gitignored; `.mcp.json.example` is the
  checked-in template — copy it rather than committing real tokens.
