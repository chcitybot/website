<template>
  <section class="overflow-hidden bg-bot_bg">
    <!-- Full-viewport hero -->
    <div
      ref="heroEl"
      class="min-h-screen flex flex-col items-center justify-center px-6 lg:px-8 relative"
      @mousemove="onHeroMouseMove"
      @mouseleave="onHeroMouseLeave"
    >
      <!-- Animated gradient orbs (pulsate in place) -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          v-for="i in 5"
          :key="i"
          :class="`hero-orb hero-orb-${i}`"
        ></div>
      </div>

      <!-- Floating POI icons with pulse ring -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none z-[2]">
        <div
          v-for="(poi, idx) in pois"
          :key="idx"
          class="absolute"
          :style="{
            left: poi.x + '%',
            top: poi.y + '%',
            transform: 'translate(-50%, -50%)',
          }"
        >
          <!-- Pulse ring -->
          <div
            class="absolute -inset-1 rounded-full border-[3px] border-bot_dark_blue/30"
            style="filter: blur(3px)"
            :class="poi.pulsing ? 'poi-pulse' : ''"
            :style="{ opacity: poi.pulsing ? 1 : 0 }"
          ></div>
          <!-- Icon -->
          <div
            class="w-10 h-10 rounded-xl bg-white/80 backdrop-blur-sm shadow-md flex items-center justify-center text-bot_dark_blue ease-out"
            :style="{
              opacity: poi.visible ? 0.6 : 0,
              transform: `scale(${poi.visible ? 1 : 0.5})`,
              transition: poi.visible ? 'all 0.5s ease-out' : 'all 1.2s ease-out',
            }"
          >
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" :d="poi.icon" />
            </svg>
          </div>
        </div>
      </div>

      <div class="max-w-2xl mx-auto text-center relative z-10">
        <!-- Logo + brand -->
        <div class="flex flex-col items-center mb-12 opacity-0 animate-fade-up-delay-1">
          <SvgBot class="h-16 w-16 lg:h-20 lg:w-20" />
          <span class="mt-1 font-heading text-2xl lg:text-3xl font-semibold text-bot_dark_blue tracking-tight">CityBot</span>
        </div>

        <h1 class="font-heading text-display-sm lg:text-display text-gray-900 opacity-0 animate-fade-up-delay-1">
          {{ $t("home_hero_title") }}
        </h1>

        <p class="mt-6 text-paragraph text-bot_gray max-w-lg mx-auto opacity-0 animate-fade-up-delay-2">
          {{ $t("home_hero_subtitle") }}
        </p>

        <div class="mt-10 flex flex-wrap justify-center gap-4 opacity-0 animate-fade-up-delay-3">
          <NuxtLink
            :to="'/download'"
            class="inline-flex items-center px-8 py-4 rounded-full bg-bot_red text-white text-paragraph font-semibold hover:bg-bot_red/90 transition-all duration-200 shadow-lg shadow-bot_red/25 hover:shadow-xl hover:shadow-bot_red/30 hover:-translate-y-0.5"
          >
            {{ $t("cta_app_test") }}
            <svg class="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </NuxtLink>
          <NuxtLink
            :to="'/contact'"
            class="inline-flex items-center px-8 py-4 rounded-full border-2 border-bot_dark_blue text-bot_dark_blue text-paragraph font-semibold hover:bg-bot_dark_blue hover:text-white transition-all duration-200 hover:-translate-y-0.5"
          >
            {{ $t("cta_become_partner") }}
          </NuxtLink>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="absolute bottom-8 z-10 animate-fade-up-delay-3 transition-opacity duration-500" :style="{ opacity: scrollIndicatorOpacity, visibility: scrollIndicatorOpacity === 0 ? 'hidden' : 'visible' }">
        <div class="animate-bounce">
          <svg class="w-6 h-6 text-bot_gray" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 14l-7 7m0 0l-7-7" />
          </svg>
        </div>
      </div>
    </div>

    <!-- Phone screenshots strip -->
    <div
      ref="stripContainer"
      class="relative pb-12 lg:pb-16"
      :style="{ marginTop: `${stripPullUp}px` }"
      @mouseenter="onMouseEnter"
      @mouseleave="onMouseLeave"
      @mousemove="onMouseMove"
      @touchstart="onTouchStart"
      @touchmove="onTouchMove"
      @touchend="onTouchEnd"
    >
      <!-- Left arrow -->
      <button
        @click="nudge(300)"
        class="absolute left-2 lg:left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm shadow-md flex items-center justify-center text-bot_gray hover:text-bot_dark_blue hover:bg-white transition-all duration-200"
        aria-label="Scroll left"
      >
        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <!-- Right arrow -->
      <button
        @click="nudge(-300)"
        class="absolute right-2 lg:right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm shadow-md flex items-center justify-center text-bot_gray hover:text-bot_dark_blue hover:bg-white transition-all duration-200"
        aria-label="Scroll right"
      >
        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div
        ref="stripEl"
        class="flex gap-4 will-change-transform"
        :style="{ transform: `translateX(${offsetX}px)` }"
      >
        <img
          v-for="i in 18"
          :key="i"
          :src="`/img/Apple iPhone 11 Pro Max Screenshot ${(i - 1) % 9}.png`"
          :alt="`App screenshot ${((i - 1) % 9) + 1}`"
          class="h-[26rem] lg:h-[34rem] w-auto rounded-3xl shadow-lg flex-shrink-0 select-none pointer-events-none"
          draggable="false"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
const heroEl = ref(null)
const stripContainer = ref(null)
const stripEl = ref(null)
const offsetX = ref(0)
const isHovering = ref(false)
const autoSpeed = 1.0
let animFrame = null
let targetX = 0
let hoverSpeed = 0

// Scroll-driven: pull screenshots up to close the gap
const stripPullUp = ref(0)
const scrollIndicatorOpacity = ref(1)

// Mouse position (normalized 0-1)
const mouseX = ref(0.5)
const mouseY = ref(0.5)

// POI icons — positioned around the hero, appear when cursor is nearby
// Each has a lineX/lineY target for comet trail, headT/tailT for animation
const pois = reactive([
  { x: 10, y: 20, icon: 'M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z', visible: false, pulsing: false },
  { x: 88, y: 45, icon: 'M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z', visible: false, pulsing: false },
  { x: 18, y: 75, icon: 'M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z', visible: false, pulsing: false },
  { x: 80, y: 78, icon: 'M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0l-4.725 2.885a.562.562 0 01-.84-.61l1.285-5.385a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z', visible: false, pulsing: false },
  { x: 42, y: 12, icon: 'M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819', visible: false, pulsing: false },
  { x: 65, y: 15, icon: 'M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5V18m0-8.25a3 3 0 00-3 3v3.75m0 0h6m-6 0H3.375a1.125 1.125 0 01-1.125-1.125v-6.375C2.25 7.033 3.033 6.25 4.5 6.25h15c1.467 0 2.25.783 2.25 2v6.375c0 .621-.504 1.125-1.125 1.125H15m0 0v3.375c0 .621-.504 1.125-1.125 1.125h-3.75A1.125 1.125 0 019 18.75V16.5m6 0h-6', visible: false, pulsing: false },
  { x: 32, y: 42, icon: 'M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z', visible: false, pulsing: false },
  { x: 68, y: 58, icon: 'M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25', visible: false, pulsing: false },
])

function onHeroMouseMove(e) {
  if (!heroEl.value) return
  const rect = heroEl.value.getBoundingClientRect()
  mouseX.value = (e.clientX - rect.left) / rect.width
  mouseY.value = (e.clientY - rect.top) / rect.height

  const cx = mouseX.value * 100
  const cy = mouseY.value * 100
  for (const poi of pois) {
    const dist = Math.hypot(cx - poi.x, cy - poi.y)
    const wasVisible = poi.visible
    poi.visible = dist < 15
    // Trigger pulse on discovery
    if (poi.visible && !wasVisible) {
      poi.pulsing = true
      setTimeout(() => { poi.pulsing = false }, 1200)
    }
  }
}

function onHeroMouseLeave() {
  for (const poi of pois) {
    poi.visible = false
  }
}

function onScrollHero() {
  const scrollY = window.scrollY
  const vh = window.innerHeight
  const progress = Math.min(scrollY / vh, 1)
  stripPullUp.value = -progress * vh * 0.4
  scrollIndicatorOpacity.value = Math.max(1 - scrollY / 20, 0)
}

function getHalfWidth() {
  if (!stripEl.value) return 3000
  return stripEl.value.scrollWidth / 2
}

function wrapX() {
  const hw = getHalfWidth()
  if (targetX <= -hw) targetX += hw
  if (targetX > 0) targetX -= hw
  if (offsetX.value <= -hw) {
    offsetX.value += hw
    targetX += hw
  }
  if (offsetX.value > 0) {
    offsetX.value -= hw
    targetX -= hw
  }
}

function tick() {
  if (isHovering.value) {
    targetX += hoverSpeed
  } else {
    targetX -= autoSpeed
  }
  wrapX()
  offsetX.value += (targetX - offsetX.value) * 0.08
  animFrame = requestAnimationFrame(tick)
}

function onMouseEnter() {
  isHovering.value = true
}

function onMouseLeave() {
  isHovering.value = false
  hoverSpeed = 0
}

function onMouseMove(e) {
  if (!stripContainer.value) return
  const rect = stripContainer.value.getBoundingClientRect()
  const ratio = (e.clientX - rect.left) / rect.width
  hoverSpeed = -(ratio - 0.5) * 6
}

function nudge(px) {
  targetX += px
}

let touchStartX = 0
let touchStartOffset = 0

function onTouchStart(e) {
  isHovering.value = true
  touchStartX = e.touches[0].clientX
  touchStartOffset = targetX
}

function onTouchMove(e) {
  const dx = e.touches[0].clientX - touchStartX
  targetX = touchStartOffset + dx
}

function onTouchEnd() {
  isHovering.value = false
}

onMounted(() => {
  animFrame = requestAnimationFrame(tick)
  window.addEventListener('scroll', onScrollHero, { passive: true })
  onScrollHero()
})

onUnmounted(() => {
  if (animFrame) cancelAnimationFrame(animFrame)
  window.removeEventListener('scroll', onScrollHero)
})
</script>
