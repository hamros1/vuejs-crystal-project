<template>
  <div class="fixed top-0 flex min-w-full justify-between items-center">
    <div class="flex justify-end items-center"></div>

    <div class="flex justify-end items-center"></div>

    <div class="flex justify-end items-center"></div>
  </div>

  <div class="relative">
    <div class="grid grid-cols-8">
      <div
        v-for="index in currencies"
        :key="index.name"
        class="relative flex-shrink-0 border-r border-gray-400"
      >
        <div class="mx-auto px-[10px] py-[5px]">
          <div
            class="text-white text-center font-medium text-sm tracking-tight"
          >
            {{ index.name }}
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="relative"></div>

  <div></div>
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

let currencies = [
  { name: "Bitcoin" },
  { name: "Ethereum" },
  { name: "XMR" },
  { name: "Tether USD" },
  { name: "Cardano" },
  { name: "XRP" },
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
  setup(props) {
    return {
      currencies,
    };
  },
};
</script>
