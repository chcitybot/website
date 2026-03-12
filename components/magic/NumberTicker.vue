<template>
  <span ref="el">{{ display }}</span>
</template>

<script setup>
const props = defineProps({
  value: { type: Number, required: true },
  startValue: { type: Number, default: 0 },
  direction: { type: String, default: 'up' },
  delay: { type: Number, default: 0 },
  decimalPlaces: { type: Number, default: 0 },
})

const el = ref(null)

const fromValue = props.direction === 'down' ? props.value : props.startValue
const targetValue = props.direction === 'down' ? props.startValue : props.value

function fmt(val) {
  return Intl.NumberFormat('en-US', {
    minimumFractionDigits: props.decimalPlaces,
    maximumFractionDigits: props.decimalPlaces,
  }).format(Number(val.toFixed(props.decimalPlaces)))
}

const display = ref(fmt(fromValue))

// Spring state — normalized to [0, 1] range so it's independent of value scale
let t = 0       // spring position (0 = start, 1 = target)
let v = 0       // spring velocity
let rafId = null
let lastTs = null
let started = false

const OMEGA = 8   // natural frequency: controls overall speed
const ZETA = 0.9  // damping ratio: 0.9 = smooth with minimal overshoot

function step(timestamp) {
  if (lastTs === null) lastTs = timestamp
  const dt = Math.min((timestamp - lastTs) / 1000, 0.05)
  lastTs = timestamp

  // Spring ODE: ẍ = ω²(1 − t) − 2ζω·v
  const force = OMEGA * OMEGA * (1 - t) - 2 * ZETA * OMEGA * v
  v += force * dt
  t += v * dt

  const clamped = Math.min(Math.max(t, 0), 1)
  display.value = fmt(fromValue + (targetValue - fromValue) * clamped)

  if (Math.abs(1 - t) > 0.0005 || Math.abs(v) > 0.0005) {
    rafId = requestAnimationFrame(step)
  } else {
    display.value = fmt(targetValue)
  }
}

function start() {
  if (props.delay > 0) {
    setTimeout(() => { rafId = requestAnimationFrame(step) }, props.delay * 1000)
  } else {
    rafId = requestAnimationFrame(step)
  }
}

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting && !started) {
        started = true
        observer.disconnect()
        start()
      }
    },
    { threshold: 0 }
  )
  observer.observe(el.value)
})

onUnmounted(() => {
  if (rafId) cancelAnimationFrame(rafId)
})
</script>
