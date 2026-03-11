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
const { locale, locales } = useI18n()
const siteUrl = 'https://citybot.ch'

if (route.path === "/download.html") {
  navigateTo("/download", { redirectCode: 301 })
}

useSeoMeta({
  title: 'Download CityBot – Free on iOS & Android',
  ogTitle: 'Download CityBot – Free on iOS & Android',
  description: 'Download the CityBot app for free on iOS and Android. Discover attractions, join tours, and explore your destination with AI-powered personalized suggestions.',
  ogDescription: 'Download the CityBot visitor app for free on iOS and Android. AI-powered local discovery for tourists and city explorers.',
  ogType: 'website',
  ogImage: `${siteUrl}/img/CItybot_Logo_highres.png`,
  twitterCard: 'summary_large_image',
})

useHead({
  link: computed(() => [
    { rel: 'canonical', href: `${siteUrl}/${locale.value}/download` },
    ...locales.value.map((loc: any) => ({ rel: 'alternate', hreflang: loc.code, href: `${siteUrl}/${loc.code}/download` })),
    { rel: 'alternate', hreflang: 'x-default', href: `${siteUrl}/en/download` },
  ]),
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'MobileApplication',
        name: 'CityBot',
        operatingSystem: 'iOS, Android',
        applicationCategory: 'TravelApplication',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'CHF' },
        description: 'AI-powered destination discovery app. Explore attractions, join guided tours, and get personalized suggestions for your city visit.',
        publisher: { '@id': `${siteUrl}/#organization` },
        downloadUrl: [
          'https://apps.apple.com/ch/app/citybot-zug/id6443655653',
          'https://play.google.com/store/apps/details?id=ch.citybot.citybot',
        ],
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.2',
          bestRating: '5',
          ratingCount: '1000',
        },
      }),
    },
  ],
})
</script>
