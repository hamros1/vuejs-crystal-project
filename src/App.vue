<template>
  <div class="flex flex-col h-screen overflow-hidden font-mono antialiased text-gray-900 bg-gray-900">
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
	    <p class="text-sm leading-5">Signed in as</p>
	    <p class="text-sm font-medium leading-5 text-gray-900 truncate">hamros@tuta.io</p>
	  </div>
	  <div class="py-1">
	    <a class="w-full px-4 py-2 text-sm block text-left hover:bg-gray-700">Preferences</a>
	    <a class="w-full px-4 py-2 text-sm block text-left hover:bg-gray-700">Feedback</a>
	  </div>
	  <div class="px-4 py-2">
	    <SwitchGroup
		as="div"
		class="flex-items-center space-x-4 justify-between">
	    <SwitchLabel>Dark Mode</SwitchLabel>
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
	  </MenuItems>
	</Menu>
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
