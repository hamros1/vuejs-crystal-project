<template>
  <div class="bg-gray-800 min-h-screen m-0 text-white font-sans antialiased optimize-legibility">
    <div class="relative flex-flex-row min-w-screen min-h-[37px] bg-black">
    </div>
    <div class="relative flex flex-row min-w-screen min-h-[37px] bg-transparent">
      <div v-for="index in cryptos" :key="index.name" class="relative w-full flex flex-col items-center justify-center">
	<div class="hidden sm:block">
	  <div class="mx-auto text-white text-xs font-medium">
	    {{index.name}}
	  </div>
	  <div class="mx-auto text-gray-200 text-xs font-medium tracking-wide leading-none uppercase">
	    0 {{index.name}}
	  </div>
	</div>
      </div>
    </div>
    <div class="pt-[17vh] relative">
      <div class="max-w-md mx-auto items-center text-center justify-center overflow-hidden">
	<div class="relative flex flex-col space-y-2">
	  <div class="relative flex-1 flex-nowrap text-center text-amber-500 text-4xl font-medium">
	    0
	    <span class="text-amber-500 text-2xl font-medium">
	      XMR
	    </span>
	  </div>
	  <div class="relative flex-1 flex-nowrap text-center text-gray-400 text-xl font-medium">
	    $
	    <span class="text-white text-2xl font-medium">
	      0.00
	    </span>
	  </div>
	  <div class="relative flex flex-wrap space-x-2 justify-center items-center">
	    <div>
	      <button class="relative w-full flex-none px-4 bg-transparent rounded-xl border border border-amber-500 hover:bg-gray-900">Send</button>
	    </div>
	    <div>
	      <button class="relative w-full flex-none px-4 bg-transparent rounded-xl border border border-amber-500 hover:bg-gray-900">Receive</button>
	    </div>
	    <div> 
	      <button class="relative w-full flex-none px-4 bg-transparent rounded-xl border border border-amber-500 hover:bg-gray-900">Exchange</button>
	    </div>
	  </div>
	</div>
      </div>
    </div>
  </div>
</template>

<script>
let cryptos = [
  {name: "Bitcoin"},
  {name: "Ethereum"},
  {name: "Binance Coin"},
  {name: "Tether USD"},
  {name: "Cardano"},
  {name: "XRP"},
  {name: "Polkadot"},
  {name: "USD Coin"},
  {name: "Litecoin"},
];

export default {
  data() {
    return {
      cryptos,
    }
  }
}
</script>
