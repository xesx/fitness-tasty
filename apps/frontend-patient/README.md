# @fitness-tasty/frontend-patient

Веб-приложение для пациента. Пока не создано — это заготовка пакета,
которая резервирует место в workspace и место в общих
ESLint/Prettier/TypeScript конфигурациях.

## Как заскаффолдить

Из `apps/`:

```bash
pnpm create vite frontend-patient -- --template react-ts
```

После этого:

- задать `"name": "@fitness-tasty/frontend-patient"` в `package.json`;
- проверить, что `eslint.config.js` в корне репозитория подхватывает
  `apps/frontend-patient/**/*.{ts,tsx}` (сейчас это покрывается общим
  паттерном `apps/frontend-*/**/*.{ts,tsx}`);
- переиспользовать общие пакеты из `packages/*` (`@fitness-tasty/ui`,
  `@fitness-tasty/api-client`, `@fitness-tasty/types`) вместо
  дублирования компонентов и типов.
