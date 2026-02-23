<template>
  <div class="min-h-screen font-main relative flex items-center justify-center bg-bot_bg overflow-hidden">
    <!-- Decorative orb bubbles -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute -top-[15%] -left-[10%] w-[550px] h-[550px] rounded-full opacity-75" style="background: radial-gradient(circle, #FA634B 0%, transparent 55%); filter: blur(40px)"></div>
      <div class="absolute -bottom-[20%] -right-[10%] w-[600px] h-[600px] rounded-full opacity-80" style="background: radial-gradient(circle, #4047D2 0%, transparent 55%); filter: blur(40px)"></div>
      <div class="absolute top-[40%] right-[20%] w-[300px] h-[300px] rounded-full opacity-60" style="background: radial-gradient(circle, #F9B666 0%, transparent 55%); filter: blur(50px)"></div>
    </div>

    <div class="relative z-10 text-center px-6">
      <h1 class="font-heading text-display-sm text-gray-900 mb-3">
        {{ $t("download") }}
      </h1>
      <p class="text-paragraph text-bot_gray">
        {{ $t("download_subtitle") }}
      </p>

      <!-- Content inside brand bubble -->
      <div class="mt-12 relative">
        <div class="absolute inset-0 -m-8 rounded-full opacity-15" style="background: radial-gradient(circle, #FA634B 0%, transparent 55%); filter: blur(50px)"></div>
        <div class="relative max-w-2xl mx-auto">
          <p class="text-lg lg:text-xl text-gray-700 leading-relaxed mb-8">
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
  </div>
</template>

<script lang="ts" setup>
const route = useRoute()
if (route.path === "/download.html") {
  navigateTo("/download", { redirectCode: 301 })
}
</script>
