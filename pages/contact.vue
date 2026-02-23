<template>
  <div class="font-main">
    <div class="relative min-h-screen flex items-center justify-center">
      <img
        src="/img/zug_case_study.jpg"
        alt="Zug case study"
        class="absolute inset-0 w-full h-full object-cover object-top"
      />
      <div class="absolute inset-0 bg-black/15"></div>

      <div class="relative z-10 text-center px-6">
        <h1 class="font-heading text-display-sm text-white mb-3 drop-shadow-lg">
          {{ $t("contact") }}
        </h1>
        <p class="text-paragraph text-white/80 drop-shadow">
          {{ $t("contact_subtitle") }}
        </p>

        <div class="mt-16 max-w-lg">
          <p class="text-lg lg:text-xl text-white leading-relaxed mb-4 drop-shadow">
            {{ $t("contact_form_title") }}
          </p>
          <p class="text-lg lg:text-xl text-white leading-relaxed mb-8 drop-shadow">
            {{ $t("contact_form_text") }}
          </p>
          <a
            href="mailto:contact.citybot@gmail.com"
            class="inline-flex items-center px-8 py-4 rounded-full bg-white text-bot_dark_blue text-paragraph font-semibold hover:bg-white/90 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            <svg class="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            contact.citybot@gmail.com
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
