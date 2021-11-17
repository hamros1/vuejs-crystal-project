<template>
  <div class="h-screen text-white flex flex-col bg-gray-900 bg-hero-pattern">
    <div class="flex bg-transparent border-b border-[#f6f8fa] items-center h-16 px-3 sm:px-5 flex-shrink-0 space-x-2">
      <div class="flex items-center space-x-2">
      </div>
      <div class="flex-grow">
      </div>
      <div class="flex space-x-2 items-center sm:text-base text-sm">
	<div class="flex justify-center items-center">
	  <a href="/register" class="mr-3 flex justify-center items-center text-base font-medium bg-transparent shadow-lg border border-[#f6f8fa] py-2 px-4 sm:px-4 rounded-md">
	    Login
	  </a>
	  <a href="/login" class="mr-3 flex justify-center items-center text-base font-medium bg-gradient-to-b from-white to-[#f6f8fa] text-[#1b1f23] shadow-lg border border-black border-opacity-60 py-2 px-4 sm:px-4 rounded-md">
	    Sign Up
	  </a>
	</div>
      </div>
    </div>
    <div class="flex flex-col flex-grow overflow-y-auto">
      <div class="py-16 px-10 md:px-20 lg:w-4/5 mx-auto flew-grow space-y-24">
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, h, ref, onMounted, watchEffect, watch } from 'vue'

const routes = {
  { path: '/', component: HomeComponent }
  { path: '/login', component: LoginComponent }
}

const SimpleRouter = {
  data: () => ({
    currentRoute: window.location.pathname
  }),

  computed: {
    CurrentComponent() {
      return routes[this.currentRoute]
    }
  }
}

export default {
  name: 'App',
}
</script>
