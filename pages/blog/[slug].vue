

<template>
  <div v-if="post" class="w-full pb-10">
    <div class="relative w-full h-[50vh]">
      <img
        :src="`/img/${post.image}`"
        class="max-w-3xl w-full h-[50vh] object-cover mx-auto"
        :alt="`image for ${post.title} article`"
      />
      <h1 class="absolute bottom-4 left-4 text-3xl text-white font-bold text-center">{{ post.title }}</h1>
    </div>
    <div
      class="max-w-7xl mx-auto p-10 "
    >
      <ContentRenderer :value="post" class="prose" />
    </div>
  </div>
  <div v-else>Page not found</div>
</template>

<script lang="ts" setup>
const route = useRoute()
console.log("route", route)
const { data: post } = await useAsyncData(route.path, () => {
  return queryCollection('blog').path(route.path).first()
})
</script>

