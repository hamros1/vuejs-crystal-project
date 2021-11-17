<template>
  <div class="h-screen text-white flex flex-col bg-hero-pattern">
    <div class="flex bg-transparent border-b border-transparent items-center h-16 px-3 sm:px-5 flex-shrink-0 space-x-2">
    </div>
    <div class="flex flex-col items-center text-black w-full flex-grow overflow-y-scroll sm:justify-center">
      <div class="md:shadow-xl rounded px-6 bg-gray-50 w-full max-w-sm space-y-4 py-4 md:border border-gray-50 my-5">
	<div class="space-y-3">
	  <label class="block relative space-y-1">
	    <span class="mb-1 text-black">Username</span>
	    <input class="w-full bg-gray-50 border border-gray-200 text-black px-3 py-2 rounded focus:ring-2 focus:outline-none" value="">
	  </label>
	  <label class="block relative space-y-1">
	    <span class="mb-1 text-black">Password</span>
	    <input class="w-full bg-gray-50 border border-gray-200 text-black px-3 py-2 rounded focus:ring-2 focus:outline-none" value="" type="password">
	  </label>

	  <div>
	    <a href="/forgot-password" class="text-black cursor-pointer hover:underline focus:outline-none">
	      Forgot your password?
	    </a>
	  </div>
	  <button class="flex justify-center items-center text-base font-bold tracking-widest bg-[#0B929B] text-sm text-gray-900 uppercase shadow-xl border border-black border-opacity-60 py-2 px-4 sm:px-4 rounded w-full">
	    Sign In
	  </button>
	</div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, h, ref, onMounted, watchEffect, watch } from 'vue'
import { RouterLink } from 'vue-router'

export default {
  name: 'LoginComponent',
}
</script>
