<template>
  <div class="flex items-center justify-center h-screen bg-gray-100">
    <div class="text-center">
      <h1 class="text-4xl p-4 mb-4 font-bold text-gray-800">
        {{ $t("app_download_title") }}
      </h1>
      <div class="flex flex-col lg:flex-row justify-center items-center">
        <a
          class="mx-auto"
          href="https://play.google.com/store/apps/details?id=ch.citybot.citybot"
          target="_blank"
        >
          <svgGooglePlayStore class="m-4" />
        </a>
        <a
          class="mx-auto"
          href="https://apps.apple.com/ch/app/citybot-zug/id6443655653"
          target="_blank"
        >
          <svgAppleAppStore class="m-4" />
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();

if (route.path === "/download.html") {
  navigateTo("/download", { redirectCode: 301 }); // Permanent Redirect
}
</script>

<style></style>
