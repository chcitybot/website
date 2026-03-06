<template>
  <!-- Scroll runway: tall enough so vertical scroll drives horizontal motion -->
  <div ref="runwayEl" class="relative bg-white" :style="{ height: runwayHeight + 'px' }">
    <!-- Sticky viewport: pins the carousel in view while scrolling -->
    <div class="sticky top-0 h-screen overflow-hidden flex flex-col justify-start pt-20 lg:pt-24 font-main">
      <!-- Section header -->
      <div class="text-center mb-4 lg:mb-6 px-6">
        <h2 class="font-heading text-display-sm text-gray-900">
          {{ $t("app_features_title") }}
        </h2>
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
          class="flex-shrink-0 flex flex-col lg:flex-row items-center gap-8 lg:gap-16 px-6 lg:px-12"
          :style="{ width: slideWidth + 'px' }"
        >
          <div class="flex gap-4 lg:gap-6">
            <img
              v-for="(img, imgIdx) in feature.images"
              :key="imgIdx"
              class="w-36 sm:w-48 lg:w-56 rounded-3xl shadow-lg"
              :alt="img.alt"
              :src="img.src"
            />
          </div>
          <div class="lg:max-w-md">
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
    titleKey: 'app_features_individual_exploration_title',
    textKey: 'app_features_individual_exploration_text',
    images: [
      { src: '/img/suggestions_new.png', alt: 'Personalized suggestions' },
      { src: '/img/ai_suggestions.png', alt: 'AI suggestions' },
    ],
  },
  {
    titleKey: 'app_features_thematic_tours_title',
    textKey: 'app_features_thematic_tours_text',
    images: [
      { src: '/img/citybot_tours.png', alt: 'Tours' },
      { src: '/img/active_tour.png', alt: 'Active tour' },
    ],
  },
  {
    titleKey: 'app_features_events_and_offers_title',
    textKey: 'app_features_events_and_offers_text',
    images: [
      { src: '/img/citybot_events.png', alt: 'Events' },
      { src: '/img/special_offers.png', alt: 'Special offers' },
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
