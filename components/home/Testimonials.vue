<script lang="ts" setup></script>

<template>
  <div class="bg-backgroundMain">
    <section class="max-w-5xl mx-auto w-full px-10 py-10">
      <div class="flex items-center justify-center flex-col gap-y-2 py-5">
        <h2
          class="text-2xl md:text-3xl lg:text-4xl font-bold max-w-md mx-auto text-center text-white"
        >
          {{ $t("testimonials_title") }}
        </h2>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div class="flex w-full">
          <div
            class="border p-7 rounded-xl drop-shadow-md border-neutral-600 col-span-2 flex flex-col gap-y-10 justify-between"
          >
            <img
              src="/img/stadt_zug_logo.webp"
              class="h-[100px] sm:h-[120px] lg:h-[140px] w-min rounded-lg mb-8"
            />

            <div class="flex flex-col gap-y-3.5">
              <p class="font-bold text-xl text-bot_salmon">
                {{ $t("testimonials_customer_support_title") }}
              </p>
              <p class="font-medium text-white">
                {{ $t("testimonials_customer_support_text") }}
              </p>
            </div>
            <div class="flex flex-col">
              <p class="pt-2 text-sm font-semibold text-bot_red_salmon">
                Regula Kaiser
              </p>
              <p class="text-sm font-medium text-slate-100/70">
                {{ $t("testimonials_citydev_title") }} Zug
              </p>
            </div>
          </div>
        </div>
        <div class="flex w-full">
          <div
            class="border p-7 rounded-xl drop-shadow-md border-neutral-600 col-span-2 flex flex-col gap-y-10 justify-between"
          >
            <img
              src="/img/zug_tourism_logo.png"
              class="h-[100px] sm:h-[120px] lg:h-[140px] w-min rounded-lg mb-8"
            />
            <div class="flex flex-col gap-y-3.5">
              <p class="font-bold text-xl text-bot_salmon">
                {{ $t("testimonials_broad_offerings_title") }}
              </p>
              <p class="font-medium text-white">
                {{ $t("testimonials_broad_offerings_text") }}
              </p>
            </div>
            <div class="flex flex-col">
              <p class="pt-2 text-sm font-semibold text-bot_red_salmon">
                Dominic Keller
              </p>
              <p class="text-sm font-medium text-slate-100/70">
                {{ $t("testimonials_ceo_title") }} Tourismus Zug
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="postcss" scoped></style>
