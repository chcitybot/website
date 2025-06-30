<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-main py-10">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
      <div class="bg-white rounded-lg shadow-md p-6">
        <h2 class="text-2xl font-bold mb-2 text-bot_pink">
          {{ $t("sum_features_for_cities_title") }}
        </h2>
        <p class="my-4 text-lg text-gray-600">
          {{ $t("sum_features_for_cities_text") }}
        </p>
        <ul class="space-y-3 list-disc">
          <li class="flex">
            <div>
              <h3 class="text-lg font-semibold text-bot_light_blue">
                {{ $t("sum_features_full_control_title") }}
              </h3>
              <p class="text-gray-600">
                {{ $t("sum_features_full_control_text") }}
              </p>
            </div>
          </li>
          <li class="flex">
            <div>
              <h3 class="text-lg font-semibold text-bot_light_blue">
                {{ $t("sum_features_analytics_title") }}
              </h3>
              <p class="text-gray-600">
                {{ $t("sum_features_analytics_text") }}
              </p>
            </div>
          </li>
          <li class="flex items-start">
            <div>
              <h3 class="text-lg font-semibold text-bot_light_blue">
                {{ $t("sum_features_cost_title") }}
              </h3>
              <p class="text-gray-600">
                {{ $t("sum_features_cost_text") }}
              </p>
            </div>
          </li>
        </ul>
        <div class="relative max-w-min group mt-8 mx-auto">
          <div
            class="absolute -inset-0.5 group-hover:-inset-1 group-hover:opacity-100 transition group-hover:duration-300 duration-1000 bg-gradient-to-r from-bot_salmon to-bot_pink rounded-lg blur opacity-75"
          ></div>
          <button
            @click.prevent="scrollToSection('section3')"
            class="bg-white text-bot_dark_blue px-6 py-3 rounded-lg font-semibold leading-none relative group-hover:text-bot_pink"
          >
            {{ $t("cta_more_details") }}
          </button>
        </div>
      </div>
      <div
        class="bg-white rounded-lg shadow-md p-6 relative h-full flex flex-col justify-between"
      >
        <div>
          <h2 class="text-2xl font-bold text-bot_pink">
            {{ $t("sum_features_for_visitors_title") }}
          </h2>
          <p class="my-4 text-lg text-gray-600">
            {{ $t("sum_features_for_visitors_text") }}
          </p>
          <ul class="space-y-3">
            <li class="flex items-start">
              <div>
                <h3 class="text-lg font-semibold text-bot_light_blue">
                  {{ $t("sum_features_wholistic_experience_title") }}
                </h3>
                <p class="text-gray-600">
                  {{ $t("sum_features_wholistic_experience_text") }}
                </p>
              </div>
            </li>
            <li class="flex items-start">
              <div>
                <h3 class="text-lg font-semibold text-bot_light_blue">
                  {{ $t("sum_features_personalized_title") }}
                </h3>
                <p class="text-gray-600">
                  {{ $t("sum_features_personalized_text") }}
                </p>
              </div>
            </li>
            <li class="flex">
              <div>
                <h3 class="text-lg font-semibold text-bot_light_blue">
                  {{ $t("sum_features_multi_destination_title") }}
                </h3>
                <p class="text-gray-600">
                  {{ $t("sum_features_multi_destination_text") }}
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div class="relative max-w-min group mt-8 mx-auto">
          <div
            class="absolute -inset-0.5 group-hover:-inset-1 group-hover:opacity-100 transition group-hover:duration-300 duration-1000 bg-gradient-to-r from-bot_salmon to-bot_pink rounded-lg blur opacity-75"
          ></div>
          <button
            @click.prevent="scrollToSection('section4')"
            class="bg-white text-bot_dark_blue px-6 py-3 rounded-lg font-semibold leading-none relative group-hover:text-bot_pink"
          >
            {{ $t("cta_more_details") }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  const yOffset =
    -window.innerHeight / 2 + element.getBoundingClientRect().height / 4;
  const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

  window.scrollTo({
    top: y,
    behavior: "smooth",
  });
}
</script>

<style lang="postcss" scoped></style>
