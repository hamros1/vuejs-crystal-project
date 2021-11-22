<template>
  <div
      class="d-flex
	     flex-row
	     min-w-full
	     items-center
	     min-h-[46px]
	     "
      >
      <div class="relative d-flex flex-wrap items-center justify-center">
	<div
	    class="
		   d-flex
		   text-center text-white
		   font-medium
		   text-base
		   leading-none
		   items-center
		   justify-center
		   "
	    >
	    <svg
		class="w-6 h-6 fill-current text-purple-600 stroke-1"
		fill="none"
		stroke="currentColor"
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
		>
		<path
		    stroke-linecap="round"
		    stroke-linejoin="round"
		    d="M13 10V3L4 14h7v7l9-11h-7z"
		    ></path>
	    </svg>
	      <span class="-mr-3 text-white"> $0.00 </span>
	</div>
      </div>
      <div class="flex-grow"></div>
      <div class="relative d-flex"></div>
  </div>
  <div class="relative mx-auto">

    <div class="grid grid-cols-8">
      <div
	  v-for="index in currencies"
	  :key="index.name"
	  class="relative d-flex flex-col border-r border-black border-opacity-60"
	  >
	  <div
	      class="
		     relative
		     group
		     mx-auto
		     overflow-hidden
		     items-center
		     py-2
		     space-y-1
		     "
	      >
	      <div
		  class="
			 col-span-1
			 cursor-pointer
			 text-gray-200
			 group-hover:text-gray-200
			 text-center
			 font-medium
			 leading-none
			 text-sm
			 tracking-tighter
			 filter
			 drop-shadow-md
			 "
		  >
		  {{ index.name }}
	      </div>
		<div
		    class="
			   col-span-1
			   cursor-pointer
			   text-gray-600
			   group-hover:text-gray-400
			   text-center
			   font-medium
			   leading-none
			   text-xs
			   tracking-normal
			   "
		    >
		    0 {{ index.name }}
		</div>
	  </div>
      </div>
    </div>
  </div>
  <div class="z-1 relative pt-[10vh] pb-6">
    <div class="relative group container d-flex mx-auto overflow-hidden items-center justify-center w-[50vh] h-[50vh] rounded-full">
      <div
	  class="
		 z-30
		 relative
		 flex-col
		 items-center
		 justify-center
		 text-center
		 "
	  >
	  <div class="text-5xl font-medium text-white filter drop-shadow-2xl tracking-tight">
	    0 <span class="font-light leading-tight">XMR</span>
	  </div>
	<div class="text-4xl font-light text-white filter drop-shadow-2xl tracking-tight leading-tight">
	  $<span class="font-medium">0</span>.00
	</div>
      </div>
      <div class="z-0 absolute inset-0 bg-[#1B1F24] border border-4 group-hover:border-8 border-transparent rounded-full opacity-90 transition-all duration-400 ease-in"></div>
      <div class="z-10 absolute inset-0 bg-transparent border border-4 group-hover:border-8 border-white border-opacity-60 rounded-full transition-all duration-400 ease-in"></div>
      <!-- <div class="z-0 absolute inset-0 bg-gradient-to-br from-[#79C0FF] to-[#84EDC1] filter blur-[6rem] opacity-50 z-0"></div> -->
    </div>
  </div>
</template>

<script>
import {
  Menu,
  MenuButton,
  MenuItems,
  MenuItem,
  TabGroup,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@headlessui/vue";

import { defineComponent, h, ref, onMounted, watchEffect, watch } from "vue";

import { RouterLink } from "vue-router";

import Particles from "particles.vue3";

let pages = [
  { name: "Portfolio" },
  { name: "Wallets" },
  { name: "Exchange" },
  { name: "Settings" },
];
let currencies = [
  { name: "Bitcoin" },
  { name: "Ethereum" },
  { name: "Monero" },
  { name: "Tether USD" },
  { name: "Cardano" },
  { name: "Ripple" },
  { name: "Stellar" },
  { name: "LiteCoin" },
];

export default {
  name: "DashboardComponent",
  components: {
    Particles,
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
  computed: {
    headerHeight() {
      const headerDOM = document.getElementById("header");
      return headerDOM.offsetHeight;
    },
  },
  setup(props) {
    return {
      pages,
      currencies,
    };
  },
};
</script>
