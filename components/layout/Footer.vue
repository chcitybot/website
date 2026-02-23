<template>
  <footer class="bg-bot_dark_blue text-white/80 font-main" aria-labelledby="footer-heading">
    <h2 id="footer-heading" class="sr-only">Footer</h2>

    <div class="mx-auto max-w-7xl px-6 lg:px-8 py-10 lg:py-12">
      <!-- Main row: logo + nav + contact inline -->
      <div class="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
        <!-- Brand -->
        <div class="flex items-center gap-4">
          <SvgBot class="h-8 w-8 flex-shrink-0 text-white" />
          <p class="text-base text-white/70">
            {{ $t("footer_slogan") }}
            <SvgSwissFlag class="h-3.5 w-3.5 inline-block ml-1 align-middle" />
          </p>
        </div>

        <!-- Navigation -->
        <div>
          <h3 class="text-xs font-semibold text-white uppercase tracking-wider mb-3">Navigation</h3>
          <nav class="flex flex-wrap items-center gap-6">
            <NuxtLink :to="localePath('/')" class="text-base text-white/70 hover:text-white transition-colors duration-200">Home</NuxtLink>
            <NuxtLink :to="localePath('/team')" class="text-base text-white/70 hover:text-white transition-colors duration-200">{{ $t("team") }}</NuxtLink>
            <NuxtLink :to="localePath('/blog')" class="text-base text-white/70 hover:text-white transition-colors duration-200">{{ $t("insights") }}</NuxtLink>
            <NuxtLink to="/download" class="text-base text-white/70 hover:text-white transition-colors duration-200">{{ $t("download") }}</NuxtLink>
            <NuxtLink :to="localePath('/contact')" class="text-base text-white/70 hover:text-white transition-colors duration-200">{{ $t("contact") }}</NuxtLink>
          </nav>
        </div>

        <!-- Contact -->
        <div>
          <h3 class="text-xs font-semibold text-white uppercase tracking-wider mb-3">{{ $t("contact") }}</h3>
          <address class="not-italic text-base text-white/70 space-y-1">
            <p>CityBot GmbH</p>
            <p>Berninaplatz 1, 8050 Zürich</p>
            <a href="mailto:contact.citybot@gmail.com" class="block hover:text-white transition-colors duration-200">
              contact.citybot@gmail.com
            </a>
          </address>
        </div>
      </div>

      <!-- Bottom bar -->
      <div class="mt-8 pt-6 border-t border-white/15 flex flex-col sm:flex-row justify-between items-center gap-3">
        <p class="text-sm text-white/50">
          &copy; {{ new Date().getFullYear() }} CityBot GmbH. All rights reserved.
        </p>
        <NuxtLink :to="localePath('/privacy')" class="text-sm text-white/50 hover:text-white transition-colors duration-200">
          Privacy Policy
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>

<script setup>
const localePath = useLocalePath()
</script>
