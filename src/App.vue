<template>
  <div id="nav">
    <router-link to="/"></router-link>
    <router-link to="/"></router-link>
    <router-link to="/"></router-link>
  </div>
  <router-view/>
</template>

<script>
import HomeComponent from './HomeComponent.vue'
import LoginComponent from './LoginComponent.vue'
import RegisterComponent from './RegisterComponent.vue'

export default {
  components: {
    HomeComponent,
    LoginComponent,
    RegisterComponent,
  }
}
</script>
