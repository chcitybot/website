<template>
  <div class="relative bg-white pt-40 pb-20 lg:pt-56 lg:pb-24 font-main overflow-hidden">
    <!-- Concentric pulse rings -->
    <div class="ring ring-1" />
    <div class="ring ring-2" />
    <div class="ring ring-3" />
    <div class="ring ring-4" />
    <!-- Core orb -->
    <div class="orb" />
    <!-- Content -->
    <div class="relative z-10 max-w-2xl mx-auto px-6 text-center">
      <h2 class="font-heading text-display-sm lg:text-display text-bot_dark_blue mb-6">
        {{ $t("app_bridge_title") }}
      </h2>
      <p class="text-paragraph text-bot_dark_blue/70">
        {{ $t("app_bridge_body") }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.orb {
  position: absolute;
  width: 320px;
  height: 320px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: radial-gradient(circle, rgba(250, 99, 75, 0.9) 0%, rgba(250, 99, 75, 0.4) 50%, transparent 70%);
  border-radius: 50%;
  filter: blur(48px);
  animation: orb-pulse 3.5s ease-in-out infinite;
  pointer-events: none;
}

.ring {
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  border: 1px solid rgba(64, 71, 210, 0.2);
  transform: translate(-50%, -50%) scale(0);
  animation: ring-expand 4s ease-out infinite;
  pointer-events: none;
}

.ring-1 { width: 240px; height: 240px; animation-delay: 0s; }
.ring-2 { width: 440px; height: 440px; animation-delay: 0.8s; }
.ring-3 { width: 660px; height: 660px; animation-delay: 1.6s; }
.ring-4 { width: 900px; height: 900px; animation-delay: 2.4s; }

@keyframes orb-pulse {
  0%, 100% { transform: translate(-50%, -50%) scale(1);    opacity: 0.8; }
  50%       { transform: translate(-50%, -50%) scale(1.2);  opacity: 1; }
}

@keyframes ring-expand {
  0%   { transform: translate(-50%, -50%) scale(0);   opacity: 0.7; }
  80%  { opacity: 0.1; }
  100% { transform: translate(-50%, -50%) scale(1);   opacity: 0; }
}
</style>
