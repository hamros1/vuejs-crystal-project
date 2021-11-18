<template>
  <TabGroup class="backdrop-filter backdrop-blur-[0.05rem] flex sticky top-0 z-30 h-[76px] bg-gradient-to-b from-[#1b1a20] to-transparent bg-opacity-50 firefox:bg-opacity-90 text-base font-semibold text-white py-5 items-center justify-between" as="div" :manual="manual">
  <TabList class="flex-1 flex-no-wrap z-10 transition-bg duration-200 py-2 sm:py-2">
  <Tab
      v-for="(tab, tabIdx) in tabs"
      key="tab.name"
      :disabled="tab.disabled"
      class="group relative min-w-0 flex-1 overflow-hidden py-4 px-4 text-white text-base font-medium tracking-widest text-center focus:z-10"
      :class="{
	      }"
      v-slot="{ selected }"
      >
      <span>{{tab.name}}</span>
      <span
	  aria-hidden="true"
	  class="absolute inset-x-0 bottom-0 h-1"
	  :class="{'bg-[#1cb384]': selected, 'bg-transparent':!selected}"/>
  </Tab>
  </TabList>

  <TabPanels>
  <TabPanel>
  <div class="absolute inset-x-0 overflow-hidden top-[7rem] container mx-auto px-4">
    <div class="relative flex flex-col items-center mx-auto">
      <div class="flex flex-row flex-wap relative w-full justify-between">
	<div class="flex flex-wrap justify-start items-center">
	  <span class="text-base text-white font-medium">Available Balance: </span>
	  <span class="text-emerald-300 inline-block text-xl sm:text-lg lg:border border-[#52d1ad] rounded-lg py-1 lg:px-4 ml-2 font-mono">$0</span>
	</div>

	<div class="flex flex-grow px-8">
	</div>

	<div class="flex flex-row justify-end items-center p-4 md:p-3 lg:p-3 bg-emerald-400 rounded border border-teal-800 border-opacity-60">
	    <input class="sm:max-w-1/2 lg:w-32 text-center text-lg mx-2 bg-white font-mono outline-none rounded-sm" placeholder="$100">
	</div>
      </div>
    </div>
  </div>
  </TabPanel>
  <TabPanel>
  <div class="absolute inset-x-0 overflow-hidden top-[7rem] container mx-auto px-4 max-w-8xl">
    <div class="relative w-full h-full">
      <div class="flex flex-1 justify-center items-center">
	<span class="text-base text-white font-medium">Available Balance: </span>
	<span class="text-emerald-300 inline-block text-xl sm:text-lg lg:border border-[#52d1ad] rounded-lg py-1 lg:px-4 ml-2 font-mono">$50</span>
      </div>
    </div>
  </div>

  </TabPanel>
  <TabPanel>
  <div class="absolute inset-x-0 overflow-hidden top-[7rem] container mx-auto px-4 max-w-8xl">
    <div class="relative w-full h-full">
      <div class="flex flex-1 justify-center items-center">
	<span class="text-base text-white font-medium">Available Balance: </span>
	<span class="text-emerald-300 inline-block text-xl sm:text-lg lg:border border-[#52d1ad] rounded-lg py-1 lg:px-4 ml-2 font-mono">$100</span>
      </div>
    </div>
  </div>
  </TabPanel>
  </TabPanels>
  <Menu>
    <MenuButton class="flex items-center justify-center text-white text-base font-medium tracking-wide text-center py-4 px-4 text-[#52d1ad] fill-current stroke-1">
    <svg xmlns="http://www.w3.org/2000/svg" class="mr-[0.9vw] h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
    </svg>
    <span class="mr-[1.5rem]">
      Hampus Rosencrantz
    </span>
    </MenuButton>

    <MenuItems class="absolute top-[4rem] right-[2rem] w-56 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none">
    <div class="px-3 py-4">
      <span class="text-black text-sm font-medium tracking-tighter leading-none">
	Settings
      </span>
    </div>
    <div class="px-3 py-4">
      <span class="text-black text-sm font-medium tracking-tighter leading-none">
	Orders
      </span>
    </div>
    <div class="px-3 py-4">
      <span class="text-black text-sm font-medium tracking-tighter leading-none">
	Sign Out
      </span>
    </div>
    </MenuItems>
  </Menu>
  </TabGroup>
</template>

<script>
import { Menu, MenuButton, MenuItems, MenuItem, TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
import { defineComponent, h, ref, onMounted, watchEffect, watch } from 'vue'
import { RouterLink } from 'vue-router'

let tabs = [
  { name: 'Dashboard' },
  { name: 'Trade' },
  { name: 'Preferences' },
]

export default {
  name: 'DashboardComponent',
  components: {
    Menu,
    MenuButton,
    MenuItems,
    MenuItem,
    TabGroup,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
  },
  setup(props, context) {
    let manual = ref(false)

    return {
      tabs: ref(tabs),
      manual,
    }
  }
}
</script>
