<script lang="ts" setup></script>

<template>
  <div class="overflow-hidden bg-white py-12 lg:py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8 font-main">
      <div
        class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2"
      >
        <div class="lg:pr-8 lg:pt-4">
          <div class="lg:max-w-lg">
            <h2 class="text-base font-semibold leading-7 text-bot_pink">
              {{ $t("cmt_features_suptitle") }}
            </h2>
            <p
              class="mt-2 text-3xl font-bold tracking-tight text-bot_dark_blue sm:text-4xl"
            >
              {{ $t("cmt_features_headline_title") }}
            </p>
            <p class="mt-6 text-lg leading-8 text-gray-600">
              {{ $t("cmt_features_subtitle") }}
            </p>
            <dl
              class="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none"
            >
              <div class="relative pl-14">
                <dt class="inline font-semibold text-bot_light_blue">
                  <svgMultimedia
                    class="absolute left-1 top-1 h-10 w-10 text-bot_pink"
                  />
                  {{ $t("cmt_features_multimedia_title") }}
                </dt>
                <dd class="inline ml-2">
                  {{ $t("cmt_features_multimedia_text") }}
                </dd>
              </div>
              <div class="relative pl-14">
                <dt class="inline font-semibold text-bot_light_blue">
                  <svgLocationMarker
                    class="absolute left-1 top-1 h-10 w-10 text-bot_pink"
                  />
                  {{ $t("cmt_features_pois_title") }}
                </dt>
                <dd class="inline ml-2">
                  {{ $t("cmt_features_pois_text") }}
                </dd>
              </div>
              <div class="relative pl-14">
                <dt class="inline font-semibold text-bot_light_blue">
                  <svgTourMap
                    class="absolute left-1 top-1 h-10 w-10 text-bot_pink"
                  />
                  {{ $t("cmt_features_tours_title") }}
                </dt>
                <dd class="inline ml-2">
                  {{ $t("cmt_features_tours_text") }}
                </dd>
              </div>
              <div class="relative pl-14">
                <dt class="inline font-semibold text-bot_light_blue">
                  <svgTicket
                    class="absolute left-1 top-1 h-10 w-10 text-bot_pink"
                  />
                  {{ $t("cmt_features_events_title") }}
                </dt>
                <dd class="inline ml-2">
                  {{ $t("cmt_features_events_text") }}
                </dd>
              </div>
              <div class="relative pl-14">
                <dt class="inline font-semibold text-bot_light_blue">
                  <svgSettings
                    class="absolute left-1 top-1 h-10 w-10 text-bot_pink"
                  />
                  {{ $t("cmt_features_digital_branding_title") }}
                </dt>
                <dd class="inline ml-2">
                  {{ $t("cmt_features_digital_branding_text") }}
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <img
          src="/img/cmt.png"
          alt="Product screenshot"
          class="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0 my-auto"
          width="2432"
          height="1442"
        />
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped></style>
