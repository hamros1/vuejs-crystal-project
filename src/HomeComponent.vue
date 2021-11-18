<template>
  <div class="bg-[#1b1a20] bg-hero-pattern h-screen text-white flex flex-col">
    <div class="flex bg-transparent border-b border-transparent items-center h-16 px-3 sm:px-5 flex-shrink-0 space-x-2">
      <div class="flex items-center space-x-2">
      </div>
      <div class="flex-grow">
      </div>
      <div class="flex space-x-2 items-center sm:text-base text-sm">
	<div class="flex justify-center items-center">
	  <button class="whitespace-nowrap relative inline-flex w-full rounded-md items-center justify-center text-xs font-bold tracking-wider uppercase text-white py-2 px-3 shadow bg-emerald-400 hover:opacity-90">
	      Sign In
	  </button>
	  <button class="whitespace-nowrap relative inline-flex w-full rounded-md items-center justify-center text-xs font-bold tracking-wider uppercase text-white py-2 px-3 shadow bg-emerald-400 hover:opacity-90">
	      Sign Up
	  </button>
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
import { RouterLink } from 'vue-router'

export default {
  name: 'HomeComponent',
}
</script>
