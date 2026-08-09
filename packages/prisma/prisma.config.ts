import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { config as loadEnv } from 'dotenv'
import { defineConfig } from 'prisma/config'

// Schema lives at the repo root (`/prisma`), DATABASE_URL comes from the
// repo root `.env` — both resolved from this file's own path so `prisma`
// commands work the same whether run from the repo root or this package.
const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..')

loadEnv({ path: path.join(repoRoot, '.env') })

export default defineConfig({
  schema: path.join(repoRoot, 'prisma/schema.prisma'),
  migrations: {
    path: path.join(repoRoot, 'prisma/migrations'),
  },
  datasource: {
    url: process.env['DATABASE_URL'],
  },
})
