<template>
  <div class="font-main">
    <div class="pt-32 pb-16 bg-white px-6">
      <div class="max-w-7xl mx-auto">
        <h1 class="font-heading text-display-sm text-gray-900 text-center mb-4">
          {{ $t("insights") }}
        </h1>
        <p class="text-paragraph text-bot_gray max-w-2xl mx-auto text-center">
          {{ $t("blog_subtitle") }}
        </p>
      </div>
    </div>
    <div class="max-w-7xl mx-auto px-6 lg:px-8 py-12">
      <!-- Tag Filter -->
      <div class="py-4 mb-8">
        <label class="font-medium text-gray-900">{{ $t("blog_by_topic_filter") }}</label>
        <select
          v-model="tagFilter"
          class="ml-2 px-4 py-2 border border-gray-200 rounded-lg text-paragraph text-gray-700 focus:ring-2 focus:ring-bot_dark_blue focus:border-bot_dark_blue outline-none transition-colors"
        >
          <option value="">{{ $t("blog_topic_all") }}</option>
          <option v-for="tag in allTags" :key="tag" :value="tag">
            {{ tag }}
          </option>
        </select>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch gap-8">
        <div v-if="loading" class="text-bot_gray">{{ $t("loading") }}</div>
        <div v-else-if="filteredPosts.length === 0" class="text-bot_gray">
          {{ $t("blog_no_posts") }}
        </div>
        <BlogPreviewCard
          v-else
          v-for="post in filteredPosts"
          :key="post.id"
          :post="post"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const { locale } = useI18n()
const tagFilter = ref("")
const allTags = ref([])
const allPosts = ref([])
const loading = ref(true)

const fetchPosts = async () => {
  try {
    const posts = await queryCollection("blog")
      .where("path", "LIKE", `/${locale.value}/blog/%`)
      .order("date", "DESC")
      .all()
    return posts
  } catch (error) {
    console.error(error)
  } finally {
    loading.value = false
  }
}

watchEffect(async () => {
  if (!locale.value) return
  const posts = await fetchPosts()
  allPosts.value = posts
  if (!posts) return
  const tagsSet = new Set()
  posts.forEach((post) => {
    if (Array.isArray(post.tags)) {
      post.tags.forEach((tag) => tagsSet.add(tag))
    }
  })
  allTags.value = Array.from(tagsSet)
})

const filteredPosts = computed(() => {
  if (!allPosts.value) return []
  if (!tagFilter.value) return allPosts.value
  return allPosts.value.filter((post) => post.tags?.includes(tagFilter.value))
})
</script>
