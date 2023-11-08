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
