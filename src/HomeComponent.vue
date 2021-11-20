<template>
  <div class="min-h-[100vh]">
    <div class="relative overflow-hidden">
      <div class="absolute wh-full z-[-10]">
	<div class="pt-9/16">
	</div>
      </div>

      <div class="absolute inset-0 bg-cover bg-top">
      </div>

      <div class="relative d-flex flex-col justify-between min-h-[800px]">
	<div class="container mx-auto">
	</div>
      </div>

      <div class="relative">
	<div class="absolute inset-0 wh-full">
	</div>
	<div class="relative border border-transparent content-box">
	  <div class="container mx-auto">
	    <div class="relative">
	      <div class="d-flex flex-wrap">
		<div class="w-1/3">
		  <div class="relative overflow-hidden">
		    <div class="relative min-h-full min-w-full">
		    </div>

		    <div class="absolute inset-0">
		    </div>
		  </div>
		</div>

		<div class="w-1/3">
		  <div class="relative overflow-hidden">
		  </div>

		  <div class="absolute inset-0">
		  </div>
		</div>

		<div class="w-1/3">
		  <div class="relative overflow-hidden">
		  </div>
		  <div class="absolute inset-0">
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
