<script setup>
import {RouterLink} from 'vue-router'
</script>

<template>
  <div class="pt-10 flex justify-center items-center">
    <nav class=" space-x-10 flex justify-center items-center px-8
      h-20  mx-auto w-auto
      rounded-full shadow-lg bg-neutral-900 font-semibold">
      <router-link to="/" class="text-base md:text-xl alink">
        home <i class="bx bxs-home"></i>
      </router-link>
      <router-link to="/projects" class="text-base md:text-xl alink">
        projects <i class="bx bxs-file"></i>
      </router-link>
      <router-link to="/other" class="text-base md:text-xl alink">
        other <i class="bx bx-info-circle"></i>
      </router-link>
    </nav>
  </div>
</template>


<style>
.alink {
  transition: transform 0.3s;
}
.alink:hover {
  transform: scale(1.1);
}
</style>