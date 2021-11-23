<template>
  <router-view />
</template>

<script>
import Portfolio from "./Portfolio.vue";
import Wallet from "./Wallet.vue";
import Exchange from "./Exchange.vue";

export default {
  components: {
    Portfolio,
    Wallet,
    Exchange,
  },
};
</script>
