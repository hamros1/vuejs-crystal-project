<template>
  <div class="bg-gray-800 min-h-screen m-0 text-white font-sans antialiased optimize-legibility">
    <div class="pt-[17vh] relative">
      <div class="max-w-md mx-auto items-center text-center justify-center">
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
	      <button class="relative flex-none px-4 bg-transparent rounded-xl border border border-amber-500 hover:bg-gray-900">Send</button>
	    </div>
	    <div>
	      <button class="relative flex-none px-4 bg-transparent rounded-xl border border border-amber-500 hover:bg-gray-900">Receive</button>
	    </div>
	    <div> 
	      <button class="relative flex-none px-4 bg-transparent rounded-xl border border border-amber-500 hover:bg-gray-900">Exchange</button>
	    </div>
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
