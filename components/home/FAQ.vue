<template>
  <div class="py-24 lg:py-32 bg-white font-main relative overflow-hidden">
    <div class="max-w-3xl mx-auto px-6 lg:px-8 relative z-10">
      <div class="text-center mb-16 reveal">
        <p class="text-caption font-semibold uppercase tracking-widest text-bot_dark_blue mb-3">{{ $t("faq_eyebrow") }}</p>
        <h2 class="font-heading text-display-sm text-gray-900">{{ $t("faq_title") }}</h2>
      </div>

      <div class="space-y-3 reveal">
        <div
          v-for="(item, index) in faqItems"
          :key="index"
          class="bg-bot_bg rounded-2xl overflow-hidden transition-shadow duration-300"
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
                    {{ $t("cta_destination_enquiry") }}
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

    <!-- Reaction figurine: floats to the right on desktop, reacts to active FAQ -->
    <div class="hidden lg:flex absolute right-0 inset-y-0 items-center justify-center pointer-events-none pr-16 xl:pr-28">
      <Transition name="faq-fig" mode="out-in">
        <div :key="openIndex ?? -1" class="flex flex-col items-center gap-3">
          <!-- Speech bubble -->
          <div class="bg-white rounded-2xl px-4 py-2.5 shadow-md text-base font-medium text-gray-700 relative max-w-[180px] text-center leading-snug">
            {{ activeFigurine.caption }}
            <!-- Bubble tail -->
            <span class="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-r-[8px] border-t-[8px] border-l-transparent border-r-transparent border-t-white"></span>
          </div>
          <div :style="activeFigurine.flip ? 'transform: scaleX(-1)' : ''">
            <img
              :src="activeFigurine.img"
              alt=""
              class="h-64 xl:h-80 w-auto max-w-none block faq-fig-bob"
            />
          </div>
        </div>
      </Transition>
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
  { q: t('faq_q6'), a: t('faq_a6') },
])

const figurines = [
  { img: '/img/citybot_figurine_man_celebrating_with_drink_no_floor.png', caption: t('faq_fig_free'),         flip: true },
  { img: '/img/citybot_figurine_man_tourist_with_camera_no_floor.png',    caption: t('faq_fig_destinations'), flip: true },
  { img: '/img/citybot_figurine_woman_walking_with_backpack_no_floor.png', caption: t('faq_fig_mobile'),      flip: true },
  { img: '/img/citybot_figurine_woman_at_cafe_green_bag_no_floor.png',    caption: t('faq_fig_based'),        flip: true },
  { img: '/img/citybot_figurine_woman_biking_with_child_no_floor.png',    caption: t('faq_fig_ddm'),          flip: true },
  { img: '/img/citybot_figurine_woman_dancing_with_coffee_no_floor.png',  caption: t('faq_fig_cities'),       flip: false },
]

const activeFigurine = computed(() => figurines[openIndex.value ?? 0])
</script>

<style scoped>
/* Figurine swap transition */
.faq-fig-enter-active {
  transition: opacity 0.25s ease, transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.faq-fig-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.faq-fig-enter-from {
  opacity: 0;
  transform: translateY(24px) scale(0.92);
}
.faq-fig-leave-to {
  opacity: 0;
  transform: translateY(-12px) scale(0.96);
}

/* Gentle idle bob */
@keyframes faq-bob {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-7px); }
}
.faq-fig-bob {
  animation: faq-bob 3s ease-in-out infinite;
}
</style>
