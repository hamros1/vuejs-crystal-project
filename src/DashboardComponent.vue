<template>
  <div
    class="
      relative
      w-[100%]
      overflow-hidden
      h-[calc((var(--vh,1vh)*100))]
      bottom-[0px]
    "
  >
    <div
      class="
        z-40
        absolute
        left-1/2
        bg-opacity-50
        firefox:bg-opacity-90
        top-0
        translate-x-[-50%]
        w-full
        mx-auto
        bg-[#0d1117]
        border-b border-emerald-200
        backdrop-filter backdrop-blur-sm
      "
    >
      <TabGroup
        class="container d-flex mx-auto items-center justify-center"
        as="div"
        :manual="manual"
      >
        <TabList
          class="z-0 relative d-flex items-center justify-between space-x-12"
        >
          <Tab
            class="
              z-20
              inline-block
              group
              relative
              overflow-hidden
              py-8
              text-2xl
              font-medium
              tracking-widest
              text-white
              focus:z-40
            "
            v-for="(tab, tabIdx) in tabs"
            key="tab.name"
            v-slot="{ selected }"
            ><span>{{ tab.name }}</span
            ><span
              aria-hidden="true"
              class="absolute inset-x-0 bottom-0 h-2"
              :class="{ 'bg-teal-300': selected, 'bg-transparent': !selected }"
          /></Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <div
              class="
                z-0
                absolute
                inset-0
                d-flex
                flex-col
                mx-auto
                items-center
                overflow-visible
                top-[calc((var(--vh,11vh)+40px))]
                translate-y-[-50%]
              "
            >
              <div class="relative max-w-4xl w-full mx-auto">
                <transition
                  enter-active-class="transition-all transition-fastest ease-out-quad"
                  leave-active-class="transition-all transition-faster ease-in-quad"
                  enter-class="opacity-0 scale-70"
                  enter-to-class="opacity-100 scale-100"
                  leave-class="opacity-100 scale-100"
                  leave-to-class="opacity-0 scale-70"
                >
                </transition>
                <div
                  class="
                    z-40
                    d-flex
                    flex-col
                    relative
                    mx-auto
                    px-[20px]
                    py-[40px]
                    filter
                    drop-shadow
                    text-center
                    space-y-6
                  "
                >
                  <div class="col-span-2 mx-auto pb-10">
                    <h3 class="text-[6rem] text-emerald-200 mb-4 wh-full">
                      $0
                    </h3>
                    <div
                      class="text-4xl font-medium text-white wh-full leading-4"
                    >
                      No Holdings
                    </div>
                  </div>
                  <div class="col-span-1 mx-auto">
                    <div class="relative d-flex flex-wrap">
                      <div
                        class="
                          d-flex
                          grid grid-cols-5
                          w-full
                          min-w-full
                          space-x-6
                        "
                      >
                        <div
                          class="
                            relative
                            py-4
                            d-flex
                            items-center
                            justify-center
                            text-center text-base text-gray-200
                          "
                        >
                          <div>
                            <div
                              class="
                                text-white
                                font-medium
                                leading-6
                                tracking-tight
                              "
                            >
                              24H Change
                            </div>
                            $0.00
                          </div>
                        </div>

                        <div
                          class="
                            relative
                            py-4
                            d-flex
                            items-center
                            justify-center
                            text-center text-base text-gray-200
                          "
                        >
                          <div>
                            <div
                              class="
                                text-white
                                font-medium
                                leading-6
                                tracking-tight
                              "
                            >
                              Highest Balance
                            </div>
                            $0.00
                          </div>
                        </div>

                        <div
                          class="
                            relative
                            py-4
                            d-flex
                            items-center
                            justify-center
                            text-center text-base text-gray-200
                          "
                        >
                          <div>
                            <div
                              class="
                                text-white
                                font-medium
                                leading-6
                                tracking-tight
                              "
                            >
                              Portfolio Age
                            </div>
                            $0.00
                          </div>
                        </div>

                        <div
                          class="
                            relative
                            py-4
                            d-flex
                            items-center
                            justify-center
                            text-center text-base text-gray-200
                          "
                        >
                          <div>
                            <div
                              class="
                                text-white
                                font-medium
                                leading-6
                                tracking-tight
                              "
                            >
                              Best 24H Asset
                            </div>
                            $0.00
                          </div>
                        </div>
                        <div
                          class="
                            relative
                            py-4
                            d-flex
                            items-center
                            justify-center
                            text-center text-base text-gray-200
                          "
                        >
                          <div>
                            <div
                              class="
                                text-white
                                font-medium
                                leading-6
                                tracking-tight
                              "
                            >
                              Worst 24H Asset
                            </div>
                            $0.00
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="z-10 absolute inset-0 bg-black opacity-60"></div>
                <div
                  class="
                    z-10
                    absolute
                    inset-0
                    shadow-xl
                    bg-transparent
                    border border-black border-opacity-60
                  "
                ></div>
                <div
                  class="
                    z-0
                    absolute
                    inset-0
                    bg-gradient-to-br
                    from-emerald-400
                    to-teal-300
                    filter
                    blur-[6rem]
                    opacity-50
                  "
                ></div>
              </div>
            </div>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
    <div class="z-[-10] absolute inset-0 overflow-hidden">
      <div
        class="
          block
          absolute
          top-[50%]
          left-[50%]
          translate-x-[-50%] translate-y-[-50%]
          bg-center bg-contain bg-repeat
          h-[calc(100vh+200px+200px)]
          min-w-[calc(3600px)]
          wh-full
          bg-[#0d1117] bg-hero-pattern
        "
      ></div>
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

let tabs = [{ name: "Portfolio" }, { name: "Wallet" }, { name: "Exchange" }];

export default {
  name: "DashboardComponent",
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
    let manual = ref(false);

    return {
      tabs: ref(tabs),
      manual,
    };
  },
};
</script>
