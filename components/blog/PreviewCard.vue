<template>
  <NuxtLink :to="post.path" class="group">
    <div class="rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full flex flex-col justify-between">
      <div class="overflow-hidden">
        <img
          :src="`/img/${post.image}`"
          class="w-full h-48 object-cover object-top transition-transform duration-500 group-hover:scale-105"
          :alt="`image for ${post.title} article`"
        />
      </div>
      <div class="p-6 flex flex-col flex-1 justify-between">
        <div>
          <h2 class="font-heading text-h1 text-gray-900 mb-2">
            {{ post.title }}
          </h2>
          <p class="text-caption text-bot_gray mb-3 italic">{{ post.date }}</p>
          <p class="text-paragraph text-bot_gray">{{ post.description }}</p>
        </div>
        <div class="mt-4 flex flex-wrap gap-2">
          <BlogTagChip
            v-for="tag in post.tags"
            :key="tag"
            :tag="tag"
            :container-classes="'bg-bot_dark_blue/10 text-bot_dark_blue'"
          />
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
const { post } = defineProps({
  post: Object,
})
</script>
