<template>
  <div class="flex flex-col h-screen overflow-hidden font-sans antialiased text-gray-900 bg-gray-900">
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
	  </MenuItems>
	</Menu>
      </div>
    </div>
  </div>
</template>

<script>
import {
  Menu,
  MenuButton,
  MenuItems,
  MenuItem,
} from '@headlessui/vue'

export default {
  name: 'App',
  components: {
    Menu,
    MenuButton,
    MenuItems,
    MenuItem,
  },
}
</script>
