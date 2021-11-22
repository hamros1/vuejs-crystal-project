<template>
  <nav class="absolute inset-x-0 top-[0px]"></nav>
  <div class="min-h-screen min-w-full">
    <div class="relative">
      <div class="z-[-10] absolute inset-x-0 top-[0px]" />
	<div class="relative flex flex-col justify-end">
	  <div class="pt-0">
	    <div class="relative z-1">
	      <div class="min-h-full wh-full block"></div>
	      <div class="absolute inset-x-0 bottom-[0px]">
		<!-- -->
		<div class="relative text-center -m-24">
		  <div
		      class="
			     text-[6rem]
			     font-bold
			     text-gray-100
			     tracking-wider
			     filter
			     drop-shadow-2xl
			     "
		      >
		      Welcome
		  </div>
		</div>
		<!-- -->
		<div
		    class="
			   d-flex
			   flex-wrap
			   justify-start
			   items-center
			   flex-wrap
			   p-[35px]
			   "
		    ></div>
	      </div>
	    </div>
	  </div>
	</div>
      </div>
      <!-- -->
      <div class="relative z-1">
	<div class="relative">
	  <!-- -->
	  <div class="absolute inset-0"></div>
	  <!-- -->
	  <div class="relative border border-transparent content-box">
	    <div class="relative py-8">
	      <div class="z-10 relative container mx-auto">
		<div class="w-full inline-block p-4 border border-transparent">
		  <div
		      class="
			     relative
			     group
			     overflow-hidden
			     shadow-2xl
			     h-[440px]
			     transform
			     transition
			     duration-500
			     hover:scale-[102.5%]
			     "
		      >
		      <div class="relative min-h-full min-w-full">
			<div>
			  <div class="block pt-9/16"></div>
			</div>

			<div
			    class="absolute inset-0 bg-cover bg-center"
			    style="
				   background-image: url(https://www.themoviedb.org/t/p/original/srgq7bzZsuDw7NoGXdazRXp7Hl6.jpg);
				   "
			    ></div>
		      </div>
		  </div>
		</div>
		<div
		    class="w-full inline-block p-4 w-1/2 border border-transparent"
		    >
		    <div
			class="
			       relative
			       group
			       overflow-hidden
			       shadow-2xl
			       h-[220px]
			       transform
			       transition
			       duration-500
			       hover:scale-110
			       "
			>
			<div class="relative min-h-full min-w-full">
			  <div>
			    <div class="block pt-9/16"></div>
			  </div>

		  <div
		      class="absolute inset-0 bg-cover bg-center"
		      style="
			     background-image: url(https://www.themoviedb.org/t/p/original/srgq7bzZsuDw7NoGXdazRXp7Hl6.jpg);
			     "
		      ></div>
			</div>
		    </div>
		</div>
		<div
		    class="w-full inline-block p-4 w-1/2 border border-transparent"
		    >
		    <div
			class="
			       relative
			       group
			       overflow-hidden
			       shadow-2xl
			       h-[220px]
			       transform
			       transition
			       duration-500
			       hover:scale-110
			       "
			>
			<div class="relative min-h-full min-w-full">
			  <div>
			    <div class="block pt-9/16"></div>
			  </div>

		  <div
		      class="absolute inset-0 bg-cover bg-center"
		      style="
			     background-image: url(https://www.themoviedb.org/t/p/original/srgq7bzZsuDw7NoGXdazRXp7Hl6.jpg);
			     "
		      ></div>
			</div>
		    </div>
		</div>
	      </div>
	    </div>
	  </div>
	</div>
      </div>

      <div class="relative">
	<div class="z-0 absolute inset-0"></div>
      </div>
    </div>
</template>

<script>
import { defineComponent, h, ref, onMounted, watchEffect, watch } from "vue";
import { RouterLink } from "vue-router";

export default {
  name: "HomeComponent",
};
</script>
