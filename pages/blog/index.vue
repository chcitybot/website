<script setup lang="ts">
const { data: posts } = await useAsyncData('blog', () => queryCollection('blog').all())
</script>

<template>
  <div class="w-full">
    <div class="w-full py-40 bg-gray-100 px-4">
      <h1 class="text-6xl font-bold text-center text-bot_pink">Einblicke</h1>
    </div>
    <div class="max-w-7xl bg-white rounded-3xl shadow-md -mt-20 mx-auto p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch gap-10">
      <BlogPreviewCard v-for="post in posts" :key="post.id" :post="post" class="" />
    </div>
  </div>
</template>
