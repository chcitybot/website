<template>
  <footer class="bg-bot_dark_blue text-white/80 font-main" aria-labelledby="footer-heading">
    <h2 id="footer-heading" class="sr-only">Footer</h2>

    <div class="mx-auto max-w-7xl px-6 lg:px-8 py-12 lg:py-16">
      <!-- 3-column grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
        <!-- Brand -->
        <div>
          <div class="flex items-center gap-3 mb-4">
            <SvgBot class="h-8 w-8 flex-shrink-0 text-white" />
            <span class="text-white font-semibold text-h3">CityBot</span>
          </div>
          <p class="text-sm text-white/60 leading-relaxed">
            {{ $t("footer_slogan") }}
            <SvgSwissFlag class="h-3.5 w-3.5 inline-block ml-1 align-middle" />
          </p>
        </div>

        <!-- Navigation -->
        <div>
          <h3 class="text-xs font-semibold text-white uppercase tracking-wider mb-4">Navigation</h3>
          <nav class="flex flex-col space-y-2.5">
            <NuxtLink :to="localePath('/')" class="text-sm text-white/60 hover:text-white transition-colors duration-200">{{ $t("home") }}</NuxtLink>
            <NuxtLink :to="localePath('/team')" class="text-sm text-white/60 hover:text-white transition-colors duration-200">{{ $t("team") }}</NuxtLink>
            <NuxtLink :to="localePath('/blog')" class="text-sm text-white/60 hover:text-white transition-colors duration-200">{{ $t("insights") }}</NuxtLink>
            <NuxtLink :to="localePath('/contact')" class="text-sm text-white/60 hover:text-white transition-colors duration-200">{{ $t("contact") }}</NuxtLink>
            <NuxtLink :to="localePath('/download')" class="text-sm text-white/60 hover:text-white transition-colors duration-200">{{ $t("download") }}</NuxtLink>
          </nav>
        </div>

        <!-- Contact -->
        <div>
          <h3 class="text-xs font-semibold text-white uppercase tracking-wider mb-4">{{ $t("contact") }}</h3>
          <address class="not-italic text-sm text-white/60 space-y-2.5">
            <p>CityBot GmbH</p>
            <p>Berninaplatz 1, 8050 Zürich</p>
            <a href="mailto:contact.citybot@gmail.com" class="block hover:text-white transition-colors duration-200">
              contact.citybot@gmail.com
            </a>
          </address>
        </div>
      </div>

      <!-- Bottom bar -->
      <div class="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3">
        <p class="text-xs text-white/40">
          &copy; {{ new Date().getFullYear() }} CityBot GmbH. All rights reserved.
        </p>
        <NuxtLink :to="localePath('/privacy')" class="text-xs text-white/40 hover:text-white transition-colors duration-200">
          Privacy Policy
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>

<script setup>
const localePath = useLocalePath()
</script>
