<template>
  <!-- Scroll runway: tall enough so vertical scroll drives horizontal motion -->
  <div ref="runwayEl" class="relative bg-white" :style="{ height: runwayHeight + 'px' }">
    <!-- Sticky viewport: pins the carousel in view while scrolling -->
    <div class="sticky top-0 h-screen overflow-hidden flex flex-col justify-start pt-20 lg:pt-24 font-main">

      <!-- Animated blob — single element, color + position driven by scroll -->
      <div
        class="absolute pointer-events-none"
        :style="{
          width: '900px',
          height: '900px',
          top: blobTop + '%',
          left: blobLeft + '%',
          transform: 'translate(-50%, -50%)',
          background: `radial-gradient(circle, rgba(${blobR},${blobG},${blobB},0.9) 0%, transparent 55%)`,
          borderRadius: '50%',
          filter: 'blur(30px)',
          opacity: 0.9,
        }"
      />

      <!-- Section header -->
      <div class="relative text-center mb-4 lg:mb-6 px-6">
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
        class="relative flex items-center will-change-transform transition-none my-6 lg:my-10"
        :style="{ transform: `translateX(${translateX}px)` }"
      >
        <!-- Feature slides -->
        <div
          v-for="(feature, idx) in features"
          :key="idx"
          class="flex-shrink-0 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 px-6 lg:px-12"
          :style="{ width: slideWidth + 'px' }"
        >
          <!-- Normal screenshot + text slide -->
          <template v-if="!feature.isCTA">
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
          </template>

          <!-- Download CTA slide -->
          <template v-else>
            <div class="relative text-center max-w-lg">
              <div class="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-bot_red/10 mb-6">
                <svg class="w-7 h-7 text-bot_red" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 8.25h3" />
                </svg>
              </div>
              <h3 class="font-heading text-display-sm text-gray-900 mb-3">
                {{ $t(feature.titleKey) }}
              </h3>
              <p class="text-paragraph text-bot_gray mb-8">
                {{ $t(feature.textKey) }}
              </p>
              <div class="flex justify-center flex-wrap gap-4">
                <a href="https://play.google.com/store/apps/details?id=ch.citybot.citybot" target="_blank" rel="noopener" class="hover:opacity-80 hover:-translate-y-0.5 transition-all duration-200">
                  <SvgGooglePlayStore />
                </a>
                <a href="https://apps.apple.com/ch/app/citybot-zug/id6443655653" target="_blank" rel="noopener" class="hover:opacity-80 hover:-translate-y-0.5 transition-all duration-200">
                  <SvgAppleAppStore />
                </a>
              </div>
            </div>
          </template>
        </div>
      </div>

      <!-- Slide indicators -->
      <div class="relative flex justify-center gap-2 mt-4 lg:mt-6">
        <div
          v-for="(_, idx) in features"
          :key="idx"
          class="w-2 h-2 rounded-full transition-all duration-300"
          :class="idx === activeSlide ? 'bg-bot_dark_blue w-6' : 'bg-gray-300'"
        />
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

// Blob state — driven by scroll interpolation
const blobR = ref(146)
const blobG = ref(151)
const blobB = ref(255)
const blobLeft = ref(30)
const blobTop = ref(50)

const features = [
  {
    titleKey: 'app_features_overview_title',
    textKey: 'app_features_overview_text',
    blobColor: '#9297FF', // bot_light_blue
    blobLeft: 30, blobTop: 50,
    images: [
      { src: '/img/R161_1_overview_cropped.png', alt: 'App home screen' },
      { src: '/img/R161_10_places_filter_cropped.png', alt: 'Category filter' },
    ],
  },
  {
    titleKey: 'app_features_ai_title',
    textKey: 'app_features_ai_text',
    blobColor: '#FA634B', // bot_red
    blobLeft: 38, blobTop: 40,
    images: [
      { src: '/img/R161_7_places_map_ai_search_cropped.png', alt: 'AI search prompt' },
      { src: '/img/R161_8_ai_search_results_cropped.png', alt: 'AI search results' },
    ],
  },
  {
    titleKey: 'app_features_navigate_title',
    textKey: 'app_features_navigate_text',
    blobColor: '#ACD9E1', // bot_teal_light
    blobLeft: 26, blobTop: 58,
    images: [
      { src: '/img/R161_9_place_detail_route_cropped.png', alt: 'Place detail with route' },
      { src: '/img/R161_11_places_map_nature_cropped.png', alt: 'Nature places on map' },
    ],
  },
  {
    titleKey: 'app_features_tours_title',
    textKey: 'app_features_tours_text',
    blobColor: '#FFC2AC', // bot_salmon
    blobLeft: 35, blobTop: 45,
    images: [
      { src: '/img/R161_2_tour_map_cropped.png', alt: 'Tour map' },
      { src: '/img/R161_4_tour_details_cropped.png', alt: 'Tour details' },
    ],
  },
  {
    titleKey: 'app_features_events_title',
    textKey: 'app_features_events_text',
    blobColor: '#F9B666', // bot_pink
    blobLeft: 31, blobTop: 54,
    images: [
      { src: '/img/R161_5_tour_navigation_cropped.png', alt: 'Tour navigation' },
      { src: '/img/R161_12_events_list_cropped.png', alt: 'Events list' },
    ],
  },
  {
    titleKey: 'cta_app_download',
    textKey: 'cta_app_download_sub',
    blobColor: '#FA634B', // warm coral for the CTA finale
    blobLeft: 50, blobTop: 50,
    isCTA: true,
  },
]

const SLIDE_COUNT = features.length

function hexToRgb(hex) {
  return [parseInt(hex.slice(1,3),16), parseInt(hex.slice(3,5),16), parseInt(hex.slice(5,7),16)]
}

function lerp(a, b, t) {
  return a + (b - a) * t
}

function measure() {
  slideWidth.value = window.innerWidth
  runwayHeight.value = window.innerHeight * (1 + (SLIDE_COUNT - 1) * 0.3)
}

function onScroll() {
  if (!runwayEl.value) return
  const rect = runwayEl.value.getBoundingClientRect()
  const scrolled = -rect.top
  const maxScroll = runwayHeight.value - window.innerHeight
  const progress = Math.max(0, Math.min(scrolled / maxScroll, 1))

  const maxTranslate = (SLIDE_COUNT - 1) * slideWidth.value
  translateX.value = -progress * maxTranslate
  activeSlide.value = Math.round(progress * (SLIDE_COUNT - 1))

  const slideProgress = progress * (SLIDE_COUNT - 1)
  const fromIdx = Math.min(Math.floor(slideProgress), SLIDE_COUNT - 2)
  const toIdx = fromIdx + 1
  const t = slideProgress - fromIdx

  const [r1,g1,b1] = hexToRgb(features[fromIdx].blobColor)
  const [r2,g2,b2] = hexToRgb(features[toIdx].blobColor)
  blobR.value = Math.round(lerp(r1, r2, t))
  blobG.value = Math.round(lerp(g1, g2, t))
  blobB.value = Math.round(lerp(b1, b2, t))

  blobLeft.value = lerp(features[fromIdx].blobLeft, features[toIdx].blobLeft, t)
  blobTop.value = lerp(features[fromIdx].blobTop, features[toIdx].blobTop, t)
}

onMounted(() => {
  const [r,g,b] = hexToRgb(features[0].blobColor)
  blobR.value = r; blobG.value = g; blobB.value = b
  blobLeft.value = features[0].blobLeft
  blobTop.value = features[0].blobTop

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
