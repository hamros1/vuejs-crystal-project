import Vue from 'vue'
import { createWebHistory, createRouter } from 'vue-router'
import Home from './Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
