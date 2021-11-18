<template>
  <div id="nav">
    <router-link to="/"></router-link>
    <router-link to="/login"></router-link>
    <router-link to="/register"></router-link>
    <router-link to="/dashboard"></router-link>
  </div>
  <div id="page_wrapper" class="bg-[#1b1a20] bg-hero-pattern font-mono antialiased text-gray-400 min-h-screen flex flex-col">
    <router-view/>
  </div>
</template>

<script>
import HomeComponent from './HomeComponent.vue'
import LoginComponent from './LoginComponent.vue'
import RegisterComponent from './RegisterComponent.vue'
import DashboardComponent from './DashboardComponent.vue'

export default {
  components: {
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
  }
}
</script>
