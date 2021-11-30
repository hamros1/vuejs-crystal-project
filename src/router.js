import Vue from "vue";
import { createWebHistory, createRouter } from "vue-router";
import Home from "./Home.vue";
import Login from "./Login.vue";
import Register from "./Register.vue";

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
  },
	{
		path: "/register",
		name: "register",
		component: Register,
	},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
