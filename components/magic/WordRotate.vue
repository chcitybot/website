<template>
  <span class="inline-block overflow-hidden align-bottom">
    <Transition name="word-rotate" mode="out-in">
      <span
        v-if="index >= 0"
        :key="index"
        class="inline-block transition-colors duration-200"
        :style="colors?.[index] ? { color: colors[index] } : {}"
      >{{ words[index] }}</span>
    </Transition>
  </span>
</template>

<script setup>
const props = defineProps({
  words: { type: Array, required: true },
  duration: { type: Number, default: 2500 },
  colors: { type: Array, default: null },
  manualIndex: { type: Number, default: null },
})

const internalIndex = ref(0)
const index = computed(() => {
  if (props.manualIndex === null) return internalIndex.value
  if (props.manualIndex < 0) return -1
  return props.manualIndex % props.words.length
})

let interval = null

onMounted(() => {
  if (props.manualIndex === null) {
    interval = setInterval(() => {
      internalIndex.value = (internalIndex.value + 1) % props.words.length
    }, props.duration)
  }
})

onUnmounted(() => {
  clearInterval(interval)
})
</script>

<style scoped>
.word-rotate-enter-active,
.word-rotate-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.word-rotate-enter-from {
  opacity: 0;
  transform: translateY(-16px);
}
.word-rotate-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.word-rotate-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.word-rotate-leave-to {
  opacity: 0;
  transform: translateY(16px);
}
</style>
