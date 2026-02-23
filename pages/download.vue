<template>
  <div class="min-h-screen font-main relative flex items-center justify-center">
    <img
      src="/img/ai_in_tourism.jpg"
      alt="AI in Tourism"
      class="absolute inset-0 w-full h-full object-cover object-top"
    />
    <div class="absolute inset-0 bg-black/30"></div>

    <div class="relative z-10 text-center px-6">
      <h1 class="font-heading text-display-sm text-white mb-3 drop-shadow-lg">
        {{ $t("download") }}
      </h1>
      <p class="text-paragraph text-white/80 drop-shadow">
        {{ $t("download_subtitle") }}
      </p>

      <div class="mt-16 max-w-2xl mx-auto backdrop-blur-xl bg-white/15 border border-white/20 rounded-3xl p-8 lg:p-10 shadow-2xl">
        <p class="text-lg lg:text-xl text-white leading-relaxed mb-8">
          {{ $t("app_download_title") }}
        </p>
        <div class="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="https://play.google.com/store/apps/details?id=ch.citybot.citybot"
            target="_blank"
            rel="noopener"
            class="hover:opacity-80 transition-opacity"
          >
            <SvgGooglePlayStore />
          </a>
          <a
            href="https://apps.apple.com/ch/app/citybot-zug/id6443655653"
            target="_blank"
            rel="noopener"
            class="hover:opacity-80 transition-opacity"
          >
            <SvgAppleAppStore />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute()
if (route.path === "/download.html") {
  navigateTo("/download", { redirectCode: 301 })
}
</script>
