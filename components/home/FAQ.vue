<template>
  <div class="py-24 lg:py-32 bg-bot_bg font-main">
    <div class="max-w-3xl mx-auto px-6 lg:px-8">
      <div class="text-center mb-16 reveal">
        <p class="text-caption font-semibold uppercase tracking-widest text-bot_dark_blue mb-3">{{ $t("faq_eyebrow") }}</p>
        <h2 class="font-heading text-display-sm text-gray-900">{{ $t("faq_title") }}</h2>
      </div>

      <div class="space-y-3 reveal">
        <div
          v-for="(item, index) in faqItems"
          :key="index"
          class="bg-white rounded-2xl overflow-hidden transition-shadow duration-300"
          :class="openIndex === index ? 'shadow-md' : 'shadow-sm hover:shadow-md'"
        >
          <button
            class="w-full flex items-center justify-between px-7 py-5 text-left gap-4"
            @click="openIndex = openIndex === index ? null : index"
          >
            <span class="font-semibold text-gray-900 text-paragraph">{{ item.q }}</span>
            <span
              class="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-colors duration-200"
              :class="openIndex === index ? 'bg-bot_dark_blue text-white' : 'bg-gray-100 text-gray-500'"
            >
              <svg class="w-3 h-3 transition-transform duration-300" :class="openIndex === index ? 'rotate-180' : ''" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </button>
          <div
            class="grid transition-all duration-300 ease-in-out"
            :class="openIndex === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'"
          >
            <div class="overflow-hidden">
              <p class="px-7 pb-5 text-bot_gray text-paragraph leading-relaxed">{{ item.a }}</p>

              <!-- CTAs for the first FAQ (free / pricing) -->
              <div v-if="index === 0" class="px-7 pb-7 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div class="flex items-center gap-3">
                  <a
                    href="https://apps.apple.com/ch/app/citybot-zug/id6443655653"
                    target="_blank"
                    rel="noopener"
                    class="hover:opacity-80 transition-opacity"
                    :aria-label="$t('cta_app_download') + ' – iOS'"
                  >
                    <SvgAppleAppStore class="h-10 w-auto" />
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=ch.citybot.citybot"
                    target="_blank"
                    rel="noopener"
                    class="hover:opacity-80 transition-opacity"
                    :aria-label="$t('cta_app_download') + ' – Android'"
                  >
                    <SvgGooglePlayStore class="h-10 w-auto" />
                  </a>
                </div>
                <span class="hidden sm:block text-gray-300">|</span>
                <NuxtLink :to="`/${locale}/contact`">
                  <button class="inline-flex items-center px-5 py-2.5 rounded-full bg-bot_dark_blue text-white text-sm font-semibold hover:bg-bot_dark_blue/90 transition-all duration-200 shadow-md shadow-bot_dark_blue/20 hover:shadow-lg hover:-translate-y-0.5">
                    {{ $t("cta_become_partner") }}
                  </button>
                </NuxtLink>
              </div>

              <!-- App store links for the iOS/Android FAQ -->
              <div v-if="index === 2" class="px-7 pb-7">
                <div class="flex items-center gap-3">
                  <a
                    href="https://apps.apple.com/ch/app/citybot-zug/id6443655653"
                    target="_blank"
                    rel="noopener"
                    class="hover:opacity-80 transition-opacity"
                    :aria-label="$t('cta_app_download') + ' – iOS'"
                  >
                    <SvgAppleAppStore class="h-10 w-auto" />
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=ch.citybot.citybot"
                    target="_blank"
                    rel="noopener"
                    class="hover:opacity-80 transition-opacity"
                    :aria-label="$t('cta_app_download') + ' – Android'"
                  >
                    <SvgGooglePlayStore class="h-10 w-auto" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { t, locale } = useI18n()
const openIndex = ref(0)

const faqItems = computed(() => [
  { q: t('faq_q1'), a: t('faq_a1') },
  { q: t('faq_q2'), a: t('faq_a2') },
  { q: t('faq_q3'), a: t('faq_a3') },
  { q: t('faq_q4'), a: t('faq_a4') },
  { q: t('faq_q5'), a: t('faq_a5') },
])
</script>
