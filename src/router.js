import Vue from 'vue'
import { createWebHistory, createRouter } from 'vue-router'
import HomeComponent from './HomeComponent.vue'
import LoginComponent from './LoginComponent.vue'
import RegisterComponent from './RegisterComponent.vue'

const routes = [
  {
    path: '/',
    name: 'HomeComponent',
    component: HomeComponent,
  },
  {
    path: '/login',
    name: 'LoginComponent',
    component: LoginComponent,
  },
  {
    path: '/register',
    name: 'RegisterComponent',
    component: RegisterComponent,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
