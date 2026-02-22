<template>
  <section class="overflow-hidden bg-white">
    <!-- Title content -->
    <div class="pt-32 pb-16 lg:pt-40 lg:pb-20 max-w-7xl mx-auto px-6 lg:px-8">
      <div class="max-w-2xl mx-auto text-center">
        <h1 class="font-heading text-display-sm lg:text-display text-gray-900 opacity-0 animate-fade-up-delay-1">
          {{ $t("home_hero_title") }}
        </h1>

        <p class="mt-6 text-paragraph text-bot_gray max-w-lg mx-auto opacity-0 animate-fade-up-delay-2">
          {{ $t("home_hero_subtitle") }}
        </p>

        <div class="mt-10 flex flex-wrap justify-center gap-4 opacity-0 animate-fade-up-delay-3">
          <NuxtLink
            :to="'/download'"
            class="inline-flex items-center px-8 py-4 rounded-full bg-bot_dark_blue text-white text-paragraph font-semibold hover:bg-bot_dark_blue/90 transition-all duration-200 shadow-lg shadow-bot_dark_blue/25 hover:shadow-xl hover:shadow-bot_dark_blue/30 hover:-translate-y-0.5"
          >
            {{ $t("cta_app_test") }}
            <svg class="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </NuxtLink>
          <NuxtLink
            :to="'/contact'"
            class="inline-flex items-center px-8 py-4 rounded-full border-2 border-gray-200 text-gray-700 text-paragraph font-semibold hover:border-bot_dark_blue hover:text-bot_dark_blue transition-all duration-200 hover:-translate-y-0.5"
          >
            {{ $t("cta_become_partner") }}
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Phone screenshots strip -->
    <div
      ref="stripContainer"
      class="relative pb-12 lg:pb-16"
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
const stripContainer = ref(null)
const stripEl = ref(null)
const offsetX = ref(0)
const isHovering = ref(false)
const autoSpeed = 1.0
let animFrame = null
let targetX = 0
let hoverSpeed = 0

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
    // Mouse controls speed/direction based on position
    targetX += hoverSpeed
  } else {
    targetX -= autoSpeed
  }
  wrapX()
  // Gentle lerp
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
  const ratio = (e.clientX - rect.left) / rect.width // 0 to 1
  // Center (0.5) = no movement, edges = gentle scroll in that direction
  // Max speed ~2px/frame at the very edge
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
})

onUnmounted(() => {
  if (animFrame) cancelAnimationFrame(animFrame)
})
</script>
