<template>
  <footer class="bg-gray-950 text-gray-400 font-main" aria-labelledby="footer-heading">
    <h2 id="footer-heading" class="sr-only">Footer</h2>

    <!-- Gradient line separator -->
    <div class="h-px bg-gradient-to-r from-transparent via-bot_light_blue/40 to-transparent"></div>

    <div class="mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-20">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
        <!-- Brand column -->
        <div class="space-y-6">
          <SvgBot class="h-12 w-12" />
          <p class="text-sm leading-relaxed text-gray-400 max-w-xs">
            {{ $t("footer_slogan") }}
            <SvgSwissFlag class="h-4 w-4 inline-block ml-1 align-middle" />
          </p>
        </div>

        <!-- Navigation column -->
        <div>
          <h3 class="text-sm font-semibold text-white tracking-wide uppercase mb-6">Navigation</h3>
          <ul class="space-y-3">
            <li>
              <NuxtLink :to="localePath('/')" class="text-sm text-gray-400 hover:text-white transition-colors duration-200">Home</NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath('/team')" class="text-sm text-gray-400 hover:text-white transition-colors duration-200">{{ $t("team") }}</NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath('/blog')" class="text-sm text-gray-400 hover:text-white transition-colors duration-200">{{ $t("insights") }}</NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath('/contact')" class="text-sm text-gray-400 hover:text-white transition-colors duration-200">{{ $t("contact") }}</NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Contact column -->
        <div>
          <h3 class="text-sm font-semibold text-white tracking-wide uppercase mb-6">{{ $t("contact") }}</h3>
          <address class="not-italic space-y-3">
            <p class="text-sm text-gray-400">CityBot GmbH</p>
            <p class="text-sm text-gray-400">Berninaplatz 1<br>8050 Zürich</p>
            <a href="mailto:contact.citybot@gmail.com" class="text-sm text-gray-400 hover:text-white transition-colors duration-200 block">
              contact.citybot@gmail.com
            </a>
          </address>
        </div>
      </div>

      <!-- Bottom bar -->
      <div class="mt-16 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p class="text-xs text-gray-500">
          &copy; {{ new Date().getFullYear() }} CityBot GmbH. All rights reserved.
        </p>
        <NuxtLink :to="localePath('/privacy')" class="text-xs text-gray-500 hover:text-gray-300 transition-colors duration-200">
          Privacy Policy
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>

<script setup>
const localePath = useLocalePath()
</script>
