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

      <!-- Team Members Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-10 lg:grid-rows-[auto_auto_1fr]">
        <div
          v-for="(member, index) in teamMembers"
          :key="member.name"
          class="group flex flex-col items-center reveal lg:row-span-3 lg:grid lg:grid-rows-subgrid lg:justify-items-center"
          :class="index > 0 ? `reveal-delay-${index}` : ''"
        >
          <!-- Photo with glow -->
          <img
            class="aspect-square w-full max-w-[280px] rounded-2xl object-cover team-glow transition-all duration-500"
            :class="member.imgClass || ''"
            :src="member.image"
            :alt="member.name"
            :style="{
              '--glow-color': member.color,
              animationDuration: `${14 + index * 2}s`,
            }"
          />

          <!-- Name & Role -->
          <div class="text-center mt-6 lg:mt-0 w-full flex flex-col justify-between">
            <div>
              <h2 class="text-h2 text-gray-900 font-semibold mb-1">{{ member.name }}</h2>
              <p class="text-caption text-bot_gray mb-3">{{ member.role }}</p>
            </div>
            <!-- LinkedIn or Website link -->
            <div class="h-5">
              <a
                v-if="member.linkedin"
                :href="member.linkedin"
                target="_blank"
                rel="noopener"
                class="inline-flex items-center text-bot_dark_blue hover:text-bot_dark_blue/80 transition-colors"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <span
                v-else-if="member.website"
                class="inline-flex items-center text-bot_gray/50"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </span>
            </div>
          </div>

          <!-- Bio / Story -->
          <div
            class="mt-4 lg:mt-0 w-full rounded-xl px-4 py-5 bio-discoverable transition-all duration-200 self-start"
            :style="{ backgroundColor: member.color + '0A' }"
          >
            <div class="w-8 h-0.5 mx-auto mb-3 rounded-full" :style="{ backgroundColor: member.color + '30' }" />
            <!-- Structured story format -->
            <div v-if="member.story" class="space-y-3 text-left">
              <div v-for="item in member.story" :key="item.label" class="flex flex-col gap-1">
                <span
                  class="inline-block self-start text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full"
                  :style="{ backgroundColor: member.color + '20', color: member.color }"
                >{{ item.label }}</span>
                <p class="text-caption text-bot_gray leading-relaxed">{{ item.text }}</p>
              </div>
            </div>
            <!-- Plain bio fallback -->
            <p v-else class="text-caption text-bot_gray leading-relaxed text-center">
              {{ member.bio }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const teamMembers = [
  {
    name: 'Thierry Hohmann',
    role: 'Founder | Backend Developer | Orchestrator',
    image: '/img/teamfoto_thierry.png',
    imgClass: 'object-[35%_20%]',
    color: '#4047D2',
    linkedin: 'https://ch.linkedin.com/in/thierryhohmann',
    story: [
      { label: 'I am', text: 'An environmental engineer from the suburbs of Zug, driven by the belief that technology and nature don\'t have to compete.' },
      { label: 'I love', text: 'Taking big, abstract ideas and turning them into something practical that real people can immediately understand and use.' },
      { label: 'Outside work', text: 'Lifting weights at the gym to reset my mind, or settling into a good book at a café.' },
      { label: 'CityBot & I', text: 'I dig into how people actually use CityBot, translate those insights into product decisions, and keep the whole team moving forward.' },
    ],
  },
  {
    name: 'Vladislav Bunkin',
    role: 'Founder | Strategy | Full Stack Developer',
    image: '/img/photo_vlad.jpg',
    imgClass: '',
    color: '#FA634B',
    linkedin: 'https://ch.linkedin.com/in/bunkinv',
    story: [
      { label: 'I am', text: 'A mathematician at heart — raised in the suburbs of Zug, and intrigued by technology and its interaction with people.' },
      { label: 'I love', text: 'Turning complex problems into clean, elegant solutions — whether that means hours at the whiteboard or deep dives into a codebase.' },
      { label: 'Outside work', text: 'You\'ll find me on the dance floor perfecting Hip Hop moves, or pushing my limits at the gym.' },
      { label: 'CityBot & I', text: 'I lead our technical strategy, architect the core systems, and drive our AI features forward to make CityBot feel genuinely intelligent.' },
    ],
  },
  {
    name: 'Andri Bösch',
    role: 'Founder | Backend Developer | Communications',
    image: '/img/andri_boesch.jpeg',
    imgClass: '',
    color: '#AF94D6',
    linkedin: 'https://ch.linkedin.com/in/andri-b%C3%B6sch-0682446a',
    story: [
      { label: 'I am', text: 'A mechanical and cybersecurity engineer from the suburbs of Zug, fascinated by how AI and society shape each other.' },
      { label: 'I love', text: 'Understanding what drives people\'s decisions and finding ways to foster their creativity: Through a conversation, a system, or a well-placed feature.' },
      { label: 'Outside work', text: 'Buried in a good book, sketching whatever catches my eye, or sending it over a kicker on my snowboard.' },
      { label: 'CityBot & I', text: 'I make it effortless for destinations to bring their content to life in the app — and I\'m there to hold their hand through every step.' },
    ],
  },
  {
    name: 'Lucas Thorbecke',
    role: 'Advisor | Frontend Developer | Website & Design',
    image: 'https://robohash.org/tastenaffe2000',
    imgClass: '',
    color: '#F9B666',
    linkedin: null,
    website: 'https://lucasthorbecke.ch',
    story: [
      { label: 'I am', text: 'An IT engineer from the suburbs of Zug, on a mission to build apps that matter and bring about positive change.' },
      { label: 'I love', text: 'Translating what users actually need into interfaces that feel intuitive and accessible — no matter your technical background.' },
      { label: 'Outside work', text: 'On a snowboard, in a lake, or somewhere down the road in my van — wherever the next adventure takes me.' },
      { label: 'CityBot & I', text: 'I shape the interface and website design, and develop key components like AR that push CityBot forward.' },
    ],
  },
]
</script>
