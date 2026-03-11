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
      <!-- Tag Filter Pills -->
      <div class="flex flex-wrap gap-2 mb-10">
        <button
          @click="tagFilter = ''"
          class="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
          :class="tagFilter === '' ? 'bg-bot_dark_blue text-white shadow-md shadow-bot_dark_blue/20' : 'bg-gray-100 text-bot_gray hover:bg-gray-200'"
        >
          {{ $t("blog_topic_all") }}
        </button>
        <button
          v-for="tag in allTags"
          :key="tag"
          @click="tagFilter = tag"
          class="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
          :class="tagFilter === tag ? 'bg-bot_dark_blue text-white shadow-md shadow-bot_dark_blue/20' : 'bg-gray-100 text-bot_gray hover:bg-gray-200'"
        >
          {{ tag }}
        </button>
      </div>

      <div v-if="loading" class="text-bot_gray">{{ $t("loading") }}</div>
      <div v-else-if="filteredPosts.length === 0" class="text-bot_gray">
        {{ $t("blog_no_posts") }}
      </div>
      <template v-else>
        <!-- Featured Post (first/latest) -->
        <NuxtLink :to="featuredPost.path" class="group block mb-12">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden bg-white team-glow transition-all duration-500 hover:-translate-y-1" style="--glow-color: #4047D2;">
            <div class="overflow-hidden">
              <img
                :src="`/img/${featuredPost.image}`"
                class="w-full h-64 lg:h-full object-cover transition-transform duration-500 group-hover:scale-105"
                :alt="`image for ${featuredPost.title} article`"
              />
            </div>
            <div class="p-8 lg:p-10 flex flex-col justify-center">
              <div class="flex items-center gap-3 mb-4">
                <span class="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-bot_red/10 text-bot_red">
                  {{ $t("blog_featured") }}
                </span>
                <span class="text-caption text-bot_gray">{{ featuredPost.date }}</span>
                <span class="text-caption text-bot_gray">&middot; {{ readingTime(featuredPost) }} {{ $t("blog_min_read") }}</span>
              </div>
              <h2 class="font-heading text-display-sm text-gray-900 mb-3 group-hover:text-bot_dark_blue transition-colors">
                {{ featuredPost.title }}
              </h2>
              <p class="text-paragraph text-bot_gray mb-6">{{ featuredPost.description }}</p>
              <div class="flex flex-wrap gap-2">
                <BlogTagChip
                  v-for="tag in featuredPost.tags"
                  :key="tag"
                  :tag="tag"
                  :container-classes="'bg-bot_dark_blue/10 text-bot_dark_blue'"
                />
              </div>
            </div>
          </div>
        </NuxtLink>

        <!-- Remaining Posts Grid -->
        <div v-if="remainingPosts.length" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch gap-8">
          <BlogPreviewCard
            v-for="post in remainingPosts"
            :key="post.id"
            :post="post"
          />
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
const { locale, locales } = useI18n()
const siteUrl = 'https://citybot.ch'

useSeoMeta({
  title: 'Blog – CityBot | Tourism & Digital Destination Insights',
  ogTitle: 'Blog – CityBot | Tourism & Digital Destination Insights',
  description: 'Expert insights on digital destination management, AI in tourism, smart city apps, and sustainable travel. Research and case studies from the CityBot team.',
  ogDescription: 'Expert insights on digital destination management, AI in tourism, and sustainable travel.',
  ogType: 'website',
  ogImage: `${siteUrl}/img/CItybot_Logo_highres.png`,
  twitterCard: 'summary_large_image',
  twitterTitle: 'Blog – CityBot | Tourism & Digital Destination Insights',
})

useHead({
  link: computed(() => [
    { rel: 'canonical', href: `${siteUrl}/${locale.value}/blog` },
    ...locales.value.map((loc) => ({ rel: 'alternate', hreflang: loc.code, href: `${siteUrl}/${loc.code}/blog` })),
    { rel: 'alternate', hreflang: 'x-default', href: `${siteUrl}/en/blog` },
  ]),
})
const tagFilter = ref("")
const allTags = ref([])
const allPosts = ref([])
const loading = ref(true)

function readingTime(post) {
  const words = (post.description || '').split(/\s+/).length + 200
  return Math.max(1, Math.ceil(words / 200))
}

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

const featuredPost = computed(() => filteredPosts.value[0])
const remainingPosts = computed(() => filteredPosts.value.slice(1))
</script>
