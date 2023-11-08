import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import TemplateSelection from './views/TemplateSelection.vue';

const routes: readonly RouteRecordRaw[] = [
     { path: '/', redirect: '/home' },
     { path: '/home', component: Home },
     { path: '/select/:template', component: TemplateSelection },
];

export const router = createRouter({
     history: createWebHistory(),
     routes,
});
