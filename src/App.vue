<template>
  <div id="nav">
    <router-link to="/"></router-link>
    <router-link to="/login"></router-link>
    <router-link to="/register"></router-link>
    <router-link to="/dashboard"></router-link>
  </div>
  <div class="min-h-screen optimize-legibility font-mono antialiased flex flex-col bg-[#1b1a2a] bg-hero-pattern">
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
