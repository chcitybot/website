<template>
  <div ref="sectionEl" class="relative overflow-hidden bg-bot_bg py-16 lg:py-24">
    <div class="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 font-main">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
        <div ref="textEl">
          <p class="text-sm sm:text-caption uppercase tracking-widest text-bot_dark_blue font-semibold mb-3">
            {{ $t("cmt_features_suptitle") }}
          </p>
          <h2 class="font-heading text-display-xs sm:text-display-sm text-gray-900 mb-4">
            {{ $t("cmt_features_headline_title") }}
          </h2>
          <ul class="space-y-6 mt-8">
            <li class="flex gap-4 items-start">
              <div class="flex-shrink-0 w-10 h-10 rounded-xl bg-bot_dark_blue/10 flex items-center justify-center">
                <svg class="w-5 h-5 text-bot_dark_blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 class="text-h2 text-gray-900">{{ $t("cmt_features_multimedia_title") }}</h3>
                <p class="mt-1 text-base sm:text-paragraph text-bot_gray">{{ $t("cmt_features_multimedia_text") }}</p>
              </div>
            </li>
            <li class="flex gap-4 items-start">
              <div class="flex-shrink-0 w-10 h-10 rounded-xl bg-bot_dark_blue/10 flex items-center justify-center">
                <svg class="w-5 h-5 text-bot_dark_blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 class="text-h2 text-gray-900">{{ $t("cmt_features_events_title") }}</h3>
                <p class="mt-1 text-base sm:text-paragraph text-bot_gray">{{ $t("cmt_features_events_text") }}</p>
              </div>
            </li>
            <li class="flex gap-4 items-start">
              <div class="flex-shrink-0 w-10 h-10 rounded-xl bg-bot_dark_blue/10 flex items-center justify-center">
                <svg class="w-5 h-5 text-bot_dark_blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 class="text-h2 text-gray-900">{{ $t("cmt_features_pois_title") }}</h3>
                <p class="mt-1 text-base sm:text-paragraph text-bot_gray">{{ $t("cmt_features_pois_text") }}</p>
              </div>
            </li>
            <li class="flex gap-4 items-start">
              <div class="flex-shrink-0 w-10 h-10 rounded-xl bg-bot_dark_blue/10 flex items-center justify-center">
                <svg class="w-5 h-5 text-bot_dark_blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <div>
                <h3 class="text-h2 text-gray-900">{{ $t("cmt_features_digital_branding_title") }}</h3>
                <p class="mt-1 text-base sm:text-paragraph text-bot_gray">{{ $t("cmt_features_digital_branding_text") }}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Walking figurine: vertically centered, horizontally animated, behind text -->
    <div class="absolute inset-0 flex items-center pointer-events-none z-0">
    <div :style="{ transform: `translateX(${figureXPx}px)`, opacity: figureOpacity }">
      <!-- scaleX(-1) flips the man to face left; separate element keeps translateX axis intact -->
      <div style="transform: scaleX(-1)">
        <img
          ref="figureImgEl"
          src="/img/citybot_figurine_woman_walking_with_backpack_no_floor.png"
          alt=""
          class="h-[16rem] sm:h-[20rem] lg:h-[34rem] w-auto block"
          :style="{ animation: figureWalking ? 'figurine-bob 0.38s ease-in-out infinite' : 'none' }"
          @load="measure"
        />
      </div>
    </div>
    </div>
  </div>
</template>

<script setup>
const sectionEl = ref(null)
const figureImgEl = ref(null)
const textEl = ref(null)
const figureXPx = ref(1000)
const figureWalking = ref(false)
const figureOpacity = ref(1)

let stopX = 0   // translateX when centered
let startX = 1000  // translateX when off-screen right
let figW = 200, textRight = 0
let rafPending = false

const FADE_ZONE = 80
const FADE_BUFFER = 92
const MIN_OPACITY = 0.25

function measure() {
  if (!sectionEl.value || !figureImgEl.value) return
  const secRect = sectionEl.value.getBoundingClientRect()
  const secWidth = sectionEl.value.offsetWidth
  const el = figureImgEl.value
  const renderedH = el.offsetHeight
  figW = el.offsetWidth > 0
    ? el.offsetWidth
    : el.naturalWidth > 0 && el.naturalHeight > 0
      ? Math.round(renderedH * el.naturalWidth / el.naturalHeight)
      : 200

  stopX = Math.round((secWidth - figW) / 2)  // centered
  startX = secWidth                            // off-screen right
  if (textEl.value) {
    const textRect = textEl.value.getBoundingClientRect()
    textRight = textRect.right - secRect.left
  }
  onScroll()
}

function updateFigure() {
  rafPending = false
  if (!sectionEl.value) return
  const rect = sectionEl.value.getBoundingClientRect()
  const vh = window.innerHeight
  const progress = Math.max(0, Math.min(1, (vh * 0.85 - rect.top) / vh))
  figureXPx.value = Math.round(stopX + (startX - stopX) * (1 - progress))
  figureWalking.value = progress > 0.02 && progress < 0.98
  const overlap = Math.max(0, textRight - figureXPx.value - FADE_BUFFER)
  figureOpacity.value = Math.max(MIN_OPACITY, 1 - overlap / FADE_ZONE)
}

function onScroll() {
  if (rafPending) return
  rafPending = true
  requestAnimationFrame(updateFigure)
}

onMounted(async () => {
  await nextTick()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', measure)
  measure()
})
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
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
