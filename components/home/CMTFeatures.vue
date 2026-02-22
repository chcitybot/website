<template>
  <div class="overflow-hidden bg-bot_bg py-16 lg:py-24">
    <div class="mx-auto max-w-7xl px-6 lg:px-8 font-main">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
        <div>
          <p class="text-caption uppercase tracking-widest text-bot_dark_blue font-semibold mb-3">
            {{ $t("cmt_features_suptitle") }}
          </p>
          <h2 class="font-heading text-display-sm text-gray-900 mb-4">
            {{ $t("cmt_features_headline_title") }}
          </h2>
          <ul class="space-y-6 mt-8">
            <li class="flex gap-4 items-start">
              <div class="flex-shrink-0 w-10 h-10 rounded-xl bg-bot_dark_blue/10 flex items-center justify-center">
                <svg class="w-5 h-5 text-bot_dark_blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 class="text-h2 text-gray-900">{{ $t("cmt_features_multimedia_title") }}</h3>
                <p class="mt-1 text-paragraph text-bot_gray">{{ $t("cmt_features_multimedia_text") }}</p>
              </div>
            </li>
            <li class="flex gap-4 items-start">
              <div class="flex-shrink-0 w-10 h-10 rounded-xl bg-bot_dark_blue/10 flex items-center justify-center">
                <svg class="w-5 h-5 text-bot_dark_blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 class="text-h2 text-gray-900">{{ $t("cmt_features_pois_title") }}</h3>
                <p class="mt-1 text-paragraph text-bot_gray">{{ $t("cmt_features_pois_text") }}</p>
              </div>
            </li>
            <li class="flex gap-4 items-start">
              <div class="flex-shrink-0 w-10 h-10 rounded-xl bg-bot_dark_blue/10 flex items-center justify-center">
                <svg class="w-5 h-5 text-bot_dark_blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 class="text-h2 text-gray-900">{{ $t("cmt_features_events_title") }}</h3>
                <p class="mt-1 text-paragraph text-bot_gray">{{ $t("cmt_features_events_text") }}</p>
              </div>
            </li>
            <li class="flex gap-4 items-start">
              <div class="flex-shrink-0 w-10 h-10 rounded-xl bg-bot_dark_blue/10 flex items-center justify-center">
                <svg class="w-5 h-5 text-bot_dark_blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <div>
                <h3 class="text-h2 text-gray-900">{{ $t("cmt_features_digital_branding_title") }}</h3>
                <p class="mt-1 text-paragraph text-bot_gray">{{ $t("cmt_features_digital_branding_text") }}</p>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <img
            src="/img/home_hero_colorful.jpg"
            alt="Digital destination experience"
            class="w-full max-w-sm mx-auto rounded-2xl shadow-xl aspect-[3/4] object-cover"
          />
        </div>
      </div>
    </div>
  </div>
</template>
