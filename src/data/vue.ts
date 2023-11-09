import { TIntegration } from '../types';

export const VUE_VERSIONS: TIntegration[] = [
     {
          alias: 'Use Vue 2',
          value: 'vue2',
          included: false,
     },
     {
          alias: 'Use Vue 3',
          value: 'vue3',
          included: false,
     },
];

export const VUE_OPTIONS: TIntegration[] = [
     {
          alias: 'Add PWA',
          value: 'pwa-support',
          included: false,
     },
     {
          alias: 'Add Pinia for State Management',
          value: 'pinia-support',
          included: false,
     },
     {
          alias: 'Add Vitest for Unit Testing',
          value: 'vitest-support',
          included: false,
     },
     {
          alias: 'Add Vue Router for SPA',
          value: 'vue-router-support',
          included: false,
     },
];
