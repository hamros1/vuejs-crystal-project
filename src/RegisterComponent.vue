<template>
  <div class="bg-[#1b1a20] bg-hero-pattern relative z-10 flex-auto flex items-center justify-center text-sm text-center text-gray-600 py-16 px-4 sm:px-6 lg:px-8">
    <div class="w-full max-w-sm">
      <form action="/login" method="POST">
	<div class="relative">
	  <label class="sr-only">Email address</label>
	  <input id="email-address" class="text-gray-900 ring-gray-900 ring-opacity-5 placeholder-gray-400 appearance-none bg-white rounded-md block w-full px-3 py-2 border border-transparent shadow ring-1 sm:text-sm mb-4 focus:border-[#22b088] focus:border-opacity-60 focus:ring-[#208f71] focus:outline-none" type="password" placeholder="Email address">
	</div>
	<div class="relative">
	  <label class="sr-only">Password</label>
	  <input id="password" class="text-gray-900 ring-gray-900 ring-opacity-5 placeholder-gray-400 appearance-none bg-white rounded-md block w-full px-3 py-2 border border-transparent shadow ring-1 sm:text-sm mb-4 focus:border-[#22b088] focus:border-opacity-60 focus:ring-[#208f71] focus:outline-none" type="password" placeholder="Password">
	</div>
	<div class="relative">
	  <label class="sr-only">Confirm password</label>
	  <input id="password_confirmation" class="text-gray-900 ring-gray-900 ring-opacity-5 placeholder-gray-400 appearance-none bg-white rounded-md block w-full px-3 py-2 border border-transparent shadow ring-1 sm:text-sm mb-4 focus:border-[#22b088] focus:border-opacity-60 focus:ring-[#208f71] focus:outline-none" type="password" placeholder="Confirm password">
	</div>
	<button class="block w-full py-2 px-3 border border-[#5cceb5] border-opacity-60 rounded-md text-[#ecf4f2] font-medium bg-gradient-to-t bg-gray-700 to bg-gray-800 shadow-md sm:text-sm mb-10 hover:bg-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2daa97] focus-visible:ring-offset-2 focus-visible:ring-offset-[#caf0ef]">
	  Create your account
	</button>
      </form>
    </div>
  </div>
</template>

<script>
import { defineComponent, h, ref, onMounted, watchEffect, watch } from 'vue'
import { RouterLink } from 'vue-router'

export default {
  name: 'RegisterComponent',
}
</script>
