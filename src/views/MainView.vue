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
        <span class="text-3xl bg-[#171534] text-white p-2"> very <span
            class="text-white bg-gradient-to-r from-sky-500 to-violet-500 font-black hover:italic">cool</span> website
          <span class="drop-shadow"><i class='bx bxs-bolt'></i></span></span>
      </div>

      <div class="pt-8 flex justify-center items-center text-white space-x-5">
        <nav class=" space-x-10 flex justify-center items-center px-8
      h-[50px]   w-auto
      rounded-full shadow-lg bg-neutral-900 font-semibold">
          <a href="https://github.com/tima190" class="text-base md:text-xl alink hover:text-indigo-200">
            github <i class='bx bxl-github'></i>
          </a>
        </nav>
        <nav class=" space-x-10 flex justify-center items-center px-8
      h-[50px]   w-auto
      rounded-full shadow-lg bg-neutral-900 font-semibold">
          <a href="https://vk.com/grechkagk" class="text-base md:text-xl alink hover:text-blue-200">
            vk <i class='bx bxl-vk'></i>
          </a>
        </nav>
        <nav class=" space-x-10 flex justify-center items-center px-8
      h-[50px]   w-auto
      rounded-full shadow-lg bg-neutral-900 font-semibold">
          <a href="https://ru.pinterest.com/grechka_GK/" class="text-base md:text-xl alink hover:text-red-200">
            pinterest <i class='bx bxl-pinterest'></i>
          </a>
        </nav>
      </div>
      <div class="pt-8 flex justify-center items-center text-white space-x-5">


        <nav class=" space-x-10 flex justify-center items-center px-8
      h-[50px]   w-auto
      rounded-full shadow-lg bg-neutral-900 font-semibold">
          <a href="https://www.reddit.com/user/Grechka_GK/"
            class="text-base md:text-xl alink hover:text-orange-200">
            reddit <i class='bx bxl-reddit'></i>
          </a>
        </nav>
        <nav class=" space-x-10 flex justify-center items-center px-8
      h-[50px]   w-auto
      rounded-full shadow-lg bg-neutral-900 font-semibold">
          <a href="https://twitter.com/Grechka_GK" class="text-base md:text-xl alink hover:text-blue-200">
            twitter <i class='bx bxl-twitter'></i>
          </a>
        </nav>
        <nav class=" space-x-10 flex justify-center items-center px-8
      h-[50px]   w-auto
      rounded-full shadow-lg bg-neutral-900 font-semibold">
          <a href="https://boosty.to/grechkagk" class="text-base md:text-xl alink hover:text-orange-200">
            boosty <i class='bx bxs-donate-heart'></i>
          </a>
        </nav>
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