// .eslintrc.mjs
import { FlatCompat } from '@eslint/eslintrc';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const compat = new FlatCompat({ baseDirectory: __dirname });

export default [
  // lump Next.js + Prettier presets together
  ...compat.extends('next/core-web-vitals', 'prettier'),

  // global ignores
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'out/**',
      'build/**',
      '.vercel/**',
      'coverage/**',
      '*.tsbuildinfo',
      'next-env.d.ts',
    ],
  },

  // your custom rules on JS/TS/JSX/TSX/.mjs
  {
    files: ['**/*.{js,jsx,ts,tsx,mjs}'],
    rules: {
      'arrow-body-style': ['warn', 'as-needed'],
      'no-var': 'error',
      'prefer-const': 'warn',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
    },
  },
];
