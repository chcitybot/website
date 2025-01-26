<script setup lang="ts">
const { data: posts } = await useAsyncData('blog', () => queryCollection('blog').all())
</script>

<template>
  <div class="w-full">
    <div class="w-full py-40 bg-gray-100 px-4">
      <h1 class="text-6xl font-bold text-center">Einblick</h1>
    </div>
    <div class="max-w-7xl bg-white rounded-3xl shadow-md -mt-20 mx-auto p-10 grid grid-cols-3 gap-10">
      <div v-for="item in posts" class="rounded-lg border-2 shadow-md ">
        <img :src="`/img/${item.image}`" class="w-full rounded-t-lg" :alt="`image for ${item.title} article`" />
        <div>
          <h2 class="text-2xl font-bold">{{ item.title }}</h2>

        <p class="mt-4 font-medium text-gray-500">{{ item.description }}</p>
        <NuxtLink :to="item.path" class="hover:underline hover:text-blue-500">Read More</NuxtLink>
        </div>
        
      </div>
    </div>
  </div>
</template>
