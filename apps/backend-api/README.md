# @fitness-tasty/backend-api

Основной бэкенд (NestJS) — REST/GraphQL API, который будут использовать
`apps/frontend-doctor`, `apps/frontend-patient` и остальные сервисы
(`backend-bot`, `backend-cli`, `backend-cron`). Пока не создано — это
заготовка пакета, которая резервирует место в workspace.

## Как заскаффолдить

Из `apps/`:

```bash
pnpm dlx @nestjs/cli new backend-api --package-manager pnpm
```

После этого:

- задать `"name": "@fitness-tasty/backend-api"` в `package.json`;
- добавить в корневой `eslint.config.js` отдельный блок `files` для
  `apps/backend-*/**/*.ts` (backend-пакеты используют Node-глобалы, а не
  browser, и правила `react-hooks`/`react-refresh` им не нужны);
- переиспользовать общие пакеты из `packages/*` (`@fitness-tasty/types`)
  вместо дублирования DTO/типов, общих с фронтендами.
