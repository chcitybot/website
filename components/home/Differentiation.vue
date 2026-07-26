<template>
  <div class="py-16 lg:py-24 xl:py-32 bg-bot_bg font-main">
    <div class="max-w-5xl mx-auto px-6 lg:px-8">
      <div class="text-center mb-12 lg:mb-16 reveal">
        <p class="text-sm sm:text-caption font-semibold uppercase tracking-widest text-bot_dark_blue mb-3">{{ $t("diff_eyebrow") }}</p>
        <h2 class="font-heading text-display-xs sm:text-display-sm text-gray-900">{{ $t("diff_title") }}</h2>
        <p class="mt-5 text-bot_gray text-base sm:text-paragraph leading-relaxed max-w-2xl mx-auto">{{ $t("diff_lead") }}</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="bg-white rounded-2xl p-7 lg:p-9 shadow-sm hover:shadow-md transition-shadow duration-300 reveal reveal-delay-1">
          <div class="w-12 h-12 rounded-xl bg-bot_dark_blue/10 flex items-center justify-center mb-5">
            <svg class="w-6 h-6 text-bot_dark_blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 class="font-semibold text-gray-900 text-paragraph mb-2">{{ $t("diff_curated_title") }}</h3>
          <p class="text-bot_gray text-base leading-relaxed">{{ $t("diff_curated_text") }}</p>
        </div>

        <div class="bg-white rounded-2xl p-7 lg:p-9 shadow-sm hover:shadow-md transition-shadow duration-300 reveal reveal-delay-2">
          <div class="w-12 h-12 rounded-xl bg-bot_red/10 flex items-center justify-center mb-5">
            <svg class="w-6 h-6 text-bot_red" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
            </svg>
          </div>
          <h3 class="font-semibold text-gray-900 text-paragraph mb-2">{{ $t("diff_focus_title") }}</h3>
          <p class="text-bot_gray text-base leading-relaxed">{{ $t("diff_focus_text") }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
