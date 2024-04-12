<template>
    <navComponent />
    <div class="flex flex-col justify-center items-center inset-0 h-screen">
        <a class=" animate-pulse text-5xl">404</a>
        <a class="text-4xl">прости, не найдена страница :[</a>
        <a class="test-xl text-zinc-700 mt-10 p-8">попробуй перейти по <span class="animate-pulse">/fun</span></a>
    </div>
</template>
    
<script setup>
    import navComponent from '@/components/Nav.vue'
</script>
    
<style>
    
</style>