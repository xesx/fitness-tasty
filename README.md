# fitness-tasty

Монорепозиторий проекта: несколько фронтендов на React и несколько бэкенд-сервисов
(в перспективе на NestJS и др.).

## Структура

```
fitness-tasty/
├── apps/
│   ├── frontend-landing/   React + Vite + TypeScript — публичный лендинг
│   ├── frontend-doctor/    React + Vite + TypeScript — приложение врача (заготовка)
│   ├── frontend-patient/   React + Vite + TypeScript — приложение пациента (заготовка)
│   ├── backend-api/        NestJS — основной API (заготовка)
│   ├── backend-bot/        Telegram-бот(ы) (заготовка)
│   ├── backend-cli/        внутренние CLI-утилиты (заготовка)
│   └── backend-cron/       плановые/фоновые задачи (заготовка)
├── packages/
│   ├── ui/                 общая React UI-библиотека для frontend-* (заготовка)
│   ├── api-client/         типизированный клиент backend-api для всех потребителей (заготовка)
│   └── types/               общие типы/DTO между backend-api и его клиентами (заготовка)
├── pnpm-workspace.yaml
├── eslint.config.js  общий конфиг ESLint для apps/* и packages/*
├── .prettierrc.json  общий конфиг Prettier
└── package.json      корневой манифест workspace
```

Приложений одной роли может быть несколько (например, ещё один лендинг под другой
бренд) — в этом случае используйте суффикс, например `frontend-landing-b2b`,
`backend-bot-doctor`. Пакеты, помеченные «заготовка», ещё не заскаффолжены —
у них есть только `package.json`/`README.md`, резервирующие место в workspace;
инструкция по наполнению — в README.md соответствующего пакета.

Каждое приложение в `apps/*` и каждый пакет в `packages/*` — самостоятельный
pnpm-пакет со своим `package.json`, зависимостями и скриптами сборки. Общие
инструменты разработки (ESLint, Prettier, TypeScript) настраиваются в корне и
переиспользуются во всех пакетах. Код, общий для нескольких `apps/frontend-*`
или для `backend-api` и его клиентов, должен переезжать в `packages/*`, а не
дублироваться.

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
pnpm dev:landing    # запустить apps/frontend-landing в dev-режиме
pnpm build          # собрать все пакеты
pnpm lint           # проверить весь монорепозиторий ESLint'ом
pnpm format         # отформатировать код Prettier'ом
```

Для работы с конкретным приложением (в т.ч. с ещё не заскаффолженным)
используйте `--filter`:

```bash
pnpm --filter @fitness-tasty/frontend-doctor dev
```

## Добавление нового приложения или пакета

`pnpm-workspace.yaml` включает и `apps/*`, и `packages/*` — новый пакет
автоматически станет частью монорепы без дополнительной настройки workspace,
достаточно создать директорию с `package.json` внутри одной из них.

- Новый фронтенд: `apps/frontend-<роль>` (например, `frontend-doctor`), см.
  README.md внутри существующей заготовки для команды скаффолда через
  `pnpm create vite`.
- Новый бэкенд-сервис (API/бот/CLI/крон): `apps/backend-<роль>`, см. README.md
  внутри существующей заготовки.
- Общий код для нескольких приложений: `packages/<имя>`.

При добавлении нового `apps/backend-*` не забудьте расширить
`eslint.config.js` в корне отдельным блоком `files` для `apps/backend-*/**/*.ts`
(Node-глобалы вместо browser, без `react-hooks`/`react-refresh`).
