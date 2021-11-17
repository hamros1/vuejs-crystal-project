<template>
  <div class="h-screen text-white flex flex-col">
    <div class="flex bg-transparent border-b border-transparent items-center h-16 px-3 sm:px-5 flex-shrink-0 space-x-2">
      <div class="flex items-center space-x-2">
      </div>
      <div class="flex-grow">
      </div>
      <div class="flex space-x-2 items-center sm:text-base text-sm">
	<div class="flex justify-center items-center">
	  <a href="/login" class="mr-3 flex justify-center items-center text-base font-bold tracking-widest bg-gradient-to-t from-gray-50 to-white text-black uppercase shadow-xl border border-black py-2 px-4 sm:px-4 rounded">
	    Login
	  </a>
	  <button class="flex justify-center items-center text-base font-bold tracking-widest bg-[#0B929B] text-sm text-gray-900 uppercase shadow-xl border border-black border-opacity-60 py-2 px-4 sm:px-4 rounded">
	    Sign In
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
