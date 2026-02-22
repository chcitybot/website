<template>
  <div class="flex items-center justify-center min-h-screen bg-white font-main pt-20">
    <div class="text-center">
      <h1 class="font-heading text-display-sm text-gray-900 mb-8 px-6">
        {{ $t("app_download_title") }}
      </h1>
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
</template>

<script lang="ts" setup>
const route = useRoute()
if (route.path === "/download.html") {
  navigateTo("/download", { redirectCode: 301 })
}
</script>
