<template>
    <navComponent />

    <section>
        <div class="py-16 h-screen">
            <div class="mx-auto px-6 max-w-6xl text-gray-500">
                <div class="text-center">
                    <h2 class="text-3xl text-gray-950 dark:text-white font-semibold">Список проектов</h2>
                    <p class="mt-6 text-gray-700 dark:text-gray-300">Здесь будут отображены все проекты, которые мне не стыдно показать :].</p>
                    <div class="pt-10 flex justify-center items-center">
                        <nav class=" space-x-10 flex justify-center items-center px-8
      h-20  mx-auto w-auto
      rounded-full shadow-lg bg-neutral-900 font-semibold">
                            <a href="https://github.com/tima190?tab=repositories" class="transition-colors duration-300 text-base md:text-xl alink hover:text-white">
                                открыть github репозитории <i class="bx bxs-home"></i>
                            </a>
                        </nav>
                    </div>
                    
                </div>
                <div class="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">

                    <GrechkaWS></GrechkaWS>
                    <HitoriOS></HitoriOS>

                </div>
            </div>
        </div>
    </section>

</template>

<script setup>
import navComponent from '@/components/Nav.vue'
import GrechkaWS from '@/components/project/GrechkaWS.vue'
import HitoriOS from '@/components/project/HitoriOS.vue'
</script>

<style>

</style>