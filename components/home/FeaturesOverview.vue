<template>
  <div class="font-main">
    <!-- For Destinations: image left, text right -->
    <div class="py-16 lg:py-24 bg-white">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
          <div class="order-2 md:order-2">
            <p class="text-caption uppercase tracking-widest text-bot_dark_blue font-semibold mb-3">
              {{ $t("sum_features_for_cities_title") }}
            </p>
            <h2 class="font-heading text-display-sm text-gray-900 mb-4">
              {{ $t("sum_features_for_cities_text") }}
            </h2>
            <ul class="space-y-6 mt-8">
              <li class="flex gap-4 items-start">
                <div class="flex-shrink-0 w-10 h-10 rounded-xl bg-bot_dark_blue/10 flex items-center justify-center">
                  <svg class="w-5 h-5 text-bot_dark_blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-h2 text-gray-900">{{ $t("sum_features_full_control_title") }}</h3>
                  <p class="mt-1 text-paragraph text-bot_gray">{{ $t("sum_features_full_control_text") }}</p>
                </div>
              </li>
              <li class="flex gap-4 items-start">
                <div class="flex-shrink-0 w-10 h-10 rounded-xl bg-bot_dark_blue/10 flex items-center justify-center">
                  <svg class="w-5 h-5 text-bot_dark_blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-h2 text-gray-900">{{ $t("sum_features_analytics_title") }}</h3>
                  <p class="mt-1 text-paragraph text-bot_gray">{{ $t("sum_features_analytics_text") }}</p>
                </div>
              </li>
              <li class="flex gap-4 items-start">
                <div class="flex-shrink-0 w-10 h-10 rounded-xl bg-bot_dark_blue/10 flex items-center justify-center">
                  <svg class="w-5 h-5 text-bot_dark_blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-h2 text-gray-900">{{ $t("sum_features_cost_title") }}</h3>
                  <p class="mt-1 text-paragraph text-bot_gray">{{ $t("sum_features_cost_text") }}</p>
                </div>
              </li>
            </ul>
          </div>
          <div class="order-1 md:order-1">
            <img
              src="/img/mobile_hero.png"
              alt="CityBot App"
              class="w-full max-w-sm mx-auto rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- For Visitors: text left, image right -->
    <div class="py-16 lg:py-24 bg-bot_bg">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
          <div>
            <p class="text-caption uppercase tracking-widest text-bot_dark_blue font-semibold mb-3">
              {{ $t("sum_features_for_visitors_title") }}
            </p>
            <h2 class="font-heading text-display-sm text-gray-900 mb-4">
              {{ $t("sum_features_for_visitors_text") }}
            </h2>
            <ul class="space-y-6 mt-8">
              <li class="flex gap-4 items-start">
                <div class="flex-shrink-0 w-10 h-10 rounded-xl bg-bot_dark_blue/10 flex items-center justify-center">
                  <svg class="w-5 h-5 text-bot_dark_blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-h2 text-gray-900">{{ $t("sum_features_wholistic_experience_title") }}</h3>
                  <p class="mt-1 text-paragraph text-bot_gray">{{ $t("sum_features_wholistic_experience_text") }}</p>
                </div>
              </li>
              <li class="flex gap-4 items-start">
                <div class="flex-shrink-0 w-10 h-10 rounded-xl bg-bot_dark_blue/10 flex items-center justify-center">
                  <svg class="w-5 h-5 text-bot_dark_blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-h2 text-gray-900">{{ $t("sum_features_personalized_title") }}</h3>
                  <p class="mt-1 text-paragraph text-bot_gray">{{ $t("sum_features_personalized_text") }}</p>
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
                  <h3 class="text-h2 text-gray-900">{{ $t("sum_features_multi_destination_title") }}</h3>
                  <p class="mt-1 text-paragraph text-bot_gray">{{ $t("sum_features_multi_destination_text") }}</p>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <img
              src="/img/scene_with_phone.jpg"
              alt="Discovering a destination with CityBot"
              class="w-full max-w-sm mx-auto rounded-2xl shadow-xl aspect-[3/4] object-cover"
            />
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

