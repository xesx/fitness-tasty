# @fitness-tasty/prisma

Пакет с Prisma Client для единой PostgreSQL-базы, которую используют
все бэкенды (`backend-api`/`backend-admin-api`, `backend-bot`,
`backend-cli`, `backend-cron`) — вместо того чтобы каждый бэкенд
описывал свою копию схемы.

Сама схема (`schema.prisma`) лежит в корне репозитория, в `/prisma` —
не внутри этого пакета, — чтобы она была общей точкой входа, не
привязанной к конкретному пакету. Этот пакет только генерирует из неё
Prisma Client и переиспользуется бэкендами как зависимость.

Пока в схеме только одна модель — `Patient` (таблица `patients`).
Остальные модели добавляются сюда по мере необходимости.

## Структура

- `/prisma/schema.prisma` (в корне репозитория) — схема БД: datasource
  и модели.
- `/prisma/migrations` (в корне репозитория) — история миграций,
  коммитится в git.
- `prisma.config.ts` — конфиг Prisma CLI: указывает на схему/миграции
  в корневом `/prisma` и подтягивает `DATABASE_URL` из корневого
  `.env` (не из `.env` внутри этого пакета — такого файла нет).
- `generated/prisma/` — сгенерированный Prisma Client, не коммитится
  (см. `.gitignore` в корне репозитория).

## Команды

Из этого пакета (`packages/prisma`) или через
`--filter @fitness-tasty/prisma` из корня:

```bash
pnpm generate        # сгенерировать Prisma Client в generated/prisma
pnpm migrate:dev      # создать и применить миграцию локально
pnpm migrate:deploy   # применить существующие миграции (CI/прод)
pnpm studio           # открыть Prisma Studio
```

`DATABASE_URL` берётся из `.env` в корне репозитория — скопируйте
корневой `.env.example` в `.env` и подставьте реальную строку
подключения для локальной разработки.

## Использование в бэкендах

Добавьте зависимость на пакет:

```bash
pnpm --filter <backend-package> add @fitness-tasty/prisma
```

и импортируйте сгенерированный клиент:

```ts
import { PrismaClient } from '@fitness-tasty/prisma'
```
