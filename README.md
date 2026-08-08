# fitness-tasty

Монорепозиторий проекта: фронтенд на React, в перспективе — бэкенд на NestJS.

## Структура

```
fitness-tasty/
├── apps/
│   ├── frontend/     React + Vite + TypeScript
│   └── backend/      NestJS (появится позже)
├── pnpm-workspace.yaml
├── eslint.config.js  общий конфиг ESLint для всех apps/*
├── .prettierrc.json  общий конфиг Prettier
└── package.json      корневой манифест workspace
```

Каждое приложение в `apps/*` — самостоятельный pnpm-пакет со своим `package.json`,
зависимостями и скриптами сборки. Общие инструменты разработки (ESLint, Prettier,
TypeScript) настраиваются в корне и переиспользуются во всех пакетах.

## Пакетный менеджер

Используется **pnpm workspaces**. Причины:

- content-addressable store экономит место на диске и ускоряет установку
  зависимостей по сравнению с npm/yarn classic;
- строгий (non-hoisted) `node_modules` не даёт пакетам случайно использовать
  чужие транзитивные зависимости — важно, когда во фронтенд- и бэкенд-пакетах
  будут разные (и местами конфликтующие) зависимости;
- нативная поддержка workspace-фильтров (`pnpm --filter <pkg> ...`) удобна для
  монорепы с несколькими приложениями.

## Требования

- Node.js 22+
- pnpm 10+ (`corepack enable` или `npm i -g pnpm`)

## Установка и запуск

```bash
pnpm install        # установить зависимости всех пакетов
pnpm dev            # запустить apps/frontend в dev-режиме
pnpm build          # собрать все пакеты
pnpm lint           # проверить весь монорепозиторий ESLint'ом
pnpm format         # отформатировать код Prettier'ом
```

Для работы только с конкретным пакетом используйте `--filter`:

```bash
pnpm --filter @fitness-tasty/frontend dev
```

## Добавление backend (NestJS)

Когда появится бэкенд, его нужно будет создать в `apps/backend` — например:

```bash
cd apps
pnpm dlx @nestjs/cli new backend --package-manager pnpm
```

Поскольку `pnpm-workspace.yaml` уже включает `apps/*`, новый пакет автоматически
станет частью монорепы без дополнительной настройки workspace.
