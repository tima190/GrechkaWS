<script setup>
import { RouterView } from 'vue-router'
import FooterComponent from './components/FooterComponent.vue'
</script>

<template>
  <RouterView />
  <FooterComponent />
</template>

<style>
.alink {
  transition: transform 0.3s;
}
.alink:hover {
  transform: scale(1.1);
}
</style>