import Vue from "vue";
import { createWebHistory, createRouter } from "vue-router";
import Home from "./Home.vue";
import Login from "./Login.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
