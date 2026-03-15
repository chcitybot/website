<template>
  <div v-if="post" class="w-full font-main">
    <!-- Back to blog — floating arrow -->
    <NuxtLink
      :to="localePath('/blog')"
      :aria-label="$t('blog_back')"
      class="fixed left-4 top-20 lg:top-24 z-40 w-9 h-9 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-sm shadow-md text-bot_dark_blue hover:bg-white transition-colors duration-200"
    >
      <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
    </NuxtLink>

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
        <!-- CTA -->
        <NuxtLink :to="localePath('/contact')" class="mt-4 flex items-center justify-center px-4 py-2 rounded-full bg-white text-bot_dark_blue text-sm font-semibold hover:bg-white/90 transition-colors duration-200">
          {{ $t("cta_become_partner") }}
        </NuxtLink>
      </div>
    </div>

    <!-- Mobile TL;DR: collapsible panel fixed to right edge (below xl) -->
    <div ref="mobileTldrEl" class="xl:hidden fixed right-0 top-16 z-40 flex items-start">
      <!-- Content panel — expands/collapses to the right -->
      <div
        class="transition-all duration-300 ease-in-out overflow-hidden"
        :class="mobileTldrExpanded ? 'max-w-[260px] opacity-100' : 'max-w-0 opacity-0'"
      >
        <div class="w-[260px] relative overflow-hidden bg-bot_dark_blue shadow-lg shadow-bot_dark_blue/30 p-4 max-h-[calc(100vh-5rem)] overflow-y-auto">
          <div class="absolute -top-6 -right-6 w-24 h-24 rounded-full pointer-events-none" style="background: radial-gradient(circle, #ffffff 0%, transparent 65%); opacity: 0.08; filter: blur(10px)"></div>
          <p class="text-xs font-semibold uppercase tracking-widest text-white/60 mb-3">TL;DR</p>
          <ul v-if="post.tldr?.length" class="space-y-2">
            <li v-for="point in post.tldr" :key="point" class="flex items-start gap-2 text-sm text-white leading-relaxed">
              <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/60 flex-shrink-0"></span>
              <span>{{ point }}</span>
            </li>
          </ul>
          <p v-else class="text-sm text-white leading-relaxed">{{ post.description }}</p>
          <div class="mt-3 h-[3px] w-full bg-white/20 rounded-full overflow-hidden">
            <div class="h-full bg-white rounded-full transition-none" :style="{ width: readProgress + '%' }"></div>
          </div>
        </div>
      </div>
      <!-- Arrow tab — always visible at the right edge -->
      <button
        class="w-8 flex-shrink-0 bg-bot_dark_blue flex items-center justify-center shadow-lg rounded-bl-xl"
        style="height: 3.5rem"
        :aria-label="mobileTldrExpanded ? 'Collapse TL;DR' : 'Expand TL;DR'"
        @click="toggleMobileTldr"
      >
        <svg
          class="w-4 h-4 text-white transition-transform duration-300"
          :class="mobileTldrExpanded ? 'rotate-0' : 'rotate-180'"
          fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>

    <!-- Full-bleed hero image -->
    <div ref="heroContainerEl" class="relative">
      <div class="sticky top-0 w-full h-[51vh] lg:h-[62vh] overflow-hidden">
        <img
          :src="`/img/${post.image}`"
          class="w-full h-full object-cover object-top"
          :alt="`image for ${post.title} article`"
        />
      </div>

      <!-- Overlapping title card — scrolls up over the sticky image -->
      <div ref="titleCardEl" class="max-w-4xl mx-auto px-6 lg:px-8 -mt-24 relative z-10">
        <div class="bg-white rounded-2xl shadow-xl p-8 lg:p-10">
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
const heroContainerEl = ref<HTMLElement | null>(null)
const mobileTldrEl = ref<HTMLElement | null>(null)
const titleCardEl = ref<HTMLElement | null>(null)
const readProgress = ref(0)
const hasScrolled = ref(false)
const mobileTldrExpanded = ref(true)
const tldrManuallyOpened = ref(false)

const { data: post } = await useAsyncData(
  `blog-${route.params.slug}-${locale.value}`,
  () => {
    return queryCollection("blog").path(route.path).first()
  }
)

const showTldr = computed(() => hasScrolled.value)

const readingTime = computed(() => {
  const words = (post.value?.description || '').split(/\s+/).length + 200
  return Math.max(1, Math.ceil(words / 200))
})

const OVERLAP_THRESHOLD_PX = 38 // ~1cm
let lastScrollY = 0

function toggleMobileTldr() {
  if (mobileTldrExpanded.value) {
    mobileTldrExpanded.value = false
    tldrManuallyOpened.value = false
  } else {
    mobileTldrExpanded.value = true
    tldrManuallyOpened.value = true
  }
}

function onScroll() {
  const currentScrollY = window.scrollY
  const scrollingDown = currentScrollY > lastScrollY
  lastScrollY = currentScrollY

  if (heroContainerEl.value) {
    const imageHeight = heroContainerEl.value.querySelector('div')?.offsetHeight ?? 0
    const heroBottom = heroContainerEl.value.getBoundingClientRect().bottom
    hasScrolled.value = heroBottom <= imageHeight

    // Mobile TL;DR: reset to open at top of page
    if (currentScrollY < 10) {
      mobileTldrExpanded.value = true
      tldrManuallyOpened.value = false
    } else if (scrollingDown && !tldrManuallyOpened.value && mobileTldrEl.value && titleCardEl.value) {
      // Collapse when scrolling down and title card overlaps tldr bottom by ~1cm
      const tldrBottom = mobileTldrEl.value.getBoundingClientRect().bottom
      const titleTop = titleCardEl.value.getBoundingClientRect().top
      if (titleTop <= tldrBottom - OVERLAP_THRESHOLD_PX) {
        mobileTldrExpanded.value = false
      }
    }
  }
  if (!articleEl.value) return
  const rect = articleEl.value.getBoundingClientRect()
  const start = rect.top + window.scrollY
  const end = start + rect.height
  const scroll = window.scrollY + window.innerHeight
  const progress = Math.max(0, Math.min(1, (scroll - start) / (end - start)))
  readProgress.value = progress * 100
}

watch(() => route.params.slug, async () => {
  mobileTldrExpanded.value = true
  tldrManuallyOpened.value = false
  hasScrolled.value = false
  lastScrollY = 0
  await nextTick()
})

onMounted(() => {
  lastScrollY = window.scrollY
  window.addEventListener('scroll', onScroll, { passive: true })
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

if (!post.value && import.meta.client) {
  throw createError({ statusCode: 404, statusMessage: "Page Not Found" })
}
</script>
