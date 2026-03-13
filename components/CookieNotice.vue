<template>
  <Transition name="cookie-slide">
    <div
      v-if="visible"
      class="fixed bottom-6 right-6 z-50 w-full max-w-sm px-4"
    >
      <div class="bg-white rounded-2xl shadow-xl border border-gray-100 px-5 py-4 flex flex-col gap-3">
        <div class="flex items-center gap-2">
          <span>🍪</span>
          <p class="font-semibold text-gray-900 text-sm">{{ $t('cookie_title') }}</p>
        </div>
        <p class="text-sm text-gray-500">{{ $t('cookie_message') }}</p>
        <button
          @click="dismiss"
          class="self-end bg-bot_dark_blue hover:bg-bot_light_blue text-white text-sm font-medium px-4 py-1.5 rounded-lg transition-colors duration-200 cursor-pointer"
        >
          {{ $t('cookie_dismiss') }}
        </button>
      </div>
    </div>
  </Transition>
</template>

<script setup>
const visible = ref(false)

onMounted(() => {
  if (!sessionStorage.getItem('cookie-notice-dismissed')) {
    setTimeout(() => { visible.value = true }, 1200)
  }
})

function dismiss() {
  visible.value = false
  sessionStorage.setItem('cookie-notice-dismissed', '1')
}
</script>

<style scoped>
.cookie-slide-enter-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}
.cookie-slide-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.cookie-slide-enter-from {
  opacity: 0;
  transform: translateY(16px);
}
.cookie-slide-leave-to {
  opacity: 0;
  transform: translateY(16px);
}
</style>
