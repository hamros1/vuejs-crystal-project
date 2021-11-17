<template>
  <div class="flex flex-col min-h-screen overflow-hidden">
    <div class="flex bg-gray-900 items-center h-16 px-3 sm:px-5 flex-shrink-0 space-x-2">
      <div class="flex-grow">
      </div>

      <div class="relative z-20">
	<Menu>
	  <span class="rounded-md shadow-sm">
	    <MenuButton
		ref="trigger"
		class="flex items-center text-xs space-x-2 focus:outline-none border-border-transparent focus:border-gray-600 rounded p-1 relative">

	    <span class="hidden sm:block text-white">
	      Preferences
	    </span>

	    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white fill-current stroke-1" viewBox="0 0 24 24">
	      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="0" d="M19 9l-7 7-7-7" />
	    </svg>
	    </MenuButton>
	  </span>

	  <MenuItems
	      ref="container"
	      class="absolute right-0 w-56 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none">
	  <div class="px-4 py-3">
	    <p class="text-sm leading-5">
	    Signed in as
	    </p>
	    <p class="text-sm font-medium leading-5 text-gray-900 truncate">
	    hamros@tuta.io
	    </p>
	  </div>

	  <div class="px-4 py-2">
	    <SwitchGroup
		as="div"
		class="flex items-center space-x-2 justify-between">
	    <SwitchLabel
		as="div"
		class="text-sm flex items-center space-x-2">
	    Dark Mode
	    </SwitchLabel>
	    <Switch
		as="button"
		v-model="state"
		:className="resolveSwitchClass" v-slot="{ checked }">
	    <span
		class="inline-block w-5 h-5 transition duration-200 ease-in-out transform bg-white rounded-full"
		:class="{ 'translate-x-5': checked, 'translate-x-0': !checked }"/>
	    </Switch>
	    </SwitchGroup>
	  </div>

	  <div class="py-1">
	    <button class="w-full px-4 py-2 text-sm block text-left hover:bg-gray-700">Preferences</button>
	    <button class="w-full px-4 py-2 text-sm block text-left hover:bg-gray-700">Feedback</button>
	  </div>

	  <div class="py-1">
	    <button class="w-full px-4 py-2 text-sm block text-left hover:bg-gray-700">
	      Log Out
	    </button>
	  </div>
	  </MenuItems>
	</Menu>
      </div>
    </div>

    <div class="relative z-10 flex-grow mx-auto mt-20 text-white page-wrapper">
      <div class="relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
	<div class="relative grid grid-cols-4 gap-4 sm:gap-12">
	  <button type="button" class="relative group cursor-pointer focus:outline-none focus:ring focus:ring-indigo-500">
	    <div class="absolute inset-0 flex items-center justify-center p-8">
	      <div class="w-full h-full bg-gradient-to-br from-cyan-400 to-lightblue-500 filter blur-2xl">
	      </div>
	    </div>
	    <img class="relative" src="https://img1.hulu.com/user/v3/artwork/d5e7ef8b-9492-4a85-8c6b-8f8d532e0836?base_image_bucket_name=image_manager&base_image=a9500711-842a-4e48-a0e8-f14b721b0cdd&size=600x338&format=jpeg">
	  </button>
	  <button type="button" class="relative group cursor-pointer focus:outline-none focus:ring focus:ring-indigo-500">
	    <div class="absolute inset-0 flex items-center justify-center p-8">
	      <div class="w-full h-full bg-gradient-to-br from-rose-400 to-pink-500 filter blur-2xl">
	      </div>
	    </div>
	    <img class="relative" src="https://img1.hulu.com/user/v3/artwork/d5e7ef8b-9492-4a85-8c6b-8f8d532e0836?base_image_bucket_name=image_manager&base_image=a9500711-842a-4e48-a0e8-f14b721b0cdd&size=600x338&format=jpeg">
	  </button>
	  <button type="button" class="relative group cursor-pointer focus:outline-none focus:ring focus:ring-indigo-500">
	    <div class="absolute inset-0 flex items-center justify-center p-8">
	      <div class="w-full h-full bg-gradient-to-br from-emerald-400 to-teal-500 filter blur-2xl">
	      </div>
	    </div>
	    <img class="relative" src="https://img1.hulu.com/user/v3/artwork/d5e7ef8b-9492-4a85-8c6b-8f8d532e0836?base_image_bucket_name=image_manager&base_image=a9500711-842a-4e48-a0e8-f14b721b0cdd&size=600x338&format=jpeg">
	  </button>
	  <button type="button" class="relative group cursor-pointer focus:outline-none focus:ring focus:ring-indigo-500">
	    <div class="absolute inset-0 flex items-center justify-center p-8">
	      <div class="w-full h-full bg-gradient-to-br from-amber-400 to-orange-500 filter blur-2xl">
	      </div>
	    </div>
	    <img class="relative" src="https://img1.hulu.com/user/v3/artwork/d5e7ef8b-9492-4a85-8c6b-8f8d532e0836?base_image_bucket_name=image_manager&base_image=a9500711-842a-4e48-a0e8-f14b721b0cdd&size=600x338&format=jpeg">
	  </button>
	</div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, h, ref, onMounted, watchEffect, watch } from 'vue'

import {
  Menu,
  MenuButton,
  MenuItems,
  MenuItem,
  SwitchGroup,
  Switch,
  SwitchLabel,
} from '@headlessui/vue'

export default {
  name: 'App',
  components: {
    Menu,
    MenuButton,
    MenuItems,
    MenuItem,
    SwitchGroup,
    Switch,
    SwitchLabel,
  },
  setup(props, context) {
    let state = ref(false)

    return {
      state,
      resolveSwitchClass({ checked }) {
	return classNames(
	  'relative inline-flex flex-shrink-0 h-6 transition-colors duration-200 ease-in-out border-2 boder-transparent rounded-full cursor-pointer w-11 focus:outline-none focus:shadow-outline', checked ? 'bg-indigo-600' : 'bg-gray-200')
      },
    }
  },
}
</script>
