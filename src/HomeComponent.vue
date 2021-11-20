<template>
  <nav class="fixed top-0 inset-x-0 z-40">
    <div class="relative">
      <div class="absolute inset-0">
	<canvas class="absolute inset-0 wh-full" width="5894" height="144"></canvas>
      </div>
      <div class="relative">
	<div class="container d-flex mx-auto items-center justify-between">
	  <div class="flex items-center">
	    <a>
	      <div class="text-[1.4vw] tracking-wider text-center uppercase text-white">Logo</div>
	    </a>
	  </div>
	  <div class="flex-grow d-flex items-center justify-end my-[15px] pr-[20px]">
	    <div class="group relative white-space-no-wrap">
	      <a class="d-flex items-center">
		<div class="text-[1.1vw] tracking-wider text-center uppercase text-white">Nav 1</div>
	      </a>
	    </div>
	    <div class="flex-1 max-w-[35px] min-w-[5px]"></div>
	    <div class="group relative white-space-no-wrap">
	      <a class="d-flex items-center">
		<div class="text-[1.1vw] tracking-wider text-center uppercase text-white">Nav 2</div>
	      </a>
	    </div>
	    <div class="flex-1 max-w-[35px] min-w-[5px]"></div>
	    <div class="group relative white-space-no-wrap">
	      <a class="d-flex items-center">
		<div class="text-[1.1vw] tracking-wider text-center uppercase text-white">Nav 3</div>
	      </a>
	    </div>
	  </div>
	  <div class="flex-grow d-flex items-center justify-end"></div>
	</div>
      </div>
    </div>
  </nav>
  <div class="min-h-[100vh]">
    <div class="relative">
      <div class="absolute inset-0">
	<div class="z-[-10] absolute inset-0 wh-full min-h-[100vh] bg-gradient-to-br from-rose-500 to-black opacity-50">
	</div>
      </div>
      <div class="relative border border-transparent content-box">
	<div class="container mx-auto pt-[11vh] py-[60px]">
	  <div class="relative overflow-hidden" style="height: 800px">
	    <div class="z-1 absolute inset-x-0 top-0">
	      <div class="mx-auto relative">
		<div class="flex flex-wrap">
		  <div v-for="n in 3" class="group w-full p-[15px] w-1/3">
		    <div class="mx-auto relative overflow-hidden">
		      <div class="relative min-h-full min-w-full">
			<div>
			  <div class="block pt-[56.25%]">
			  </div>
			</div>
			<div class="absolute inset-0 bg-cover bg-center bg-no-repeat wh-full" style="background-image: url(https://dnm.nflximg.net/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSd4YiRI4akxOnkCqC2Aqn8MrtGgluXvN3vbSakGx2ejrClryI0hkNYjoqRt2Owl0ySiE4-sNKiq7o6nAg7gRhD8hYGcCoPqChvTygrWfaKR7bKld5zsLWQ6kxlZaQ.jpg?r=b38);">
			</div>
			<div class="absolute inset-0 border border-black border-opacity-60 wh-full" style="box-shadow: 0px 20px 50px -10px black;"></div>
			<div class="absolute inset-0 bg-black opacity-10 group-hover:opacity-75 transition duration 500 ease-in" style="background: rgba(0, 0, 0, 1);"></div>
			<div class="absolute inset-0 flex items-end">
			  <div class="relative flex-1">
			    <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black to-transparent mx-[-1px] mb-[-1px] h-[150%]"></div>
			    <div class="relative">
			      <div class="mx-auto">
				<div class="py-[15px]">
				<div class="transition duration 500 ease-in text-[1.1vw] tracking-wider text-center uppercase text-white filter drop-shadow-sm">
				  Army of Thieves
				</div>
				</div>
			      </div>
			    </div>
			  </div>
			</div>
		      </div>
		    </div>
		  </div>
		</div>
	      </div>
	    </div>
	  </div>
	</div>
      </div>
    </div>
  </div>
</template> 

<script>
import { defineComponent, h, ref, onMounted, watchEffect, watch } from 'vue'
import { RouterLink } from 'vue-router'

export default {
  name: 'HomeComponent',
}
</script>
