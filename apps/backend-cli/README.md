# @fitness-tasty/backend-cli

Внутренние CLI-утилиты (админ-скрипты, разовые миграции/импорт данных
и т.п.). Пока не создано — это заготовка пакета, которая резервирует
место в workspace.

## Как заскаффолдить

Из `apps/`:

```bash
mkdir backend-cli && cd backend-cli
pnpm init
```

После этого:

- задать `"name": "@fitness-tasty/backend-cli"` в `package.json`;
- добавить в корневой `eslint.config.js` отдельный блок `files` для
  `apps/backend-*/**/*.ts`;
- переиспользовать `@fitness-tasty/types` (и при необходимости прямой
  доступ к слою данных `backend-api`) вместо дублирования логики.
