<script setup>
//import { RouterLink, RouterView } from 'vue-router'
import AboutMeComponent from '../components/About-me.vue'
import placesOfHonor from '@/components/places-of-honor.vue';
import navComponent from '@/components/Nav.vue'
</script>

<template>
  
<div class="bg-cover bg-center bg-fixed bg-[url('../components/wallhaven.jpg')]">
  <navComponent />

  <div class="text-[#171534]">
      <div class="flex justify-center items-center mt-40">
    <span class="text-lg md:text-xl font-light text/50">GrechkaWS project</span>
  </div>
  <div class="flex justify-center items-center">
    <span class="text-6xl md:text-8xl font-bold bg-clip-text ">
      GrechkaGK 
      <br /><span class="text-5xl md:text-7xl">Website</span>
    </span>  
  </div>
  <div class="flex justify-center items-center mt-8 ml-8">
      <span class="text-3xl bg-[#171534] text-white p-2"> very <span class="text-white bg-gradient-to-r from-sky-500 to-violet-500 font-black hover:italic">cool</span> website <span class="drop-shadow"><i class='bx bxs-bolt' ></i></span></span>
  </div>

  </div>
  <img src="../components/layer2.svg" class="w-screen mt-60">
</div>
  

    
  <div class="about-me-background">
   <AboutMeComponent />
   <placesOfHonor />
  </div>
</template>

<style scoped>

.about-me-background {
  background-color: #161616;
}

</style>