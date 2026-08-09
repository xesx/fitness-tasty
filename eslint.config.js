import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import eslintConfigPrettier from 'eslint-config-prettier'

export default tseslint.config(
  { ignores: ['**/dist', '**/node_modules'] },
  {
    // Covers every React frontend (apps/frontend-*) plus the shared UI kit.
    // apps/backend-* will need their own block (Node globals, no react-hooks/
    // react-refresh) once a backend package is actually scaffolded.
    files: ['apps/frontend-*/**/*.{ts,tsx}', 'packages/ui/**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2023,
      globals: globals.browser,
    },
  },
  eslintConfigPrettier,
)
