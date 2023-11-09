import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import IntegrateSelection from './views/IntegrateSelection.vue';

const routes: readonly RouteRecordRaw[] = [
     { path: '/', redirect: '/home' },
     { path: '/home', component: Home },
     { path: '/select/:template', component: IntegrateSelection },
];

export const router = createRouter({
     history: createWebHistory(),
     routes,
});
