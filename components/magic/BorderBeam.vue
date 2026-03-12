<template>
  <div class="pointer-events-none absolute inset-0 rounded-[inherit]" :style="maskStyle">
    <div class="border-beam-particle absolute" :style="particleStyle" />
  </div>
</template>

<script setup>
const props = defineProps({
  size: { type: Number, default: 50 },
  duration: { type: Number, default: 6 },
  delay: { type: Number, default: 0 },
  colorFrom: { type: String, default: '#ffaa40' },
  colorTo: { type: String, default: '#9c40ff' },
  borderWidth: { type: Number, default: 1 },
  reverse: { type: Boolean, default: false },
})

const maskStyle = computed(() => ({
  border: `${props.borderWidth}px solid transparent`,
  WebkitMask: 'linear-gradient(transparent, transparent), linear-gradient(#000, #000)',
  WebkitMaskComposite: 'destination-in',
  mask: 'linear-gradient(transparent, transparent), linear-gradient(#000, #000)',
  maskComposite: 'intersect',
  WebkitMaskClip: 'padding-box, border-box',
  maskClip: 'padding-box, border-box',
}))

const particleStyle = computed(() => ({
  width: `${props.size}px`,
  aspectRatio: '1',
  background: `linear-gradient(to left, ${props.colorFrom}, ${props.colorTo}, transparent)`,
  offsetPath: `rect(0 auto auto 0 round ${props.size}px)`,
  animation: `border-beam-travel ${props.duration}s linear ${-Math.abs(props.delay)}s infinite ${props.reverse ? 'reverse' : 'normal'}`,
}))
</script>

<style scoped>
@keyframes border-beam-travel {
  from { offset-distance: 0%; }
  to   { offset-distance: 100%; }
}
</style>
