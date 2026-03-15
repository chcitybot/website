<template>
  <section class="overflow-hidden bg-bot_bg">
    <!-- Full-viewport hero -->
    <div
      ref="heroEl"
      class="min-h-screen flex flex-col items-center justify-center px-6 lg:px-8 relative"
    >
      <!-- Animated gradient orbs (pulsate in place) — hidden on small screens for performance -->
      <div class="hidden sm:block absolute inset-0 overflow-hidden pointer-events-none">
        <div
          v-for="i in 5"
          :key="i"
          :class="`hero-orb hero-orb-${i}`"
        ></div>
      </div>

      <!-- Floating POI icons with connecting line -->
      <div ref="poiWrapEl" class="absolute inset-0 overflow-hidden pointer-events-none z-[2]" :style="{ opacity: iconsOpacity, transition: 'opacity 0.2s ease' }">
        <!-- SVG lines: persistent committed lines + one traveling line -->
        <!-- viewBox matches actual pixels so stroke-dasharray is always in real px -->
        <svg
          class="absolute inset-0 w-full h-full"
          :viewBox="`0 0 ${svgW} ${svgH}`"
        >
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

          <!-- Firework particles -->
          <circle
            v-for="p in fireworkParticles"
            :key="p.id"
            :cx="p.x"
            :cy="p.y"
            :r="p.r"
            :fill="p.color"
            :fill-opacity="p.opacity"
          />

          <!-- Traveling bubble: organic drop — takes destination color -->
          <path
            v-if="bubbleVisible"
            :transform="`translate(${bubbleX}, ${bubbleY}) rotate(${travelLineAngle}) scale(${bubbleScale})`"
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
          <SvgBot ref="botIconEl" class="h-32 w-32 lg:h-44 lg:w-44" />
        </div>

        <h1 class="font-heading text-display-xs sm:text-display-sm lg:text-display text-gray-900 opacity-0 animate-fade-up-delay-1">
          {{ $t("home_hero_title_prefix") }}<br>
          <MagicWordRotate
            :words="heroRotatingPhrases"
            :colors="heroRotatingColors"
            :manual-index="wordIndex"
            class="text-bot_dark_blue"
          />
        </h1>

        <div class="mt-28 lg:mt-36 flex flex-col items-center gap-4 opacity-0 animate-fade-up-delay-2">
          <NuxtLink
            :to="localePath('/download')"
            class="inline-flex items-center px-8 py-4 rounded-full bg-bot_red text-white text-paragraph font-semibold hover:bg-bot_red/90 transition-all duration-200 shadow-lg shadow-bot_red/25 hover:shadow-xl hover:shadow-bot_red/30 hover:-translate-y-0.5"
          >
            {{ $t("cta_app_test") }}
          </NuxtLink>
          <NuxtLink
            :to="localePath('/contact')"
            class="inline-flex items-center px-8 py-4 rounded-full border-2 border-bot_dark_blue text-bot_dark_blue text-paragraph font-semibold hover:bg-bot_dark_blue hover:text-white transition-all duration-200 hover:-translate-y-0.5"
          >
            {{ $t("cta_become_partner") }}
          </NuxtLink>
        </div>
      </div>

      <!-- Scroll indicator -->
      <button
        @click="$el.closest('section').querySelector('.group\\/strip')?.scrollIntoView({ behavior: 'smooth', block: 'center' })"
        class="absolute bottom-8 z-10 animate-fade-up-delay-3 transition-all duration-500 group/chevron cursor-pointer"
        :style="{ opacity: scrollIndicatorOpacity, visibility: scrollIndicatorOpacity === 0 ? 'hidden' : 'visible' }"
        aria-label="Scroll to screenshots"
      >
        <div class="animate-bounce w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 text-bot_gray/40 bg-transparent group-hover/chevron:text-bot_dark_blue group-hover/chevron:bg-white group-hover/chevron:shadow-md">
          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 14l-7 7m0 0l-7-7" />
          </svg>
        </div>
      </button>
    </div>

    <!-- Phone screenshots strip -->
    <div
      ref="stripContainer"
      class="relative pb-12 lg:pb-16 group/strip"
      :style="{ marginTop: `${stripPullUp}px` }"
    >
      <!-- Bottom fade to white -->
      <div class="absolute inset-x-0 bottom-0 h-40 z-10 pointer-events-none" style="background: linear-gradient(to top, #ffffff, transparent)" />
      <!-- Left arrow -->
      <button
        @click="nudge(300)"
        class="absolute left-2 lg:left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 text-bot_gray/40 bg-transparent group-hover/strip:text-bot_gray group-hover/strip:bg-white/50 group-hover/strip:shadow-sm hover:!text-bot_dark_blue hover:!bg-white hover:!shadow-md"
        aria-label="Scroll left"
      >
        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <!-- Right arrow -->
      <button
        @click="nudge(-300)"
        class="absolute right-2 lg:right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 text-bot_gray/40 bg-transparent group-hover/strip:text-bot_gray group-hover/strip:bg-white/50 group-hover/strip:shadow-sm hover:!text-bot_dark_blue hover:!bg-white hover:!shadow-md"
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
const { locale } = useI18n()
const localePath = useLocalePath()

const heroRotatingPhrases = computed(() => {
  switch (locale.value) {
    case 'de': return [
      'CityBot.',
      'lokal erleben.',
      'Inhalte verwalten.',
      'Besucher begeistern.',
      'Destinationen stärken.',
      'Neugier wecken.',
      'frei erkunden.',
      'einfach du sein.',
    ]
    case 'ch': return [
      'CityBot.',
      'lokal erläbe.',
      'Inhalt verwalte.',
      'Besucher begeischtre.',
      'Destinatione stärke.',
      'Nüügier wecke.',
      'frei entdecke.',
      'eifach du si.',
    ]
    case 'fr': return [
      'CityBot.',
      'vivre local.',
      'gérer le contenu.',
      'captiver les visiteurs.',
      'valoriser les destinations.',
      'éveiller la curiosité.',
      'explorer librement.',
      'être soi-même.',
    ]
    case 'it': return [
      'CityBot.',
      'vivere locale.',
      'gestire i contenuti.',
      'affascinare i visitatori.',
      'valorizzare le destinazioni.',
      'destare curiosità.',
      'esplorare liberamente.',
      'essere te stesso.',
    ]
    default: return [
      'CityBot.',
      'feel local.',
      'manage content.',
      'captivate visitors.',
      'empower destinations.',
      'spark curiosity.',
      'explore freely.',
      'be yourself.',
    ]
  }
})

const heroRotatingColors = computed(() => {
  const len = heroRotatingPhrases.value.length
  return Array.from({ length: len }, (_, i) => i === len - 1 ? '#FA634B' : null)
})

const wordIndex = ref(-1)

const heroEl = ref(null)
const botIconEl = ref(null)
const poiWrapEl = ref(null)
const stripEl = ref(null)
const offsetX = ref(0)
const autoSpeed = 0.6
let animFrame = null
let targetX = 0

// Scroll-driven: pull screenshots up to close the gap
const stripPullUp = ref(0)
const scrollIndicatorOpacity = ref(1)
const iconsOpacity = ref(1)

// Virtual index representing the CityBot logo center
const CENTER_IDX = -1
const CITYBOT_COLOR = '#FA634B'

// POI icons — strict clockwise from top-right, ending at yellow sports before returning to center
const pois = reactive([
  { x: 84, y: 10, image: '/img/category_nature_neg.png',   visible: false, color: '#4047D2' }, // top-right → start
  { x: 75, y: 44, image: '/img/category_coffee_neg.png',   visible: false, color: '#AF94D6' }, // right-mid
  { x: 92, y: 70, image: '/img/category_bar_neg.png',      visible: false, color: '#4047D2' }, // right-lower
  { x: 60, y: 88, image: '/img/category_food_neg.png',     visible: false, color: '#4047D2' }, // bottom-right
  { x: 28, y: 92, image: '/img/category_shopping_neg.png', visible: false, color: '#FA634B' }, // bottom-left
  { x: 22, y: 70, image: '/img/category_activity_neg.png', visible: false, color: '#FA634B' }, // left-lower
  { x: 8,  y: 40, image: '/img/category_sports.png',       visible: false, color: '#F9B666' }, // left-mid → last yellow before center
])

// Actual pixel dimensions of the hero — updated by ResizeObserver
const svgW = ref(1)
const svgH = ref(1)
let resizeObserver = null

// Convert % position to actual pixels
function px(poi) {
  return { x: poi.x * svgW.value / 100, y: poi.y * svgH.value / 100 }
}

// Get pixel position for a POI index or CENTER_IDX (CityBot logo)
function getPos(idx) {
  if (idx === CENTER_IDX) {
    const el = botIconEl.value?.$el || botIconEl.value
    if (el && poiWrapEl.value) {
      const ir = el.getBoundingClientRect()
      const wr = poiWrapEl.value.getBoundingClientRect()
      return { x: ir.left + ir.width / 2 - wr.left, y: ir.top + ir.height / 2 - wr.top }
    }
    return { x: svgW.value / 2, y: svgH.value * 0.4 }
  }
  return px(pois[idx])
}

function getColor(idx) {
  if (idx === CENTER_IDX) return CITYBOT_COLOR
  return pois[idx].color
}

function getCenterRadius() {
  const el = botIconEl.value?.$el || botIconEl.value
  if (!el) return 72
  const rect = el.getBoundingClientRect()
  return Math.max(rect.width, rect.height) / 2
}

// Bubble travel angle (used for drop rotation)
const travelLineAngle = computed(() => {
  const f = getPos(travelingFrom.value), t = getPos(travelingTo.value)
  return Math.atan2(t.y - f.y, t.x - f.x) * 180 / Math.PI
})

// Auto-cycling animation state — sliding window of TRAIL_SIZE icons
const TRAIL_SIZE = 3

const travelingFrom = ref(CENTER_IDX)
const travelingTo = ref(0)
const bubbleVisible = ref(false)
const travelCycleKey = ref(0)

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
const bubbleScale = ref(0)
let bubbleRaf = null
let bubbleStartTime = null
const BUBBLE_DUR = 1100

function easeInOut(t) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
}

function buildBubblePath(stretch) {
  const headR = 14
  const tailLen = headR + stretch * 32
  const bodyW = headR
  const tailW = bodyW * (0.07 + (1 - stretch) * 0.45)
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
  const f = getPos(travelingFrom.value)
  const t = getPos(travelingTo.value)
  const dx = t.x - f.x
  const dy = t.y - f.y
  const dist = Math.sqrt(dx * dx + dy * dy)
  const ux = dx / dist
  const uy = dy / dist
  const fromCenter = travelingFrom.value === CENTER_IDX
  const toCenter = travelingTo.value === CENTER_IDX
  const ICON_R = fromCenter ? getCenterRadius() : 26
  const sx = f.x + ux * ICON_R
  const sy = f.y + uy * ICON_R
  // Stop at logo edge on return, not at logo center
  const centerR = toCenter ? getCenterRadius() : 0
  const ex = t.x - ux * centerR
  const ey = t.y - uy * centerR
  bubbleX.value = sx + (ex - sx) * progress
  bubbleY.value = sy + (ey - sy) * progress
  const speed = rawT < 0.5 ? 4 * rawT : 4 - 4 * rawT
  bubblePath.value = buildBubblePath(speed / 2)
  // Grow from dot on departure; shrink to dot on return to center
  bubbleScale.value = toCenter
    ? Math.max(0, 1 - Math.max(0, rawT - 0.6) / 0.4)
    : Math.min(rawT * 6, 1)
  bubbleColor.value = lerpColor(getColor(travelingFrom.value), getColor(travelingTo.value), progress)
  if (rawT < 1) {
    bubbleRaf = requestAnimationFrame(animateBubble)
  }
}

// Bloom circles
const blooms = reactive([])
let bloomIdCounter = 0

function triggerBloom(poiIdx) {
  const p = getPos(poiIdx)
  const bloom = { id: bloomIdCounter++, x: p.x, y: p.y, color: getColor(poiIdx) }
  blooms.push(bloom)
  setTimeout(() => {
    const i = blooms.indexOf(bloom)
    if (i > -1) blooms.splice(i, 1)
  }, 1000)
}

function triggerBloomAt(x, y, color) {
  const bloom = { id: bloomIdCounter++, x, y, color }
  blooms.push(bloom)
  setTimeout(() => {
    const i = blooms.indexOf(bloom)
    if (i > -1) blooms.splice(i, 1)
  }, 1000)
}

// Firework particles — subtle burst at CityBot logo
const fireworkParticles = reactive([])
let fireworkIdCounter = 0
let fireworkRaf = null
let fireworkStartTime = null
const FIREWORK_DUR = 750

function triggerFirework(cx, cy) {
  fireworkParticles.length = 0
  const PARTICLE_COUNT = 16
  const colors = ['#FA634B', '#4047D2', '#AF94D6', '#F9B666']
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const angle = (Math.PI * 2 * i) / PARTICLE_COUNT + (Math.random() - 0.5) * 0.4
    const dist = 50 + Math.random() * 70
    fireworkParticles.push({
      id: fireworkIdCounter++,
      startX: cx, startY: cy,
      x: cx, y: cy,
      endX: cx + Math.cos(angle) * dist,
      endY: cy + Math.sin(angle) * dist,
      color: colors[i % colors.length],
      r: 2.5 + Math.random() * 2.5,
      opacity: 0.7,
    })
  }
  fireworkStartTime = null
  fireworkRaf = requestAnimationFrame(animateFirework)
}

function animateFirework(timestamp) {
  if (fireworkStartTime === null) fireworkStartTime = timestamp
  const t = Math.min((timestamp - fireworkStartTime) / FIREWORK_DUR, 1)
  const ease = 1 - (1 - t) * (1 - t) // easeOut
  for (const p of fireworkParticles) {
    p.x = p.startX + (p.endX - p.startX) * ease
    p.y = p.startY + (p.endY - p.startY) * ease
    p.opacity = 0.7 * (1 - t)
    p.r = (2.5 + Math.random() * 0.3) * (1 - t * 0.4)
  }
  if (t < 1) {
    fireworkRaf = requestAnimationFrame(animateFirework)
  } else {
    fireworkParticles.length = 0
  }
}

let cycleTimers = []
let fadeTimers = []

function clearCycleTimers() {
  cycleTimers.forEach(t => clearTimeout(t))
  cycleTimers = []
}

// Fade out all remaining POIs
function fadeOutAll() {
  for (const poi of pois) poi.visible = false
  iconHistory.value = []
}

function runCycle() {
  clearCycleTimers()
  if (bubbleRaf) { cancelAnimationFrame(bubbleRaf); bubbleRaf = null }
  bubbleVisible.value = false
  bubbleStartTime = null

  const from = travelingFrom.value
  const to = travelingTo.value
  const isFromCenter = from === CENTER_IDX
  const isToCenter = to === CENTER_IDX

  // Make source POI visible (skip for center — it's the logo)
  if (!isFromCenter && !pois[from].visible) pois[from].visible = true

  // Bubble departs
  const bubbleStart = isFromCenter ? 650 : 50
  cycleTimers.push(setTimeout(() => {
    bubblePath.value = buildBubblePath(0)
    bubbleScale.value = 0
    bubbleVisible.value = true
    bubbleStartTime = null
    bubbleRaf = requestAnimationFrame(animateBubble)

    // Pulse from logo edge when departing from center
    if (isFromCenter) {
      const f = getPos(CENTER_IDX)
      const dest = getPos(to)
      const dx = dest.x - f.x, dy = dest.y - f.y
      const dist = Math.sqrt(dx * dx + dy * dy)
      const r = getCenterRadius()
      triggerBloomAt(f.x + dx / dist * r, f.y + dy / dist * r, CITYBOT_COLOR)
      // Animate in first word ("CityBot.") as bubble launches
      if (wordIndex.value < 0) wordIndex.value = 0
    }
  }, bubbleStart))

  // Bubble arrives
  const bubbleEnd = bubbleStart + BUBBLE_DUR
  cycleTimers.push(setTimeout(() => {
    bubbleVisible.value = false

    if (isToCenter) {
      // Arrived back at CityBot logo — absorption bloom, firework + "be yourself"
      const c = getPos(CENTER_IDX)
      if (!isFromCenter) {
        const p = getPos(from)
        const dx = c.x - p.x, dy = c.y - p.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        const r = getCenterRadius()
        const edgeX = c.x - dx / dist * r
        const edgeY = c.y - dy / dist * r
        triggerBloomAt(edgeX, edgeY, CITYBOT_COLOR)
        triggerFirework(edgeX, edgeY)
      }
      fadeOutAll()
    } else {
      // Normal POI arrival
      pois[to].visible = true
      triggerBloom(to)
      if (to === pois.length - 1) {
        // Last icon — show "be yourself.", firework fires on return to logo edge
        wordIndex.value = heroRotatingPhrases.value.length - 1
      } else {
        wordIndex.value = (wordIndex.value + 1) % (heroRotatingPhrases.value.length - 1)
      }
      iconHistory.value.push(to)

      // Sliding window: fade oldest icon
      if (iconHistory.value.length > TRAIL_SIZE) {
        const oldestIcon = iconHistory.value[0]
        iconHistory.value.shift()
        pois[oldestIcon].visible = false
      }
    }
  }, bubbleEnd))

  // Advance to next pair
  const pauseAfter = isToCenter ? 600 : 80 // longer pause after firework
  cycleTimers.push(setTimeout(() => {
    if (isToCenter) {
      // Restart: center → first POI; go directly to "CityBot." to avoid twitch
      travelingFrom.value = CENTER_IDX
      travelingTo.value = 0
      wordIndex.value = 0
    } else if (to === pois.length - 1) {
      // Last POI reached — next stop is center
      travelingFrom.value = to
      travelingTo.value = CENTER_IDX
    } else {
      travelingFrom.value = to
      travelingTo.value = to + 1
    }
    travelCycleKey.value++
    runCycle()
  }, bubbleEnd + pauseAfter))
}

function onScrollHero() {
  const scrollY = window.scrollY
  const vh = window.innerHeight
  const progress = Math.min(scrollY / vh, 1)
  const isMobile = window.innerWidth < 1024
  stripPullUp.value = -progress * vh * (isMobile ? 0.1 : 0.2)
  scrollIndicatorOpacity.value = Math.max(1 - scrollY / 20, 0)
  iconsOpacity.value = Math.max(0, 1 - Math.max(0, progress - 0.15) / 0.3)
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
  targetX -= autoSpeed
  wrapX()
  offsetX.value += (targetX - offsetX.value) * 0.08
  animFrame = requestAnimationFrame(tick)
}

function nudge(px) {
  targetX += px
}

onMounted(() => {
  animFrame = requestAnimationFrame(tick)
  window.addEventListener('scroll', onScrollHero, { passive: true })
  onScrollHero()

  resizeObserver = new ResizeObserver(([entry]) => {
    svgW.value = entry.contentRect.width
    svgH.value = entry.contentRect.height
  })
  resizeObserver.observe(poiWrapEl.value)
  svgW.value = poiWrapEl.value.offsetWidth
  svgH.value = poiWrapEl.value.offsetHeight

  // Start from CityBot logo — first cycle departs to POI 0
  travelingFrom.value = CENTER_IDX
  travelingTo.value = 0
  setTimeout(() => runCycle(), 500)
})

onUnmounted(() => {
  if (animFrame) cancelAnimationFrame(animFrame)
  if (bubbleRaf) cancelAnimationFrame(bubbleRaf)
  if (fireworkRaf) cancelAnimationFrame(fireworkRaf)
  window.removeEventListener('scroll', onScrollHero)
  clearCycleTimers()
  fadeTimers.forEach(t => clearTimeout(t))
  resizeObserver?.disconnect()
})
</script>
