<template>
  <div class="min-h-screen bg-white font-main pt-32 pb-20">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-20 reveal">
        <h1 class="font-heading text-display-sm text-gray-900 mb-4">
          {{ $t("team_title") }}
        </h1>
        <p class="text-paragraph text-bot_gray max-w-2xl mx-auto">
          {{ $t("team_subtitle") }}
        </p>
      </div>

      <!-- Team Members -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <!-- Member #1 -->
        <div class="flex flex-col items-center reveal">
          <img
            class="aspect-square w-full max-w-[280px] rounded-2xl object-cover object-[35%_20%] shadow-sm hover:shadow-lg transition-shadow duration-300"
            src="/img/teamfoto_thierry.png"
            alt="Thierry Hohmann"
          />
          <div class="text-center mt-6">
            <h2 class="text-h2 text-gray-900 font-semibold mb-1">Thierry Hohmann</h2>
            <p class="text-caption text-bot_gray mb-3">Founder | Backend Developer | Orchestrator</p>
            <a href="https://ch.linkedin.com/in/thierryhohmann" target="_blank" rel="noopener"
              class="inline-flex items-center text-bot_dark_blue hover:text-bot_dark_blue/80 transition-colors">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
          </div>
        </div>

        <!-- Member #2 -->
        <div class="flex flex-col items-center reveal reveal-delay-1">
          <img
            class="aspect-square w-full max-w-[280px] rounded-2xl object-cover shadow-sm hover:shadow-lg transition-shadow duration-300"
            src="/img/photo_vlad.jpg"
            alt="Vladislav Bunkin"
          />
          <div class="text-center mt-6">
            <h2 class="text-h2 text-gray-900 font-semibold mb-1">Vladislav Bunkin</h2>
            <p class="text-caption text-bot_gray mb-3">Founder | Strategy | Full Stack Developer</p>
            <a href="https://ch.linkedin.com/in/bunkinv" target="_blank" rel="noopener"
              class="inline-flex items-center text-bot_dark_blue hover:text-bot_dark_blue/80 transition-colors">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
          </div>
        </div>

        <!-- Member #3 -->
        <div class="flex flex-col items-center reveal reveal-delay-2">
          <img
            class="aspect-square w-full max-w-[280px] rounded-2xl object-cover shadow-sm hover:shadow-lg transition-shadow duration-300"
            src="/img/andri_boesch.jpeg"
            alt="Andri Bösch"
          />
          <div class="text-center mt-6">
            <h2 class="text-h2 text-gray-900 font-semibold mb-1">Andri Bösch</h2>
            <p class="text-caption text-bot_gray mb-3">Founder | Backend Developer | Communications</p>
            <a href="https://ch.linkedin.com/in/andri-b%C3%B6sch-0682446a" target="_blank" rel="noopener"
              class="inline-flex items-center text-bot_dark_blue hover:text-bot_dark_blue/80 transition-colors">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
          </div>
        </div>

        <!-- Member #4 -->
        <div class="flex flex-col items-center reveal reveal-delay-3">
          <img
            class="aspect-square w-full max-w-[280px] rounded-2xl object-cover shadow-sm hover:shadow-lg transition-shadow duration-300"
            src="https://robohash.org/tastenaffe2000"
            alt="Lucas Thorbecke"
          />
          <div class="text-center mt-6">
            <h2 class="text-h2 text-gray-900 font-semibold mb-1">Lucas Thorbecke</h2>
            <p class="text-caption text-bot_gray">Advisor | Frontend Developer</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
