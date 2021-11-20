<template>
  <div class="min-h-[calc((100vh)-173px)]">
    <div class="relative">
      <div class="py-[60px]">
	<div class="container mx-auto">
	  <div class="relative overflow-hidden" style="height: 800px">
	    <div class="z-1 absolute inset-x-0 top-0">
	      <div class="mx-auto relative">
		<div class="flex flex-wrap">
		  <div v-for="n in 3" class="w-full p-[15px] w-1/3">
		    <div class="mx-auto relative overflow-hidden">
		      <div class="relative min-h-full min-w-full">
			<div>
			  <div class="block pt-[56.25%]">
			  </div>
			</div>
			<div class="absolute inset-0 bg-cover bg-center bg-no-repeat wh-full" style="background-image: url(https://dnm.nflximg.net/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSd4YiRI4akxOnkCqC2Aqn8MrtGgluXvN3vbSakGx2ejrClryI0hkNYjoqRt2Owl0ySiE4-sNKiq7o6nAg7gRhD8hYGcCoPqChvTygrWfaKR7bKld5zsLWQ6kxlZaQ.jpg?r=b38);">
			</div>
			<div class="absolute inset-0 bg-black opacity-10"></div>
			<div class="absolute inset-0 flex items-end">
			  <div class="relative flex-1">
			    <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black to-transparent filter blur-[2rem] mx-[-1px] mb-[-1px] h-[150%]"></div>
			    <div class="relative">
			      <div class="px-[20px] py-[10px]">
				<div class="mx-auto text-xs tracking-wider text-center uppercase text-white">
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
</template> 

<script>
import { defineComponent, h, ref, onMounted, watchEffect, watch } from 'vue'
import { RouterLink } from 'vue-router'

export default {
  name: 'HomeComponent',
}
</script>
