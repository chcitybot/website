<template>
  <div class="py-24 lg:py-32 bg-white font-main">
    <div class="max-w-5xl mx-auto px-6 lg:px-8">
      <div class="text-center mb-16 reveal">
        <h2 class="font-heading text-display-sm text-gray-900">
          {{ $t("testimonials_title") }}
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Testimonial 1 -->
        <div class="bg-white rounded-2xl p-8 lg:p-10 border-l-4 border-bot_dark_blue reveal">
          <img
            src="/img/stadt_zug_logo.webp"
            class="h-16 lg:h-20 w-auto rounded-lg mb-8"
            alt="Stadt Zug logo"
          />
          <blockquote>
            <p class="font-bold text-h2 text-bot_dark_blue mb-4">
              {{ $t("testimonials_customer_support_title") }}
            </p>
            <p class="text-paragraph text-gray-700 mb-6">
              {{ $t("testimonials_customer_support_text") }}
            </p>
          </blockquote>
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-bot_dark_blue/10 flex items-center justify-center text-bot_dark_blue font-bold text-sm">RK</div>
            <div>
              <p class="text-sm font-semibold text-gray-900">Regula Kaiser</p>
              <p class="text-xs text-bot_gray">{{ $t("testimonials_citydev_title") }} Zug</p>
            </div>
          </div>
        </div>

        <!-- Testimonial 2 -->
        <div class="bg-white rounded-2xl p-8 lg:p-10 border-l-4 border-bot_dark_blue reveal reveal-delay-2">
          <img
            src="/img/zug_tourism_logo.png"
            class="h-16 lg:h-20 w-auto rounded-lg mb-8"
            alt="Zug Tourism logo"
          />
          <blockquote>
            <p class="font-bold text-h2 text-bot_dark_blue mb-4">
              {{ $t("testimonials_broad_offerings_title") }}
            </p>
            <p class="text-paragraph text-gray-700 mb-6">
              {{ $t("testimonials_broad_offerings_text") }}
            </p>
          </blockquote>
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-bot_dark_blue/10 flex items-center justify-center text-bot_dark_blue font-bold text-sm">DK</div>
            <div>
              <p class="text-sm font-semibold text-gray-900">Dominic Keller</p>
              <p class="text-xs text-bot_gray">{{ $t("testimonials_ceo_title") }} Tourismus Zug</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
