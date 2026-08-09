# @fitness-tasty/backend-doctor-api

Бэкенд (NestJS) — REST/GraphQL API, который будет использовать
`apps/frontend-doctor`. Пока не создано — это
заготовка пакета, которая резервирует место в workspace.

## Как заскаффолдить

Из `apps/`:

```bash
pnpm dlx @nestjs/cli new backend-doctor-api --package-manager pnpm
```

После этого:

- задать `"name": "@fitness-tasty/backend-doctor-api"` в `package.json`;
- добавить в корневой `eslint.config.js` отдельный блок `files` для
  `apps/backend-*/**/*.ts` (backend-пакеты используют Node-глобалы, а не
  browser, и правила `react-hooks`/`react-refresh` им не нужны);
- переиспользовать общие пакеты из `packages/*` (`@fitness-tasty/types`)
  вместо дублирования DTO/типов, общих с фронтендами.
