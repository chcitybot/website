<script lang="ts" setup></script>

<template>
  <div
    class="max-w-lg px-4 mx-auto text-left md:max-w-none md:text-center font-main py-10"
  >
    <h1 class="text-4xl text-center lg:text-4xl text-bot_dark_blue font-bold">
      {{ $t("app_features_title") }}
    </h1>
    <div class="mt-8">
      <div
        class="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 sm:border-0 rounded-xl sm:rounded-0 border"
      >
        <div
          class="flex flex-col items-center justify-between w-full lg:flex-row"
        >
          <div class="flex gap-4">
            <img
              class="w-[160px] sm:w-[240px] lg:h-80vh mt-6"
              alt="logo"
              src="/img/suggestions_new.png"
            />
            <img
              class="w-[160px] sm:w-[240px] lg:h-80vh mt-6"
              alt="logo"
              src="/img/ai_suggestions.png"
            />
          </div>

          <div class="lg:mb-0 lg:max-w-lg lg:pr-5">
            <div class="max-w-xl my-6 text-center lg:text-left">
              <h2
                class="text-2xl text-bot_light_blue sm:mt-0 mt-6 font-semibold tracking-tight sm:text-3xl sm:leading-none max-w-lg mb-6"
              >
                {{ $t("app_features_individual_exploration_title") }}
              </h2>
              <p class="text-lg text-gray-600">
                {{ $t("app_features_individual_exploration_text") }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="sm:mt-20 mt-8">
      <div
        class="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-12 sm:border-0 rounded-xl sm:rounded-0 border sm:mt-0 mt-8"
      >
        <div
          class="flex flex-col items-center justify-between w-full lg:flex-row"
        >
          <div class="lg:mb-0 lg:max-w-lg lg:pr-5">
            <div class="max-w-xl my-8 text-center lg:text-left">
              <h2
                class="text-2xl text-bot_light_blue font-semibold tracking-tight sm:pt-0 sm:text-3xl sm:leading-none max-w-lg mb-6"
              >
                {{ $t("app_features_thematic_tours_title") }}
              </h2>
              <p class="text-lg text-gray-600">
                {{ $t("app_features_thematic_tours_text") }}
              </p>
            </div>
          </div>
          <div class="flex gap-4">
            <img
              class="w-[160px] sm:w-[240px] lg:h-80vh mb-8"
              alt="logo"
              src="/img/citybot_tours.png"
            />
            <img
              class="w-[160px] sm:w-[240px] lg:h-80vh mb-8"
              alt="logo"
              src="/img/active_tour.png"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="sm:mt-20 mt-8">
      <div
        class="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 sm:border-0 rounded-xl sm:rounded-0 border"
      >
        <div
          class="flex flex-col items-center justify-between w-full lg:flex-row"
        >
          <div class="flex gap-4">
            <img
              class="w-[160px] sm:w-[240px] lg:h-80vh mt-6"
              alt="logo"
              src="/img/citybot_events.png"
            />
            <img
              class="w-[160px] sm:w-[240px] lg:h-80vh mt-6"
              alt="logo"
              src="/img/special_offers.png"
            />
          </div>
          <div class="lg:mb-0 lg:max-w-lg lg:pr-5">
            <div class="max-w-2xl my-8 text-center lg:text-left">
              <h2
                class="text-2xl text-bot_light_blue sm:mt-0 mt-6 font-semibold tracking-tight sm:text-3xl sm:leading-none max-w-lg mb-6"
              >
                {{ $t("app_features_events_and_offers_title") }}
              </h2>
              <p class="text-lg text-gray-600">
                {{ $t("app_features_events_and_offers_text") }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      id="download"
      class="px-4 py-[100px] lg:py-[200px] mx-auto flex flex-col items-center sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 sm:border-0 rounded-xl sm:rounded-0 border"
    >
      <h2
        class="text-2xl text-bot_dark_blue lg:text-4xl sm:mt-0 mt-6 font-semibold tracking-tight sm:text-3xl sm:leading-none mb-6"
      >
        {{ $t("cta_app_download") }}
      </h2>
      <div class="lg:flex mx-auto">
        <a
          href="https://play.google.com/store/apps/details?id=ch.citybot.citybot"
          target="_blank"
        >
          <svgGooglePlayStore class="m-4" />
        </a>
        <a
          href="https://apps.apple.com/ch/app/citybot-zug/id6443655653"
          target="_blank"
        >
          <svgAppleAppStore class="m-4" />
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped></style>
