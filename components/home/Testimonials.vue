<template>
  <div class="py-16 lg:py-24 xl:py-32 bg-bot_bg font-main relative overflow-hidden">
    <div class="relative max-w-5xl mx-auto px-6 lg:px-8">
      <div class="text-center mb-16 reveal">
        <p class="text-sm sm:text-caption font-semibold uppercase tracking-widest text-bot_dark_blue mb-3">{{ $t("testimonials_eyebrow") }}</p>
        <h2 class="font-heading text-display-xs sm:text-display-sm text-gray-900">
          {{ $t("testimonials_title") }}
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
        <!-- Testimonial 1 -->
        <div class="group reveal relative rounded-2xl ">
          <!-- Orb radiating from top-left corner of this card -->
          <div class="absolute top-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none z-0" style="background: radial-gradient(circle, rgba(64,71,210,0.25) 0%, transparent 55%); filter: blur(65px); transform: translate(-25%, -25%);"></div>
          <div class="relative z-10 p-8 lg:p-10">
            <a href="https://www.stadtzug.ch/" target="_blank" rel="noopener" class="inline-block mb-8 relative group/logo transition-transform duration-300 hover:-translate-y-1 hover:scale-105">
              <img
                src="/img/stadt_zug_logo.webp"
                class="h-16 lg:h-20 w-auto rounded-lg"
                alt="Stadt Zug logo"
              />
              <span class="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-bot_dark_blue text-white flex items-center justify-center opacity-0 group-hover/logo:opacity-100 transition-opacity duration-200 shadow-md">
                <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </span>
            </a>
            <blockquote>
              <p class="font-bold text-h2 text-bot_dark_blue mb-4">
                {{ $t("testimonials_customer_support_title") }}
              </p>
              <p class="text-base sm:text-paragraph text-gray-700 mb-6">
                {{ $t("testimonials_customer_support_text") }}
              </p>
            </blockquote>
            <div class="flex items-center gap-3">
              <img src="/img/regula_kaiser.jpeg" alt="Regula Kaiser" class="w-10 h-10 rounded-full object-cover" />
              <div>
                <p class="text-sm font-semibold text-gray-900">Regula Kaiser</p>
                <p class="text-xs text-bot_gray">{{ $t("testimonials_citydev_title") }} Zug</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Testimonial 2 -->
        <div class="group reveal reveal-delay-2 relative rounded-2xl ">
          <!-- Orb radiating from top-left corner of this card -->
          <div class="absolute top-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none z-0" style="background: radial-gradient(circle, rgba(250,99,75,0.22) 0%, transparent 55%); filter: blur(65px); transform: translate(-25%, -25%);"></div>
          <div class="relative z-10 p-8 lg:p-10">
            <a href="https://www.zug-tourismus.ch/de" target="_blank" rel="noopener" class="inline-block mb-8 relative group/logo transition-transform duration-300 hover:-translate-y-1 hover:scale-105">
              <img
                src="/img/zug_tourism_logo.png"
                class="h-16 lg:h-20 w-auto rounded-lg"
                alt="Zug Tourism logo"
              />
              <span class="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-bot_dark_blue text-white flex items-center justify-center opacity-0 group-hover/logo:opacity-100 transition-opacity duration-200 shadow-md">
                <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </span>
            </a>
            <blockquote>
              <p class="font-bold text-h2 text-bot_dark_blue mb-4">
                {{ $t("testimonials_broad_offerings_title") }}
              </p>
              <p class="text-base sm:text-paragraph text-gray-700 mb-6">
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
  </div>
</template>
