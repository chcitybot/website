<template>
  <div class="py-24 lg:py-32 bg-white font-main">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <!-- Section header -->
      <div class="text-center mb-20 reveal">
        <h2 class="font-heading text-display-sm text-gray-900">
          {{ $t("app_features_title") }}
        </h2>
      </div>

      <!-- Feature 1: Images Left, Text Right -->
      <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-24 lg:mb-32">
        <div class="flex gap-4 lg:gap-6 reveal">
          <img class="w-36 sm:w-48 lg:w-56 rounded-3xl" alt="Personalized suggestions" src="/img/suggestions_new.png" />
          <img class="w-36 sm:w-48 lg:w-56 rounded-3xl" alt="AI suggestions" src="/img/ai_suggestions.png" />
        </div>
        <div class="lg:max-w-md reveal reveal-delay-2">
          <h3 class="font-heading text-h1 text-gray-900 mb-4">
            {{ $t("app_features_individual_exploration_title") }}
          </h3>
          <p class="text-paragraph text-bot_gray">
            {{ $t("app_features_individual_exploration_text") }}
          </p>
        </div>
      </div>

      <!-- Feature 2: Text Left, Images Right -->
      <div class="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20 mb-24 lg:mb-32">
        <div class="lg:max-w-md reveal reveal-delay-2">
          <h3 class="font-heading text-h1 text-gray-900 mb-4">
            {{ $t("app_features_thematic_tours_title") }}
          </h3>
          <p class="text-paragraph text-bot_gray">
            {{ $t("app_features_thematic_tours_text") }}
          </p>
        </div>
        <div class="flex gap-4 lg:gap-6 reveal">
          <img class="w-36 sm:w-48 lg:w-56 rounded-3xl" alt="Tours" src="/img/citybot_tours.png" />
          <img class="w-36 sm:w-48 lg:w-56 rounded-3xl" alt="Active tour" src="/img/active_tour.png" />
        </div>
      </div>

      <!-- Feature 3: Images Left, Text Right -->
      <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-24 lg:mb-32">
        <div class="flex gap-4 lg:gap-6 reveal">
          <img class="w-36 sm:w-48 lg:w-56 rounded-3xl" alt="Events" src="/img/citybot_events.png" />
          <img class="w-36 sm:w-48 lg:w-56 rounded-3xl" alt="Special offers" src="/img/special_offers.png" />
        </div>
        <div class="lg:max-w-md reveal reveal-delay-2">
          <h3 class="font-heading text-h1 text-gray-900 mb-4">
            {{ $t("app_features_events_and_offers_title") }}
          </h3>
          <p class="text-paragraph text-bot_gray">
            {{ $t("app_features_events_and_offers_text") }}
          </p>
        </div>
      </div>

      <!-- Download CTA -->
      <div class="text-center py-16 reveal">
        <h2 class="font-heading text-display-sm text-gray-900 mb-8">
          {{ $t("cta_app_download") }}
        </h2>
        <div class="flex justify-center flex-wrap gap-4">
          <a href="https://play.google.com/store/apps/details?id=ch.citybot.citybot" target="_blank" rel="noopener" class="hover:opacity-80 transition-opacity">
            <SvgGooglePlayStore />
          </a>
          <a href="https://apps.apple.com/ch/app/citybot-zug/id6443655653" target="_blank" rel="noopener" class="hover:opacity-80 transition-opacity">
            <SvgAppleAppStore />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
