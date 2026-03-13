<template>
  <div class="relative bg-white py-40 lg:py-56 font-main">
    <!-- Pulsating orb -->
    <div class="orb" />
    <!-- Content -->
    <div class="relative z-10 max-w-2xl mx-auto px-6 text-center">
      <h2 class="font-heading text-display-sm lg:text-display text-gray-900 mb-6">
        {{ $t("app_bridge_title") }}
      </h2>
      <p class="text-paragraph text-bot_gray">
        {{ $t("app_bridge_body") }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.orb {
  position: absolute;
  width: 600px;
  height: 600px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: radial-gradient(circle, rgba(250, 99, 75, 0.55) 0%, rgba(250, 99, 75, 0.15) 45%, transparent 70%);
  border-radius: 50%;
  filter: blur(60px);
  animation: orb-pulse 4s ease-in-out infinite;
  pointer-events: none;
}

@keyframes orb-pulse {
  0%, 100% { transform: translate(-50%, -50%) scale(1);    opacity: 0.85; }
  50%       { transform: translate(-50%, -50%) scale(1.35); opacity: 1; }
}
</style>
