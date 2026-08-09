# @fitness-tasty/backend-cron

Плановые/фоновые задачи (напоминания, рассылки, периодическая
синхронизация данных и т.п.). Пока не создано — это заготовка пакета,
которая резервирует место в workspace.

## Как заскаффолдить

Из `apps/`:

```bash
mkdir backend-cron && cd backend-cron
pnpm init
```

После этого:

- задать `"name": "@fitness-tasty/backend-cron"` в `package.json`;
- добавить в корневой `eslint.config.js` отдельный блок `files` для
  `apps/backend-*/**/*.ts`;
- переиспользовать `@fitness-tasty/types` вместо дублирования типов,
  общих с `backend-api`.
