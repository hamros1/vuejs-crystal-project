<template>
  <div class="absolute z-0 inset-x-0 h-[calc((var(--vh,1vh)*100)-40px)] overflow-hidden">
    <div class="absolute mx-auto flex flex-col items-center top-[30vh] left-1/2 -translate-x-1/2 max-w-[80vw]">
      <div class="relative">
	<div class="relative px-[32px] py-[84px]">
	</div>
      </div>
    </div>
    <div class="absolute inset-x-0 top-[11vh] left-[50%] translate-x-[-50%] w-[810px]">
      <div class="relative overflow-x-scroll lg:overflow-x-visible hide-scrollbar">
	<div class="inline-flex lg:flex lg:flex-wrap lg:p-0 md:p-[80px] sm:p-[28px]">
	  <div v-for="index in 6" :key="index" class="relative flex flex-shrink-0 translate-z-[0px] max-w-[270px] p-[5px] w-[270px]">
	    <div class="relative flex flex-1 flex-col shadow-2xl">
	      <div class="relative pb-[50%] overflow-hidden">
		<div class="absolute min-w-full min-h-full object-cover -z-10"></div>
	      </div>
	      <div class="relative flex flex-1 flex-col justify-between p-2 min-h-[100px]">
	      </div>
	    </div>
	  </div>
	</div>
      </div>
    </div>

    <div class="relative z-10 flex-auto flex items-center justify-center text-sm text-center text-gray-600 py-16 px-4 sm:px-6 lg:px-8">
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

	  <button class="block w-full py-2 px-3 border border-[#5cceb5] border-opacity-60 rounded-md text-[#ecf4f2] font-medium tracking-wide bg-gradient-to-t bg-gray-700 to bg-gray-800 shadow-sm sm:text-sm mb-10 hover:bg-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2daa97] focus-visible:ring-offset-2 focus-visible:ring-offset-[#caf0ef]">
	    Create your account
	  </button>
	</form>
      </div>
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
