<template>
  <NuxtLink :to="post.path" class="group">
    <div class="rounded-2xl overflow-hidden bg-white team-glow transition-all duration-500 hover:-translate-y-1 h-full flex flex-col justify-between" style="--glow-color: #4047D2;">
      <div class="overflow-hidden">
        <img
          :src="`/img/${post.image}`"
          class="w-full h-48 object-cover object-top transition-transform duration-500 group-hover:scale-105"
          :alt="`image for ${post.title} article`"
        />
      </div>
      <div class="p-6 flex flex-col flex-1 justify-between">
        <div>
          <h2 class="font-heading text-h2 text-gray-900 mb-2 group-hover:text-bot_dark_blue transition-colors">
            {{ post.title }}
          </h2>
          <div class="flex items-center gap-2 mb-3">
            <p class="text-caption text-bot_gray italic">{{ post.date }}</p>
            <span class="text-caption text-bot_gray">&middot; {{ readingTime }} {{ $t("blog_min_read") }}</span>
          </div>
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

const readingTime = computed(() => {
  const words = (post.description || '').split(/\s+/).length + 200
  return Math.max(1, Math.ceil(words / 200))
})
</script>
