import Vue from 'vue'
import { createWebHistory, createRouter } from 'vue-router'
import Portfolio from './Portfolio.vue'
import Wallet from './Wallet.vue'
import Exchange from './Exchange.vue'

const routes = [
  {
    path: '/',
    name: 'Portfolio',
    component: Portfolio,
  },
  {
    path: '/wallet',
    name: "Wallet",
    component: Wallet,
  },
  {
    path: '/exchange',
    name: 'Exchange',
    component: Exchange,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
