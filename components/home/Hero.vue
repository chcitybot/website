<template>
  <section class="overflow-hidden bg-bot_bg">
    <!-- Full-viewport hero -->
    <div
      ref="heroEl"
      class="min-h-screen flex flex-col items-center justify-center px-6 lg:px-8 relative"
    >
      <!-- Animated gradient orbs (pulsate in place) -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          v-for="i in 5"
          :key="i"
          :class="`hero-orb hero-orb-${i}`"
        ></div>
      </div>

      <!-- Floating POI icons with connecting line -->
      <div ref="poiWrapEl" class="absolute inset-0 overflow-hidden pointer-events-none z-[2]">
        <!-- SVG lines: persistent committed lines + one traveling line -->
        <!-- viewBox matches actual pixels so stroke-dasharray is always in real px -->
        <svg
          class="absolute inset-0 w-full h-full"
          :viewBox="`0 0 ${svgW} ${svgH}`"
        >
          <!-- Mask + invisible path reference for bubble motion -->
          <defs>
            <mask :id="`travel-mask-${travelCycleKey}`" maskUnits="userSpaceOnUse">
              <rect
                :x="travelFromPx.x"
                :y="travelFromPx.y - 6"
                height="12"
                fill="white"
                :transform="`rotate(${travelLineAngle}, ${travelFromPx.x}, ${travelFromPx.y})`"
                :style="{
                  width: lineVisible ? travelLineLength + 'px' : '0px',
                  transition: lineVisible ? `width ${LINE_DUR}ms ease-in-out` : 'none'
                }"
              />
            </mask>
          </defs>

          <!-- Persistent lines (committed) — colored by their destination -->
          <path
            v-for="line in completedLines"
            :key="line.id"
            :d="getPathD(line.from, line.to)"
            fill="none"
            :stroke="line.color"
            stroke-width="1.5"
            stroke-linecap="round"
            class="persistent-line"
            :style="{ opacity: line.opacity }"
          />

          <!-- Traveling dashed line, revealed by the mask — destination color -->
          <path
            :key="travelCycleKey"
            :d="getPathD(travelingFrom, travelingTo)"
            fill="none"
            :stroke="pois[travelingTo].color"
            stroke-width="1.5"
            stroke-linecap="round"
            class="hero-connect-line"
            :mask="`url(#travel-mask-${travelCycleKey})`"
          />

          <!-- Bloom rings: expand from icon center when bubble arrives, fade out -->
          <circle
            v-for="bloom in blooms"
            :key="bloom.id"
            :cx="bloom.x"
            :cy="bloom.y"
            r="5"
            fill="none"
            :stroke="bloom.color"
            stroke-width="5"
            vector-effect="non-scaling-stroke"
            class="poi-bloom"
          />

          <!-- Traveling bubble: organic drop — takes destination color -->
          <path
            v-if="bubbleVisible"
            :transform="`translate(${bubbleX}, ${bubbleY}) rotate(${travelLineAngle})`"
            :d="bubblePath"
            :fill="bubbleColor"
            fill-opacity="0.6"
          />
        </svg>

        <!-- POI icons -->
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
          <!-- Icon -->
          <div
            class="w-12 h-12 rounded-xl backdrop-blur-sm shadow-md flex items-center justify-center overflow-hidden"
            :style="{
              backgroundColor: poi.color,
              opacity: poi.visible ? 0.35 : 0,
              transform: `scale(${poi.visible ? 1 : 0.5})`,
              transition: poi.visible ? 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)' : 'all 0.8s ease-out',
            }"
          >
            <img
              :src="poi.image"
              class="w-7 h-7 object-contain"
              :style="poi.image.endsWith('.png') && !poi.image.includes('_neg') ? { filter: 'brightness(0) invert(1)' } : {}"
            />
          </div>
        </div>
      </div>

      <div class="max-w-2xl mx-auto text-center relative z-10">
        <!-- Logo + brand -->
        <div class="flex flex-col items-center mb-12 opacity-0 animate-fade-up-delay-1">
          <SvgBot class="h-32 w-32 lg:h-44 lg:w-44" />
          <span class="mt-2 font-heading text-4xl lg:text-5xl font-semibold text-bot_dark_blue tracking-tight">CityBot</span>
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
const poiWrapEl = ref(null)
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

// POI icons — clockwise flow but alternating outer/inner to create zigzag feel
// Odd indices (1,3,5,7) pulled toward center; even (0,2,4,6,8) pushed to edges
// Each consecutive step stays ~28-36 viewBox units (≈ 30% of screen)
const pois = reactive([
  { x: 18, y: 10, image: '/img/category_sights_neg.png',   visible: false, color: '#F9B666' }, // sights — yellow
  { x: 52, y: 22, image: '/img/category_art_neg.png',      visible: false, color: '#AF94D6' }, // art — violet
  { x: 84, y: 10, image: '/img/category_nature_neg.png',   visible: false, color: '#4047D2' }, // nature — blue
  { x: 75, y: 44, image: '/img/category_coffee_neg.png',   visible: false, color: '#AF94D6' }, // coffee — violet
  { x: 92, y: 70, image: '/img/category_bar_neg.png',      visible: false, color: '#4047D2' }, // bar — blue
  { x: 60, y: 88, image: '/img/category_food_neg.png',     visible: false, color: '#4047D2' }, // food — blue
  { x: 28, y: 92, image: '/img/category_shopping_neg.png', visible: false, color: '#FA634B' }, // shopping — orange
  { x: 22, y: 70, image: '/img/category_activity_neg.png', visible: false, color: '#FA634B' }, // activity — orange
  { x: 8,  y: 40, image: '/img/category_sports.png',       visible: false, color: '#F9B666' }, // sports — yellow
])

// Actual pixel dimensions of the hero — updated by ResizeObserver
const svgW = ref(1)
const svgH = ref(1)
let resizeObserver = null

// Convert % position to actual pixels for pixel-accurate dash sizing
function px(poi) {
  return { x: poi.x * svgW.value / 100, y: poi.y * svgH.value / 100 }
}

function getPathD(from, to) {
  const f = px(pois[from])
  const t = px(pois[to])
  return `M ${f.x} ${f.y} L ${t.x} ${t.y}`
}

// Geometry for the growing mask rect on the traveling line
const travelFromPx = computed(() => px(pois[travelingFrom.value]))
const travelToPx = computed(() => px(pois[travelingTo.value]))
const travelLineLength = computed(() => {
  const f = travelFromPx.value, t = travelToPx.value
  return Math.sqrt((t.x - f.x) ** 2 + (t.y - f.y) ** 2)
})
const travelLineAngle = computed(() => {
  const f = travelFromPx.value, t = travelToPx.value
  return Math.atan2(t.y - f.y, t.x - f.x) * 180 / Math.PI
})

// Auto-cycling animation state — sliding window of TRAIL_SIZE icons
const TRAIL_SIZE = 3

const travelingFrom = ref(0)
const travelingTo = ref(1)
const lineVisible = ref(false)
const bubbleVisible = ref(false)
const travelCycleKey = ref(0)

// Committed (persistent) lines between icons
const completedLines = reactive([])
let lineIdCounter = 0

// History of poi indices in the current visible window
const iconHistory = ref([])

// Drop color interpolates between source and destination color as it travels
const bubbleColor = ref('#4047D2')

function hexToRgb(hex) {
  return [parseInt(hex.slice(1,3),16), parseInt(hex.slice(3,5),16), parseInt(hex.slice(5,7),16)]
}
function lerpColor(a, b, t) {
  const [r1,g1,b1] = hexToRgb(a), [r2,g2,b2] = hexToRgb(b)
  return `rgb(${Math.round(r1+(r2-r1)*t)},${Math.round(g1+(g2-g1)*t)},${Math.round(b1+(b2-b1)*t)})`
}

// Bubble position + organic shape — driven by rAF, deforms with velocity
const bubbleX = ref(0)
const bubbleY = ref(0)
const bubblePath = ref('')
let bubbleRaf = null
let bubbleStartTime = null
const LINE_DUR = 1100  // ms — line draws (app "calculates" the route)
const BUBBLE_DUR = 1600 // ms — bubble travels (user's journey along the drawn line)

function easeInOut(t) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
}

// Build organic drop path. stretch=0: compact blob; stretch=1: pulled-gum elongation.
// Head (front, in +x direction) is a semicircle of headR.
// Tail extends behind in -x direction, stretching and thinning with velocity.
function buildBubblePath(stretch) {
  const headR = 14
  const tailLen = headR + stretch * 32   // 14 (compact) → 46 (max stretch)
  const bodyW = headR                    // max half-width at head
  const tailW = bodyW * (0.07 + (1 - stretch) * 0.45) // thin thread when fast, thick when slow

  const cp1x = -(tailLen * 0.88)
  const cp2x = -(headR * 0.5)
  return [
    `M ${-tailLen} 0`,
    `C ${cp1x} ${tailW}, ${cp2x} ${bodyW}, 0 ${bodyW}`,
    `A ${headR} ${headR} 0 0 0 0 ${-bodyW}`,
    `C ${cp2x} ${-bodyW}, ${cp1x} ${-tailW}, ${-tailLen} 0`,
    'Z'
  ].join(' ')
}

function animateBubble(timestamp) {
  if (!bubbleVisible.value) return
  if (bubbleStartTime === null) bubbleStartTime = timestamp
  const elapsed = timestamp - bubbleStartTime
  const rawT = Math.min(elapsed / BUBBLE_DUR, 1)
  const progress = easeInOut(rawT)
  const f = px(pois[travelingFrom.value])
  const t = px(pois[travelingTo.value])
  // Offset start to icon edge so drop appears right where the line exits the icon,
  // not from underneath it (icon is w-12 = 48px, radius ≈ 24px + 2px gap = 26px)
  const dx = t.x - f.x
  const dy = t.y - f.y
  const dist = Math.sqrt(dx * dx + dy * dy)
  const ux = dx / dist
  const uy = dy / dist
  const ICON_R = 26
  const sx = f.x + ux * ICON_R
  const sy = f.y + uy * ICON_R
  bubbleX.value = sx + (t.x - sx) * progress
  bubbleY.value = sy + (t.y - sy) * progress
  // Speed is derivative of easeInOut, normalized to 0–1 (peaks at midpoint)
  const speed = rawT < 0.5 ? 4 * rawT : 4 - 4 * rawT
  bubblePath.value = buildBubblePath(speed / 2)
  bubbleColor.value = lerpColor(pois[travelingFrom.value].color, pois[travelingTo.value].color, progress)
  if (rawT < 1) {
    bubbleRaf = requestAnimationFrame(animateBubble)
  }
}

// Bloom circles — filled bubbles that expand from icon center on arrival
const blooms = reactive([])
let bloomIdCounter = 0

function triggerBloom(poiIdx) {
  const p = px(pois[poiIdx])
  const bloom = { id: bloomIdCounter++, x: p.x, y: p.y, color: pois[poiIdx].color }
  blooms.push(bloom)
  setTimeout(() => {
    const i = blooms.indexOf(bloom)
    if (i > -1) blooms.splice(i, 1)
  }, 1000) // remove after 0.9s animation + buffer
}

let cycleTimers = []
let fadeTimers = [] // separate — not cleared on cycle reset

function clearCycleTimers() {
  cycleTimers.forEach(t => clearTimeout(t))
  cycleTimers = []
}

function runCycle() {
  clearCycleTimers()
  if (bubbleRaf) { cancelAnimationFrame(bubbleRaf); bubbleRaf = null }
  bubbleVisible.value = false
  lineVisible.value = false
  bubbleStartTime = null

  const from = travelingFrom.value
  const to = travelingTo.value

  if (!pois[from].visible) pois[from].visible = true

  // T+80ms: line draws — app calculates the route
  cycleTimers.push(setTimeout(() => {
    lineVisible.value = true
  }, 80))

  // T+(80+LINE_DUR)ms: route calculated — commit line, bubble departs after brief pause
  const lineEnd = 80 + LINE_DUR
  cycleTimers.push(setTimeout(() => {
    lineVisible.value = false
    completedLines.push({ id: lineIdCounter++, from, to, opacity: 1, color: pois[to].color })
  }, lineEnd))

  // T+(lineEnd+100)ms: user departs on the journey
  const bubbleStart = lineEnd + 100
  cycleTimers.push(setTimeout(() => {
    bubblePath.value = buildBubblePath(0)
    bubbleVisible.value = true
    bubbleStartTime = null
    bubbleRaf = requestAnimationFrame(animateBubble)
  }, bubbleStart))

  // T+(bubbleStart+BUBBLE_DUR)ms: user arrives — destination discovered, bloom!
  const bubbleEnd = bubbleStart + BUBBLE_DUR
  cycleTimers.push(setTimeout(() => {
    bubbleVisible.value = false
    pois[to].visible = true
    triggerBloom(to)

    iconHistory.value.push(to)

    // If window is full, fade out oldest icon and its outgoing line
    if (iconHistory.value.length > TRAIL_SIZE) {
      const oldestIcon = iconHistory.value[0]
      const secondIcon = iconHistory.value[1]
      iconHistory.value.shift()

      pois[oldestIcon].visible = false

      const oldLine = completedLines.find(l => l.from === oldestIcon && l.to === secondIcon)
      if (oldLine) {
        oldLine.opacity = 0
        fadeTimers.push(setTimeout(() => {
          const i = completedLines.indexOf(oldLine)
          if (i > -1) completedLines.splice(i, 1)
        }, 800))
      }
    }
  }, bubbleEnd))

  // T+(bubbleEnd+320)ms: advance to next pair
  cycleTimers.push(setTimeout(() => {
    travelingFrom.value = to
    travelingTo.value = (to + 1) % pois.length
    travelCycleKey.value++
    runCycle()
  }, bubbleEnd + 320))
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

  // Observe the exact wrapper that both the SVG and icon % positions share
  resizeObserver = new ResizeObserver(([entry]) => {
    svgW.value = entry.contentRect.width
    svgH.value = entry.contentRect.height
  })
  resizeObserver.observe(poiWrapEl.value)
  svgW.value = poiWrapEl.value.offsetWidth
  svgH.value = poiWrapEl.value.offsetHeight

  // Show first icon immediately with a bloom, then start cycling after bloom contracts
  pois[0].visible = true
  triggerBloom(0)
  iconHistory.value.push(0)
  setTimeout(() => runCycle(), 1200)
})

onUnmounted(() => {
  if (animFrame) cancelAnimationFrame(animFrame)
  if (bubbleRaf) cancelAnimationFrame(bubbleRaf)
  window.removeEventListener('scroll', onScrollHero)
  clearCycleTimers()
  fadeTimers.forEach(t => clearTimeout(t))
  resizeObserver?.disconnect()
})
</script>
