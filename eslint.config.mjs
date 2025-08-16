import { FlatCompat } from '@eslint/eslintrc';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import { defineConfig, globalIgnores } from 'eslint/config';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname
});
export default defineConfig([
  ...compat.extends('next/core-web-vitals', 'next/typescript', './.eslintrc-auto-import.json'),
  globalIgnores(['types/**']),
  {
    plugins: {
      'simple-import-sort': simpleImportSort
    },
    rules: {
      'react/jsx-no-undef': 'off',
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error'
    }
  }
]);
