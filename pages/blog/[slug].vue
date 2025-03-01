

<template>
  <div v-if="post" class="w-full max-w-7xl mx-auto">
    <div class="relative h-[50vh]">
      <img
        :src="`/img/${post.image}`"
        class="w-full h-[50vh] object-cover mx-auto"
        :alt="`image for ${post.title} article`"
      />
      <h1 class="absolute bottom-4 left-4 bg-bot_dark_blue p-2 text-4xl rounded-md text-white font-bold text-center">{{ post.title }}</h1>
      <p class="absolute bottom-4 right-4 bg-gray-400 p-2 font-bold rounded-md text-white">{{ post.date }}</p>
    </div>
    <div
      class="max-w-7xl mx-auto p-10 "
    >
      <ContentRenderer :value="post" class="prose" />
      <div class="my-8 flex flex-col items-center">
        <p>Interested in how this could be applied to your own case? Contact us for a free consultation.</p>
        <NuxtLink class="mt-2 hover:text-white hover:cursor-pointer" :to="'/contact'">
            <button class="bg-bot_dark_blue text-white px-6 py-3 rounded-lg font-semibold relative group-hover:text-bot_pink tx-xl">
                Partner werden
            </button>
        </NuxtLink>
      </div>
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

