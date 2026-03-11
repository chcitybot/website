<template>
  <div v-if="post" class="w-full font-main">
    <!-- Reading progress bar -->
    <div
      class="fixed top-0 left-0 h-[3px] bg-bot_dark_blue z-50 transition-none"
      :style="{ width: readProgress + '%' }"
    />

    <!-- Full-bleed hero image -->
    <div class="relative">
      <div class="w-full h-[45vh] lg:h-[55vh] overflow-hidden">
        <img
          :src="`/img/${post.image}`"
          class="w-full h-full object-cover"
          :alt="`image for ${post.title} article`"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>

      <!-- Overlapping title card -->
      <div class="max-w-4xl mx-auto px-6 lg:px-8 -mt-24 relative z-10">
        <div class="bg-white rounded-2xl shadow-xl p-8 lg:p-10">
          <!-- Back to blog -->
          <NuxtLink
            :to="`/${locale}/blog`"
            class="inline-flex items-center gap-2 text-sm text-bot_gray hover:text-bot_dark_blue transition-colors mb-4"
          >
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            {{ $t("blog_back") }}
          </NuxtLink>

          <h1 class="font-heading text-display-sm text-gray-900 mb-3">{{ post.title }}</h1>

          <div class="flex items-center gap-3 text-caption text-bot_gray">
            <span>{{ post.date }}</span>
            <span>&middot;</span>
            <span>{{ readingTime }} {{ $t("blog_min_read") }}</span>
          </div>

          <div v-if="post.tags?.length" class="mt-4 flex flex-wrap gap-2">
            <BlogTagChip
              v-for="tag in post.tags"
              :key="tag"
              :tag="tag"
              :container-classes="'bg-bot_dark_blue/10 text-bot_dark_blue'"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Article content -->
    <div ref="articleEl" class="max-w-4xl mx-auto px-6 lg:px-8 py-12">
      <ContentRenderer :value="post" class="prose lg:prose-xl" />
      <div class="my-12 flex flex-col items-center">
        <NuxtLink :to="'/contact'">
          <button
            class="inline-flex items-center px-8 py-4 rounded-full bg-bot_dark_blue text-white text-paragraph font-semibold hover:bg-bot_dark_blue/90 transition-all duration-200 shadow-lg shadow-bot_dark_blue/25 hover:shadow-xl hover:-translate-y-0.5"
          >
            {{ $t("cta_become_partner") }}
          </button>
        </NuxtLink>
      </div>
    </div>
  </div>
  <div v-else class="pt-32 text-center text-bot_gray">Page not found</div>
</template>

<script lang="ts" setup>
const route = useRoute()
const { locale, locales } = useI18n()

const articleEl = ref<HTMLElement | null>(null)
const readProgress = ref(0)

const { data: post, error } = await useAsyncData(
  `blog-${route.params.slug}-${locale.value}`,
  () => {
    return queryCollection("blog").path(route.path).first()
  }
)

const readingTime = computed(() => {
  const words = (post.value?.description || '').split(/\s+/).length + 200
  return Math.max(1, Math.ceil(words / 200))
})

function onScroll() {
  if (!articleEl.value) return
  const rect = articleEl.value.getBoundingClientRect()
  const start = rect.top + window.scrollY
  const end = start + rect.height
  const scroll = window.scrollY + window.innerHeight
  const progress = Math.max(0, Math.min(1, (scroll - start) / (end - start)))
  readProgress.value = progress * 100
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})

useHead(() => {
  if (!post.value) {
    return {}
  }

  const siteUrl = "https://citybot.ch"
  const slug = route.params.slug
  const canonicalUrl = `${siteUrl}${route.path}`
  const imageUrl = `${siteUrl}/img/${post.value?.image}`

  const alternateLinks = locales.value.map((loc: any) => ({
    rel: "alternate",
    hreflang: loc.code,
    href: `${siteUrl}/${loc.code}/blog/${slug}`,
  }))

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.value?.title,
    description: post.value?.description,
    image: imageUrl,
    datePublished: post.value?.date,
    dateModified: post.value?.date,
    url: canonicalUrl,
    inLanguage: locale.value,
    publisher: {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: 'CityBot',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/img/CItybot_Logo_highres.png`,
      },
    },
    author: {
      '@type': 'Organization',
      name: 'CityBot',
      url: siteUrl,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonicalUrl,
    },
  }

  return {
    title: `${post.value?.title} – CityBot`,
    meta: [
      { name: "description", content: post.value?.description },
      { property: "og:title", content: post.value?.title },
      { property: "og:description", content: post.value?.description },
      { property: "og:image", content: imageUrl },
      { property: "og:url", content: canonicalUrl },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: post.value?.title },
      { name: "twitter:description", content: post.value?.description },
      { name: "twitter:image", content: imageUrl },
    ],
    link: [
      { rel: "canonical", href: canonicalUrl },
      ...alternateLinks,
      { rel: "alternate", hreflang: "x-default", href: `${siteUrl}/en/blog/${slug}` },
    ],
    script: [
      { type: 'application/ld+json', innerHTML: JSON.stringify(articleSchema) },
    ],
  }
})

if (!post.value && process.client) {
  throw createError({ statusCode: 404, statusMessage: "Page Not Found" })
}
</script>
