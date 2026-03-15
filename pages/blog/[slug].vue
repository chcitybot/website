<template>
  <div v-if="post" class="w-full font-main">
    <!-- Sticky TL;DR post-it (desktop only) -->
    <div
      class="hidden xl:block fixed right-6 top-24 w-72 z-40 transition-all duration-500"
      :class="showTldr ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3 pointer-events-none'"
    >
      <div class="relative overflow-hidden rounded-2xl bg-bot_dark_blue shadow-lg shadow-bot_dark_blue/30 p-5">
        <!-- Bubble orb background -->
        <div class="absolute -top-8 -right-8 w-32 h-32 rounded-full pointer-events-none" style="background: radial-gradient(circle, #ffffff 0%, transparent 65%); opacity: 0.08; filter: blur(12px)"></div>
        <div class="absolute -bottom-6 -left-6 w-24 h-24 rounded-full pointer-events-none" style="background: radial-gradient(circle, #AF94D6 0%, transparent 65%); opacity: 0.15; filter: blur(10px)"></div>
        <!-- Label -->
        <p class="text-xs font-semibold uppercase tracking-widest text-white/60 mb-3">TL;DR</p>
        <!-- Summary text -->
        <ul v-if="post.tldr?.length" class="space-y-2">
          <li v-for="point in post.tldr" :key="point" class="flex items-start gap-2 text-sm text-white leading-relaxed">
            <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/60 flex-shrink-0"></span>
            <span>{{ point }}</span>
          </li>
        </ul>
        <p v-else class="text-sm text-white leading-relaxed">{{ post.description }}</p>
        <!-- Mini progress bar -->
        <div class="mt-4 h-[3px] w-full bg-white/20 rounded-full overflow-hidden">
          <div class="h-full bg-white rounded-full transition-none" :style="{ width: readProgress + '%' }"></div>
        </div>
      </div>
    </div>

    <!-- Full-bleed hero image -->
    <div class="relative">
      <div class="w-full h-[51vh] lg:h-[62vh] overflow-hidden">
        <img
          :src="`/img/${post.image}`"
          class="w-full h-full object-cover object-top"
          :alt="`image for ${post.title} article`"
        />
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
      <ContentRenderer :value="post" class="prose" />
      <div class="my-12 flex flex-col items-center">
        <NuxtLink :to="localePath('/contact')">
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
const localePath = useLocalePath()

const articleEl = ref<HTMLElement | null>(null)
const readProgress = ref(0)

const { data: post, error } = await useAsyncData(
  `blog-${route.params.slug}-${locale.value}`,
  () => {
    return queryCollection("blog").path(route.path).first()
  }
)

const showTldr = computed(() => readProgress.value > 2)

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
