import { TIntegration } from '../types';

export const GLOBAL_INTEGRATIONS: TIntegration[] = [
     {
          alias: 'Use TypeScript',
          value: 'typescript',
          included: false,
     },
     {
          alias: 'Integrate Prettier',
          value: 'prettier',
          included: false,
     },
     {
          alias: 'Integrate ESLint',
          value: 'eslint',
          included: false,
     },
     {
          alias: 'Integrate Tailwind',
          value: 'tailwindcss',
          included: false,
     },
];

export const PACKAGE_MANAGERS: TIntegration[] = [
     {
          alias: 'Use NPM',
          value: 'npm',
          included: false,
     },
     {
          alias: 'Use Yarn',
          value: 'yarn',
          included: false,
     },
     {
          alias: 'Use PNPM',
          value: 'pnpm',
          included: false,
     },
     {
          alias: 'Use Bun',
          value: 'bun',
          included: false,
     },
];
