<template>
  <!-- Scroll runway: tall enough so vertical scroll drives horizontal motion -->
  <div ref="runwayEl" class="relative bg-white" :style="{ height: runwayHeight + 'px' }">
    <!-- Sticky viewport: pins the carousel in view while scrolling -->
    <div class="sticky top-16 lg:top-20 h-[calc(100vh-4rem)] lg:h-[calc(100vh-5rem)] bg-white overflow-hidden flex flex-col justify-start pt-6 lg:pt-8 font-main">

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
        <!-- Inline scroll nav -->
        <div class="flex items-center justify-center gap-4">
          <button
            class="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 border-2"
            :class="activeSlide > 0
              ? 'border-bot_dark_blue text-bot_dark_blue hover:bg-bot_dark_blue hover:text-white'
              : 'border-gray-200 text-gray-300 cursor-default'"
            :disabled="activeSlide === 0"
            aria-label="Previous"
            @click="scrollToSlide(activeSlide - 1)"
          >
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <span class="text-xs text-bot_dark_blue font-semibold tracking-widest uppercase">{{ $t("app_features_scroll_hint") }}</span>
          <button
            class="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 border-2"
            :class="activeSlide < features.length - 1
              ? 'border-bot_dark_blue text-bot_dark_blue hover:bg-bot_dark_blue hover:text-white'
              : 'border-gray-200 text-gray-300 cursor-default'"
            :disabled="activeSlide === features.length - 1"
            aria-label="Next"
            @click="scrollToSlide(activeSlide + 1)"
          >
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
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
          class="flex-shrink-0 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 px-12 sm:px-14 lg:px-12"
          :style="{ width: slideWidth + 'px' }"
        >
          <!-- Normal screenshot + text slide -->
          <template v-if="!feature.isCTA && !feature.isDiveDeeper">
            <div class="relative flex gap-4 lg:gap-6">
              <img
                v-for="(img, imgIdx) in feature.images"
                :key="imgIdx"
                class="w-32 sm:w-56 lg:w-72 rounded-3xl shadow-lg"
                :alt="img.alt"
                :src="img.src"
              />
            </div>
            <div class="relative lg:max-w-md">
              <h3 class="font-heading text-h1 text-gray-900 mb-4">
                {{ $t(feature.titleKey) }}
              </h3>
              <p class="text-base sm:text-paragraph text-bot_gray">
                {{ $t(feature.textKey) }}
              </p>
            </div>
          </template>

          <!-- Download CTA slide -->
          <template v-else-if="feature.isCTA">
            <div class="relative text-center max-w-lg">
              <div class="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-bot_red/10 mb-6">
                <svg class="w-7 h-7 text-bot_red" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 8.25h3" />
                </svg>
              </div>
              <h3 class="font-heading text-display-xs sm:text-display-sm text-gray-900 mb-3">
                {{ $t(feature.titleKey) }}
              </h3>
              <p class="text-base sm:text-paragraph text-bot_gray mb-8">
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

          <!-- Dive Deeper panel — enters from right with the slide -->
          <template v-else-if="feature.isDiveDeeper">
            <div
              class="flex flex-col items-center text-center gap-4 lg:gap-6"
              :style="{ opacity: diveDeepOpacity }"
            >
              <div class="flex flex-col items-center">
                <span class="text-sm sm:text-caption uppercase tracking-widest font-semibold text-bot_dark_blue/50 mb-2">
                  {{ $t('dive_deeper_sub') }}
                </span>
                <h2 class="font-heading text-display-xs sm:text-display text-bot_dark_blue mb-6">
                  {{ $t('dive_deeper') }}
                </h2>
                <div class="animate-bounce text-bot_dark_blue/70">
                  <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 14l-7 7m0 0l-7-7" />
                  </svg>
                </div>
              </div>
              <div :style="{ transform: `translateX(${bikeDiveExitX}px) scaleX(-1)` }">
                <img
                  src="/img/citybot_figurine_man_biking_green_bike_no_floor.png"
                  alt=""
                  class="h-[173px] lg:h-[230px] w-auto"
                  :style="{ animation: diveBikeRiding ? 'figurine-bob 0.38s ease-in-out infinite' : 'none' }"
                />
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
const bikeExitProgress = ref(0)

// 0 = CTA slide fully visible, 1 = Dive Deeper panel fully in view
const diveDeepProgress = computed(() => {
  if (!slideWidth.value) return 0
  const slideIdx = -translateX.value / slideWidth.value
  return Math.max(0, Math.min(slideIdx - (features.length - 2), 1))
})

// Content fades in as slide enters
const diveDeepOpacity = computed(() => Math.min(1, diveDeepProgress.value * 3))

// Bike exit: driven by extra scroll after all slides are done (bikeExitProgress 0→1)
const bikeDiveExitX = computed(() =>
  Math.round(-slideWidth.value * bikeExitProgress.value * 1.2)
)

// Bike bobs while either the slide is scrolling in OR the bike is exiting
const diveBikeRiding = computed(() =>
  (diveDeepProgress.value > 0.02 && diveDeepProgress.value < 0.98) ||
  (bikeExitProgress.value > 0 && bikeExitProgress.value < 0.98)
)

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
  {
    isDiveDeeper: true,
    blobColor: '#C5C8FF', // light blue — readable against bot_dark_blue text
    blobLeft: 50, blobTop: 50,
  },
]

const SLIDE_COUNT = features.length

let slideChangeCooldown = false
let wheelAccum = 0
let wheelResetTimer = null
let touchStartY = 0
let touchInSection = false
let touchIntercepting = false

function hexToRgb(hex) {
  return [parseInt(hex.slice(1,3),16), parseInt(hex.slice(3,5),16), parseInt(hex.slice(5,7),16)]
}

function lerp(a, b, t) {
  return a + (b - a) * t
}

// Extra scroll after all slides for the bike exit animation
const BIKE_EXIT_H = () => window.innerHeight * 0.7
// Slides-only runway height (stored so both measure + onScroll use the same value)
const slidesRunwayH = ref(0)

function measure() {
  const headerH = window.innerWidth >= 1024 ? 80 : 64
  slideWidth.value = window.innerWidth
  slidesRunwayH.value = window.innerHeight * (1 + (SLIDE_COUNT - 1) * 0.3) + headerH
  // Content below reveals when bike is ~half off-screen
  runwayHeight.value = slidesRunwayH.value + BIKE_EXIT_H() * 0.45
}

function scrollToSlide(idx) {
  if (!runwayEl.value) return
  const target = Math.max(0, Math.min(idx, SLIDE_COUNT - 1))
  const progress = target / (SLIDE_COUNT - 1)
  const slidesMaxScroll = slidesRunwayH.value - window.innerHeight
  const runwayTop = runwayEl.value.getBoundingClientRect().top + window.scrollY
  window.scrollTo({ top: runwayTop + progress * slidesMaxScroll, behavior: 'smooth' })
}

function onScroll() {
  if (!runwayEl.value) return
  const rect = runwayEl.value.getBoundingClientRect()
  const scrolled = -rect.top
  const slidesMaxScroll = slidesRunwayH.value - window.innerHeight
  const progress = Math.max(0, Math.min(scrolled / slidesMaxScroll, 1))

  const maxTranslate = (SLIDE_COUNT - 1) * slideWidth.value
  translateX.value = -progress * maxTranslate
  activeSlide.value = Math.round(progress * (SLIDE_COUNT - 1))
  bikeExitProgress.value = Math.max(0, Math.min((scrolled - slidesMaxScroll) / BIKE_EXIT_H(), 1))

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

function onTouchStart(e) {
  if (!runwayEl.value) return
  const scrolled = -runwayEl.value.getBoundingClientRect().top
  const slidesMaxScroll = slidesRunwayH.value - window.innerHeight
  touchStartY = e.touches[0].clientY
  touchInSection = scrolled >= 0 && scrolled <= slidesMaxScroll
  touchIntercepting = false
}

function onTouchMove(e) {
  if (!touchInSection) return
  const deltaY = touchStartY - e.touches[0].clientY
  if (Math.abs(deltaY) < 8) return

  const dir = deltaY > 0 ? 1 : -1
  const next = activeSlide.value + dir

  if (next < 0 || next >= SLIDE_COUNT) {
    touchInSection = false // release at boundary, let native scroll take over
    return
  }

  touchIntercepting = true
  e.preventDefault()
}

function onTouchEnd(e) {
  if (!touchIntercepting) return
  touchIntercepting = false

  const deltaY = touchStartY - e.changedTouches[0].clientY
  if (Math.abs(deltaY) < 20) return

  const dir = deltaY > 0 ? 1 : -1
  const next = activeSlide.value + dir
  if (next < 0 || next >= SLIDE_COUNT) return

  if (slideChangeCooldown) return
  slideChangeCooldown = true
  scrollToSlide(next)
  setTimeout(() => { slideChangeCooldown = false }, 600)
}

function onWheel(e) {
  if (!runwayEl.value) return
  const scrolled = -runwayEl.value.getBoundingClientRect().top
  const slidesMaxScroll = slidesRunwayH.value - window.innerHeight

  if (scrolled < 0 || scrolled > slidesMaxScroll) return

  const dir = e.deltaY > 0 ? 1 : -1
  const next = activeSlide.value + dir

  if (next < 0 || next >= SLIDE_COUNT) return

  e.preventDefault()

  // Accumulate delta so trackpad momentum doesn't skip multiple slides
  wheelAccum += e.deltaY
  clearTimeout(wheelResetTimer)
  wheelResetTimer = setTimeout(() => { wheelAccum = 0 }, 300)

  if (Math.abs(wheelAccum) < 100 || slideChangeCooldown) return

  wheelAccum = 0
  slideChangeCooldown = true
  scrollToSlide(next)
  setTimeout(() => { slideChangeCooldown = false }, 600)
}

onMounted(() => {
  const [r,g,b] = hexToRgb(features[0].blobColor)
  blobR.value = r; blobG.value = g; blobB.value = b
  blobLeft.value = features[0].blobLeft
  blobTop.value = features[0].blobTop

  measure()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('wheel', onWheel, { passive: false })
  window.addEventListener('touchstart', onTouchStart, { passive: true })
  window.addEventListener('touchmove', onTouchMove, { passive: false })
  window.addEventListener('touchend', onTouchEnd, { passive: true })
  window.addEventListener('resize', measure)
  onScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('wheel', onWheel)
  window.removeEventListener('touchstart', onTouchStart)
  window.removeEventListener('touchmove', onTouchMove)
  window.removeEventListener('touchend', onTouchEnd)
  clearTimeout(wheelResetTimer)
  window.removeEventListener('resize', measure)

})
</script>

<style scoped>
@keyframes figurine-bob {
  0%, 100% { transform: translateY(0px); }
  25%       { transform: translateY(-5px); }
  75%       { transform: translateY(-2px); }
}
</style>
