<script setup>
import { RouterLink } from 'vue-router'
// eslint-disable-next-line vue/no-export-in-script-setup
</script>

<template>
  <div class="flex flex-col justify-center mt-20 pb-20 items-center"> <!-- Выравнивание всего контента по центру -->
    <div class="container mx-auto p-4 border-4 rounded-xl border-white w-full">
      <h1 class="text-center text-white text-2xl mb-4">Список людей, поддержавших на boosty.io</h1>
      <!-- Заголовок выровнен по центру -->
      <div class="overflow-x-auto">
        <table class="table-auto w-full mb-6">
          <thead class="hidden md:table-header-group">
            <tr class="text-white uppercase text-sm leading-normal">
              <th class="py-3 px-6 text-center text-blue-300">кустик</th>
              <th class="py-3 px-6 text-center text-xl text-indigo-400">куст</th>
              <th class="py-3 px-6 text-center text-3xl text-pink-400">кустище!</th>
            </tr>
          </thead>
          <tbody class="text-sm text-white">
            <tr class="border border-spacing-1 border-gray-200">
              <!-- Столбец "кустик" -->
              <td class="py-3 px-6 text-center text-xl whitespace-normal text-blue-100 border border-spacing-1">
                <div>Qrix</div>
                <div>SmyziTop</div>
              </td>

              <!-- Столбец "куст" -->
              <td class="py-3 px-6 text-center text-xl whitespace-normal text-indigo-200 border border-spacing-1">

                <div>Aroshold</div>
              </td>

              <!-- Столбец "кустище!" -->
              <td class="py-3 px-6 text-center text-xl whitespace-normal text-pink-200 border border-spacing-1">

                <div>Minori Hanasato</div>
              </td>

            </tr>
            <!-- Добавьте больше строк здесь, если нужно -->
          </tbody>
        </table>
      </div>
    </div>
    <a class="mt-3">Поддержать можно по кнопочке ниже</a>
    <RouterLink to="/boosty"><button
        class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mt-3"
        href="https://boosty.to/grechkagk">boosty <i class='bx bxs-donate-heart'></i></button></RouterLink>
  </div>
</template>

<style></style>