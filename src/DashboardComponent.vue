<template>
  <TabGroup class="flex justify-between px-4 border-b border-[#5fccc1] backdrop-filter backdrop-blur-[0.05rem] sticky top-0 z-40 h-[76px] bg-black bg-opacity-50 firefox:bg-opacity-90 text-base font-semibold text-white py-5" as="div" :manual="manual">
  <TabList class="flex items-center z-20 transition-bg duration-200 py-2">
  <Tab
      v-for="(tab, tabIdx) in tabs"
      key="tab.name"
      :disabled="tab.disabled"
      class="group relative flex-h-full py-4 px-4 text-white text-base font-medium tracking-widest items-center justify-center focus:z-10"
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
  <div class="flex flex-grow">
  </div>
  <Menu>
    <MenuButton class="z-30 flex items-center text-white text-base font-medium tracking-wide text-center py-4 px-4 text-[#52d1ad] fill-current stroke-1">
    <svg xmlns="http://www.w3.org/2000/svg" class="mr-[0.9vw] h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
    </svg>
    <span class="mr-[1.5rem]">
      Hampus Rosencrantz
    </span>
    </MenuButton>

    <MenuItems class="absolute z-30 top-[4rem] right-[2rem] w-56 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none">
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
  <TabPanels>
  <TabPanel>
  <div class="z-40 absolute mx-auto flex flex-col items-center top-[30vh] left-1/2 -translate-x-1/2 max-w-[80vw]">
    <div class="relative">
      <div class="relative px-[32px] py-[84px]">
	<h2 class="relative w-full text-center text-white">Coming Soon</h2>
	<h2 class="relative w-full text-center text-white">Coming Soon</h2>
	<h2 class="relative w-full text-center text-white">Coming Soon</h2>
	<h2 class="relative w-full text-center text-white">Coming Soon</h2>
      </div>
    </div>
  </div>
    <div class="absolute inset-x-0 bottom-[110px] top-[20vh]">
      <div class="absolute top-1/2 left-[50%] translate-x-[-50%] translate-y-[-50%] w-[810px]">
	<div class="relative overflow-auto">
	  <div class="flex flex-wrap p-0">
	    <div class="relative flex flex-shrink-0 translate-z-[0px] max-w-[270px] p-[5px] w-[270px]">
	      <div class="relative flex flex-1 flex-col">
		<div class="relative">
		  <div class="absolute min-w-full min-h-full object-cover -z-10 bg-black min-h-[100px]">
		  </div>
		</div>
		<div class="relative flex flex-1 flex-col  justify-between p-2 min-h-[100px]">
		</div>
	      </div>
	    </div>

	    <div class="relative flex flex-shrink-0 translate-z-[0px] max-w-[270px] p-[5px] w-[270px]">
	      <div class="relative flex flex-1 flex-col">
		<div class="relative">
		  <div class="absolute min-w-full min-h-full object-cover -z-10 bg-black min-h-[100px]">
		  </div>
		</div>
		<div class="relative flex flex-1 flex-col  justify-between p-2 min-h-[100px]">
		</div>
	      </div>
	    </div>

	    <div class="relative flex flex-shrink-0 translate-z-[0px] max-w-[270px] p-[5px] w-[270px]">
	      <div class="relative flex flex-1 flex-col">
		<div class="relative">
		  <div class="absolute min-w-full min-h-full object-cover -z-10 bg-black min-h-[100px]">
		  </div>
		</div>
		<div class="relative flex flex-1 flex-col  justify-between p-2 min-h-[100px]">
		</div>
	      </div>
	    </div>
	  </div>
	</div>
      </div>
  </div>
  </TabPanel>
  </TabPanels>
  </TabGroup>
</template>

<script>
import { Menu, MenuButton, MenuItems, MenuItem, TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
import { defineComponent, h, ref, onMounted, watchEffect, watch } from 'vue'
import { RouterLink } from 'vue-router'

let tabs = [
  { name: 'Tab 1' },
  { name: 'Tab 2' },
  { name: 'Tab 3' },
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
