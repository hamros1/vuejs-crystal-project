<template>
  <router-view />
</template>

<script>
import Home from "./Home.vue";
import Login from "./Login.vue";
import Register from "./Register.vue";

export default {
  components: {
    Home,
    Login,
		Register,
  },
};
</script>
