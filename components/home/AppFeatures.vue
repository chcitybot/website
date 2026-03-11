<template>
  <!-- Scroll runway: tall enough so vertical scroll drives horizontal motion -->
  <div ref="runwayEl" class="relative bg-white" :style="{ height: runwayHeight + 'px' }">
    <!-- Sticky viewport: pins the carousel in view while scrolling -->
    <div class="sticky top-0 h-screen overflow-hidden flex flex-col justify-start pt-20 lg:pt-24 font-main">
      <!-- Section header -->
      <div class="text-center mb-4 lg:mb-6 px-6">
        <p class="text-caption uppercase tracking-widest text-bot_dark_blue font-semibold mb-3">
          {{ $t("app_features_eyebrow") }}
        </p>
        <h2 class="font-heading text-display-sm text-gray-900">
          {{ $t("app_features_title") }}
        </h2>
      </div>

      <!-- Right scroll hint -->
      <div
        class="absolute right-2 lg:right-6 top-1/2 -translate-y-1/2 z-10 flex flex-col items-center gap-2 transition-all duration-500"
        :class="activeSlide < features.length - 1 ? 'opacity-100' : 'opacity-0 pointer-events-none'"
      >
        <span class="text-xs text-bot_gray tracking-widest uppercase" style="writing-mode: vertical-rl; letter-spacing: 0.15em;">{{ $t("app_features_scroll_hint") }}</span>
        <div class="animate-bounce-x-right w-10 h-10 rounded-full flex items-center justify-center text-bot_gray/40">
          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>

      <!-- Left scroll hint -->
      <div
        class="absolute left-2 lg:left-6 top-1/2 -translate-y-1/2 z-10 flex flex-col items-center gap-2 transition-all duration-500"
        :class="activeSlide > 0 ? 'opacity-100' : 'opacity-0 pointer-events-none'"
      >
        <div class="animate-bounce-x-left w-10 h-10 rounded-full flex items-center justify-center text-bot_gray/40">
          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </div>
      </div>

      <!-- Horizontal track -->
      <div
        class="flex items-center will-change-transform transition-none my-6 lg:my-10"
        :style="{ transform: `translateX(${translateX}px)` }"
      >
        <!-- Feature slides -->
        <div
          v-for="(feature, idx) in features"
          :key="idx"
          class="relative flex-shrink-0 flex flex-col lg:flex-row items-center gap-8 lg:gap-16 px-6 lg:px-12"
          :style="{ width: slideWidth + 'px' }"
        >
          <!-- Decorative color blob -->
          <div
            class="absolute pointer-events-none"
            :style="{
              width: '900px',
              height: '900px',
              top: '50%',
              left: '32%',
              transform: 'translate(-50%, -50%)',
              background: `radial-gradient(circle, ${feature.blobColor}80 0%, ${feature.blobColor}50 35%, ${feature.blobColor}18 60%, transparent 75%)`,
              borderRadius: '50%',
            }"
          />
          <div class="relative flex gap-4 lg:gap-6">
            <img
              v-for="(img, imgIdx) in feature.images"
              :key="imgIdx"
              class="w-44 sm:w-60 lg:w-72 rounded-3xl shadow-lg"
              :alt="img.alt"
              :src="img.src"
            />
          </div>
          <div class="relative lg:max-w-md">
            <h3 class="font-heading text-h1 text-gray-900 mb-4">
              {{ $t(feature.titleKey) }}
            </h3>
            <p class="text-paragraph text-bot_gray">
              {{ $t(feature.textKey) }}
            </p>
          </div>
        </div>
      </div>

      <!-- Slide indicators -->
      <div class="flex justify-center gap-2 mt-4 lg:mt-6">
        <div
          v-for="(_, idx) in features"
          :key="idx"
          class="w-2 h-2 rounded-full transition-all duration-300"
          :class="idx === activeSlide ? 'bg-bot_dark_blue w-6' : 'bg-gray-300'"
        />
      </div>

      <!-- Download CTA -->
      <div class="text-center mt-6 lg:mt-8">
        <h2 class="font-heading text-display-sm text-gray-900 mb-4">
          {{ $t("cta_app_download") }}
        </h2>
        <div class="flex justify-center flex-wrap gap-4">
          <a href="https://play.google.com/store/apps/details?id=ch.citybot.citybot" target="_blank" rel="noopener" class="hover:opacity-80 transition-opacity">
            <SvgGooglePlayStore />
          </a>
          <a href="https://apps.apple.com/ch/app/citybot-zug/id6443655653" target="_blank" rel="noopener" class="hover:opacity-80 transition-opacity">
            <SvgAppleAppStore />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const runwayEl = ref(null)
const translateX = ref(0)
const slideWidth = ref(0)
const runwayHeight = ref(0)
const activeSlide = ref(0)

const features = [
  {
    titleKey: 'app_features_overview_title',
    textKey: 'app_features_overview_text',
    blobColor: '#9297FF', // bot_light_blue — soft, welcoming
    images: [
      { src: '/img/R161_1_overview_cropped.png', alt: 'App home screen' },
      { src: '/img/R161_10_places_filter_cropped.png', alt: 'Category filter' },
    ],
  },
  {
    titleKey: 'app_features_ai_title',
    textKey: 'app_features_ai_text',
    blobColor: '#4047D2', // bot_dark_blue — deep, intelligent
    images: [
      { src: '/img/R161_7_places_map_ai_search_cropped.png', alt: 'AI search prompt' },
      { src: '/img/R161_8_ai_search_results_cropped.png', alt: 'AI search results' },
    ],
  },
  {
    titleKey: 'app_features_navigate_title',
    textKey: 'app_features_navigate_text',
    blobColor: '#ACD9E1', // bot_teal_light — airy, outdoorsy
    images: [
      { src: '/img/R161_9_place_detail_route_cropped.png', alt: 'Place detail with route' },
      { src: '/img/R161_11_places_map_nature_cropped.png', alt: 'Nature places on map' },
    ],
  },
  {
    titleKey: 'app_features_tours_title',
    textKey: 'app_features_tours_text',
    blobColor: '#FFC2AC', // bot_salmon — warm, adventurous
    images: [
      { src: '/img/R161_2_tour_map_cropped.png', alt: 'Tour map' },
      { src: '/img/R161_4_tour_details_cropped.png', alt: 'Tour details' },
    ],
  },
  {
    titleKey: 'app_features_events_title',
    textKey: 'app_features_events_text',
    blobColor: '#F9B666', // bot_pink — golden, festive
    images: [
      { src: '/img/R161_5_tour_navigation_cropped.png', alt: 'Tour navigation' },
      { src: '/img/R161_12_events_list_cropped.png', alt: 'Events list' },
    ],
  },
]

const SLIDE_COUNT = features.length

function measure() {
  slideWidth.value = window.innerWidth
  // Runway = viewport height + scroll room per additional slide
  runwayHeight.value = window.innerHeight * (1 + (SLIDE_COUNT - 1) * 0.3)
}

function onScroll() {
  if (!runwayEl.value) return
  const rect = runwayEl.value.getBoundingClientRect()
  // How far the runway top has scrolled past the viewport top
  const scrolled = -rect.top
  const maxScroll = runwayHeight.value - window.innerHeight
  const progress = Math.max(0, Math.min(scrolled / maxScroll, 1))

  // Map progress 0–1 to translateX from 0 to -(SLIDE_COUNT-1) * slideWidth
  const maxTranslate = (SLIDE_COUNT - 1) * slideWidth.value
  translateX.value = -progress * maxTranslate
  activeSlide.value = Math.round(progress * (SLIDE_COUNT - 1))
}

onMounted(() => {
  measure()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', measure)
  onScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', measure)
})
</script>
