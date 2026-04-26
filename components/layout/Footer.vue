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
          <a href="https://www.linkedin.com/company/citybotgmbh" target="_blank" rel="noopener" class="inline-flex items-center mt-4 text-white/40 hover:text-white transition-colors duration-200" aria-label="LinkedIn">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
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
            <a href="mailto:info@citybot.ch" class="block hover:text-white transition-colors duration-200">
              info@citybot.ch
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
