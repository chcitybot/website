<template>
  <div class="min-h-screen flex flex-col items-center justify-center px-6 py-32 bg-white font-main">
    <div class="max-w-2xl text-center reveal">
      <h1 class="font-heading text-display-sm text-gray-900 mb-4">
        {{ $t("contact_form_title") }}
      </h1>
      <p class="text-paragraph text-bot_gray mb-10">
        {{ $t("contact_form_subtitle") || '' }}
      </p>
      <a
        href="mailto:contact.citybot@gmail.com"
        class="inline-flex items-center px-8 py-4 rounded-full bg-bot_dark_blue text-white text-paragraph font-semibold hover:bg-bot_dark_blue/90 transition-all duration-200 shadow-lg shadow-bot_dark_blue/25 hover:shadow-xl hover:-translate-y-0.5"
      >
        <svg class="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        contact.citybot@gmail.com
      </a>
    </div>
  </div>
</template>
