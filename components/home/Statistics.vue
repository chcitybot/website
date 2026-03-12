<template>
  <div class="py-24 lg:py-32 bg-bot_bg font-main">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="text-center mb-16 reveal">
        <p class="text-caption uppercase tracking-widest text-bot_dark_blue font-semibold mb-3">
          {{ $t("stats_headline") }}
        </p>
        <h2 class="font-heading text-display-sm text-gray-900">
          {{ $t("stats_subheadline") }}
        </h2>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        <!-- Visited Attractions -->
        <div class="bg-white rounded-2xl p-6 lg:p-8 text-center reveal reveal-delay-1 group hover:shadow-lg transition-shadow duration-300">
          <div class="w-12 h-12 rounded-xl bg-bot_dark_blue/10 flex items-center justify-center mx-auto mb-4">
            <svg class="w-6 h-6 text-bot_dark_blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
          </div>
          <div class="font-heading text-display-sm text-bot_dark_blue">
            <MagicNumberTicker :value="60000" /><span>+</span>
          </div>
          <p class="mt-2 text-caption text-bot_gray">{{ $t("stats_nr_visited_pois_title") }}</p>
        </div>

        <!-- Personalized Suggestions -->
        <div class="bg-white rounded-2xl p-6 lg:p-8 text-center reveal reveal-delay-2 group hover:shadow-lg transition-shadow duration-300">
          <div class="w-12 h-12 rounded-xl bg-bot_dark_blue/10 flex items-center justify-center mx-auto mb-4">
            <svg class="w-6 h-6 text-bot_dark_blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
            </svg>
          </div>
          <div class="font-heading text-display-sm text-bot_dark_blue">
            <MagicNumberTicker :value="330000" :delay="0.1" /><span>+</span>
          </div>
          <p class="mt-2 text-caption text-bot_gray">{{ $t("stats_suggestions_title") }}</p>
        </div>

        <!-- Completed Tours -->
        <div class="bg-white rounded-2xl p-6 lg:p-8 text-center reveal reveal-delay-3 group hover:shadow-lg transition-shadow duration-300">
          <div class="w-12 h-12 rounded-xl bg-bot_dark_blue/10 flex items-center justify-center mx-auto mb-4">
            <svg class="w-6 h-6 text-bot_dark_blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
            </svg>
          </div>
          <div class="font-heading text-display-sm text-bot_dark_blue">
            <MagicNumberTicker :value="3100" :delay="0.2" /><span>+</span>
          </div>
          <p class="mt-2 text-caption text-bot_gray">{{ $t("stats_finished_tours_title") }}</p>
        </div>

        <!-- Average Rating -->
        <div class="bg-white rounded-2xl p-6 lg:p-8 text-center reveal reveal-delay-4 group hover:shadow-lg transition-shadow duration-300">
          <div class="w-12 h-12 rounded-xl bg-bot_dark_blue/10 flex items-center justify-center mx-auto mb-4">
            <svg class="w-6 h-6 text-bot_dark_blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
            </svg>
          </div>
          <div class="font-heading text-display-sm text-bot_dark_blue">
            <MagicNumberTicker :value="4.2" :decimal-places="1" :delay="0.3" />
          </div>
          <p class="mt-2 text-caption text-bot_gray">{{ $t("stats_average_rating_title") }}</p>
        </div>

        <!-- Zero Crashes -->
        <div class="bg-white rounded-2xl p-6 lg:p-8 text-center sm:col-span-2 lg:col-span-1 reveal group hover:shadow-lg transition-shadow duration-300">
          <div class="w-12 h-12 rounded-xl bg-bot_dark_blue/10 flex items-center justify-center mx-auto mb-4">
            <svg class="w-6 h-6 text-bot_dark_blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
          </div>
          <div class="font-heading text-display-sm text-bot_dark_blue">15+</div>
          <p class="mt-2 text-caption text-bot_gray">{{ $t("stats_nr_crashes_title") }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
