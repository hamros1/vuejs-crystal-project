<template>
  <div class="relative w-1/4  mx-auto overflow-hidden rounded-xl">
    <div class="flex flex-col relative">
      <div class="z-10 absolute inset-0">
	<div class="mx-auto relative flex container top-1/2 translate-y-[-50%] h-5 w-5 shadow-md justify-start items-center text-center">
	  <button class="bg-gray-900 text-white text-xs font-bold tracking-widest uppercase"><span>Swap</span></button>
	</div>
      </div>
      <div class="h-1/2 relative p-4 bg-gray-900 flex flex-wrap flex-row justify-between">
	<div class="flex flex-col">
	  <div class="flex-1 font-medium text-sm tracking-tight text-gray-400">
	    I have: 0 bitcoin
	  </div>
	  <div class="flex flex-row items-center justify-start space-x-2 flex-nowrap">
	    <svg xmlns="http://www.w3.org/2000/svg" class="bg-amber-500 fill-current text-white stroke-1 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
	      <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
	      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clip-rule="evenodd" />
	    </svg>
	    <div class="font-medium text-xl tracking-wide text-white">
	      BTC
	    </div>
	  </div>
	</div>
	<div class="flex flex-col">
	  <div class="font-medium text-xl tracking-wide text-white">
	    $0.00
	  </div>
	  <div class="font-medium text-sm tracking-tight text-gray-400">
	    ≃ $0.00
	  </div>
	</div>
      </div>
      <div class="h-1/2 relative p-4 bg-black flex flex-wrap flex-row justify-between">
	<div class="flex flex-col">
	  <div class="flex-1 font-medium text-sm tracking-tight text-gray-400">
	    I want Ethereum
	  </div>
	  <div class="flex flex-row items-center justify-start space-x-2 flex-nowrap">
	    <svg xmlns="http://www.w3.org/2000/svg" class="bg-indigo-500 fill-current text-white stroke-1 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
	      <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
	      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clip-rule="evenodd" />
	    </svg>
	    <div class="font-medium text-xl tracking-wide text-white">
	      ETH
	    </div>
	  </div>
	</div>
	<div class="flex flex-col">
	  <div class="font-medium text-xl tracking-wide text-white">
	    $0.00
	  </div>
	  <div class="font-medium text-sm tracking-tight text-gray-400">
	    ≃ $0.00
	  </div>
	</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  }
}
</script>
