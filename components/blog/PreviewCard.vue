<template>
  <NuxtLink :to="post.path">
    <div
      class="rounded-lg border-2 shadow-md h-full hover:shadow-lg hover:shadow-gray-300 flex flex-col justfy-between"
    >
      <img
        :src="`/img/${post.image}`"
        class="w-full h-40 rounded-t-lg object-cover"
        :alt="`image for ${post.title} article`"
      />
      <div class="p-4 flex flex-col flex-1 justify-between">
        <div>
          <h2 class="text-2xl font-bold text-bot_dark_blue">
            {{ post.title }}
          </h2>
          <p class="whitespace-nowrap mb-2 italic">{{ post.date }}</p>
          <p>{{ post.description }}</p>
        </div>
        <div class="mt-4 flex gap-2">
          <BlogTagChip
            v-for="tag in post.tags"
            :key="tag"
            :tag="tag"
            :container-classes="'bg-bot_dark_blue'"
          />
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
const { post } = defineProps({
  post: Object,
});
</script>

<style></style>
