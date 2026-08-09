# @fitness-tasty/backend-bot

Telegram-бот(ы). Пока не создано — это заготовка пакета, которая
резервирует место в workspace. Если ботов для разных ролей
(врач/пациент) в итоге будет несколько, каждый оформляется отдельным
пакетом `apps/backend-bot-*` по аналогии с фронтендами.

## Как заскаффолдить

Из `apps/`, например на `grammy` или `telegraf`:

```bash
mkdir backend-bot && cd backend-bot
pnpm init
pnpm add grammy   # или telegraf
```

После этого:

- задать `"name": "@fitness-tasty/backend-bot"` в `package.json`;
- добавить в корневой `eslint.config.js` отдельный блок `files` для
  `apps/backend-*/**/*.ts`;
- переиспользовать `@fitness-tasty/api-client` для вызовов
  `backend-api` и `@fitness-tasty/types` для общих типов вместо
  дублирования.
