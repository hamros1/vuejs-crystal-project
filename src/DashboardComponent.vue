<template>
  <TabGroup class="flex sticky top-0 z-30 bg-transparent h-[72px] bg-opacity-50 firefox:bg-opacity-90 text-base font-semibold text-white py-5" as="div" :manual="manual">
  <TabList class="relative z-0 flex-none">
  <Tab
      v-for="(tab, tabIdx) in tabs"
      key="tab.name"
      :disabled="tab.disabled"
      class="group relative min-w-0 flex-1 overflow-hidden py-4 px-4 text-white text-base font-medium tracking-wide text-center focus:z-10"
      :class="{
	      }"
      v-slot="{ selected }"
      >
      <span>{{tab.name}}</span>
      <span
	  aria-hidden="true"
	  class="absolute inset-x-0 bottom-0 h-1"
	  :class="{'bg-teal-400': selected, 'bg-transparent':!selected}"/>
  </Tab>
  </TabList>

  <TabPanels>
    <TabPanel></TabPanel>
    <TabPanel></TabPanel>
    <TabPanel></TabPanel>
  </TabPanels>
  </TabGroup>

</template>

<script>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
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
