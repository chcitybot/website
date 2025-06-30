<script lang="ts" setup></script>

<template>
  <div class="bg-gray-900 py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:max-w-none">
        <div class="text-center space-y-4">
          <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {{ $t("stats_headline") }}
          </h2>
        </div>
        <dl
          class="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-3"
        >
          <div class="flex flex-col bg-white/5 p-8">
            <dt class="text-sm font-semibold leading-6 text-gray-300">
              {{ $t("stats_nr_visited_pois_title") }}
            </dt>
            <dd
              class="order-first text-3xl font-semibold tracking-tight text-bot_salmon"
            >
              {{ $t("stats_nr_visited_pois_text") }}
            </dd>
          </div>
          <div class="flex flex-col bg-white/5 p-8">
            <dt class="text-sm font-semibold leading-6 text-gray-300">
              {{ $t("stats_suggestions_title") }}
            </dt>
            <dd
              class="order-first text-3xl font-semibold tracking-tight text-bot_salmon"
            >
              {{ $t("stats_suggestions_text") }}
            </dd>
          </div>
          <div class="flex flex-col bg-white/5 p-8">
            <dt class="text-sm font-semibold leading-6 text-gray-300">
              {{ $t("stats_finished_tours_title") }}
            </dt>
            <dd
              class="order-first text-3xl font-semibold tracking-tight text-bot_salmon"
            >
              {{ $t("stats_finished_tours_text") }}
            </dd>
          </div>
          <div class="flex flex-col bg-white/5 p-8">
            <dt class="text-sm font-semibold leading-6 text-gray-300">
              {{ $t("stats_finished_tours_title") }}
            </dt>
            <dd
              class="order-first text-3xl font-semibold tracking-tight text-bot_salmon"
            >
              {{ $t("stats_finished_tours_text") }}
            </dd>
          </div>
          <div class="flex flex-col bg-white/5 p-8">
            <dt class="text-sm font-semibold leading-6 text-gray-300">
              {{ $t("stats_average_rating_title") }}
            </dt>
            <dd
              class="order-first text-3xl font-semibold tracking-tight text-bot_salmon"
            >
              {{ $t("stats_average_rating_text") }}
            </dd>
          </div>
          <div class="flex flex-col bg-white/5 p-8">
            <dt class="text-sm font-semibold leading-6 text-gray-300">
              {{ $t("stats_nr_crashes_title") }}
            </dt>
            <dd
              class="order-first text-3xl font-semibold tracking-tight text-bot_salmon"
            >
              {{ $t("stats_nr_crashes_text") }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped></style>
