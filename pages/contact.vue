<template>
  <div class="font-main">
    <div class="relative min-h-screen flex items-center justify-center bg-bot_bg overflow-hidden">
      <!-- Decorative orb bubbles -->
      <div class="absolute inset-0 pointer-events-none">
        <div class="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full opacity-80" style="background: radial-gradient(circle, #4047D2 0%, transparent 55%); filter: blur(40px)"></div>
        <div class="absolute -bottom-[15%] -left-[10%] w-[500px] h-[500px] rounded-full opacity-70" style="background: radial-gradient(circle, #FA634B 0%, transparent 55%); filter: blur(40px)"></div>
        <div class="absolute top-[30%] left-[15%] w-[350px] h-[350px] rounded-full opacity-60" style="background: radial-gradient(circle, #AF94D6 0%, transparent 55%); filter: blur(50px)"></div>
      </div>

      <div class="relative z-10 text-center px-6">
        <h1 class="font-heading text-display-sm text-gray-900 mb-3">
          {{ $t("contact") }}
        </h1>
        <p class="text-paragraph text-bot_gray">
          {{ $t("contact_subtitle") }}
        </p>

        <!-- Content inside brand bubble -->
        <div class="mt-12 relative">
          <div class="absolute inset-0 -m-8 rounded-full opacity-20" style="background: radial-gradient(circle, #4047D2 0%, transparent 55%); filter: blur(50px)"></div>
          <div class="relative max-w-lg">
            <p class="text-lg lg:text-xl text-gray-700 leading-relaxed mb-4">
              {{ $t("contact_form_title") }}
            </p>
            <p class="text-lg lg:text-xl text-gray-700 leading-relaxed mb-8">
              {{ $t("contact_form_text") }}
            </p>
            <div class="relative inline-block">
              <!-- Figurine pointing cup toward the button -->
              <img
                src="/img/citybot_figurine_woman_dancing_with_coffee_no_floor.png"
                alt=""
                aria-hidden="true"
                class="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[130%] h-52 sm:left-auto sm:right-0 sm:translate-x-full sm:translate-y-full sm:h-[336px] w-auto max-w-none pointer-events-none select-none"
              />
              <a
                href="mailto:info@citybot.ch"
                class="inline-flex items-center px-8 py-4 rounded-full bg-bot_dark_blue text-white text-paragraph font-semibold hover:bg-bot_dark_blue/90 transition-all duration-200 shadow-lg shadow-bot_dark_blue/25 hover:shadow-xl hover:-translate-y-0.5"
              >
                <svg class="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@citybot.ch
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { locale, locales } = useI18n()
const siteUrl = 'https://citybot.ch'

useSeoMeta({
  title: 'Contact – CityBot | Partner with Us',
  ogTitle: 'Contact – CityBot | Partner with Us',
  description: 'Interested in bringing CityBot to your destination? Get in touch with our team for a free, non-binding conversation about how we can help digitize your visitor experience.',
  ogDescription: 'Get in touch with the CityBot team. We\'d love to explore how our digital destination management platform can work for you.',
  ogType: 'website',
  ogImage: `${siteUrl}/img/CItybot_Logo_highres.png`,
  twitterCard: 'summary_large_image',
})

useHead({
  link: computed(() => [
    { rel: 'canonical', href: `${siteUrl}/${locale.value}/contact` },
    ...locales.value.map((loc) => ({ rel: 'alternate', hreflang: loc.code, href: `${siteUrl}/${loc.code}/contact` })),
    { rel: 'alternate', hreflang: 'x-default', href: `${siteUrl}/en/contact` },
  ]),
})
</script>
