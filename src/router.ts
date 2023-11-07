import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import TemplateSelection from './views/TemplateSelection.vue'


const routes = [
  { path: '/', component: Home },
  { path: '/select/:template', component: TemplateSelection },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})