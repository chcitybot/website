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

      <!-- Team Description -->
      <div class="max-w-3xl mx-auto mb-16 reveal">
        <p class="text-paragraph text-bot_gray leading-relaxed">
          We're a team of engineers from the suburbs of Zug, united by the conviction that technology can strengthen communities and destinations without compromising what makes them special. With backgrounds spanning environmental engineering, mathematics, cybersecurity, and IT, we bring different lenses to the same mission: making digital tools that real people can immediately understand and use.
        </p>
        <p class="text-paragraph text-bot_gray leading-relaxed mt-4">
          Whether it's
          <span
            v-for="(phrase, i) in highlightPhrases"
            :key="i"
          ><span
              class="team-highlight rounded-md transition-all duration-500"
              :class="{ 'active': hoveredMember === i, 'streak': introPlaying === i }"
              :style="{
                ...(hoveredMember === i ? { backgroundColor: teamMembers[i].color + '20', color: teamMembers[i].color, boxShadow: `0 0 16px ${teamMembers[i].color}25` } : {}),
                '--streak-color': teamMembers[i].color,
              }"
            >{{ phrase.text }}</span><template v-if="i < highlightPhrases.length - 1">{{ phrase.separator }}</template></span>
          — each of us contributes a piece that makes CityBot genuinely useful. We turn complex problems into clean solutions, and we're there to guide our partners through every step.
        </p>
      </div>

      <!-- Team Members Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-10">
        <div
          v-for="(member, index) in teamMembers"
          :key="member.name"
          class="group flex flex-col items-center reveal"
          :class="index > 0 ? `reveal-delay-${index}` : ''"
        >
          <!-- Photo with glow -->
          <img
            class="aspect-square w-full max-w-[280px] rounded-2xl object-cover team-glow transition-all duration-500 cursor-pointer"
            :class="member.imgClass || ''"
            :src="member.image"
            :alt="member.name"
            :style="{
              '--glow-color': member.color,
              animationDuration: `${14 + index * 2}s`,
            }"
            @mouseenter="hoveredMember = index"
            @mouseleave="hoveredMember = null"
          />

          <!-- Name & Role -->
          <div class="text-center mt-6 w-full">
            <h2 class="text-h2 text-gray-900 font-semibold mb-1">{{ member.name }}</h2>
            <p class="text-caption text-bot_gray mb-3">{{ member.role }}</p>
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
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const hoveredMember = ref(null)
const introPlaying = ref(null)

onMounted(() => {
  const delay = 800
  const duration = 600
  const gap = 200

  highlightPhrases.forEach((_, i) => {
    setTimeout(() => { introPlaying.value = i }, delay + i * (duration + gap))
    setTimeout(() => { if (introPlaying.value === i) introPlaying.value = null }, delay + i * (duration + gap) + duration)
  })
})

const highlightPhrases = [
  { text: 'translating user insights into product decisions', separator: ', ' },
  { text: 'architecting intelligent AI systems', separator: ', ' },
  { text: 'helping destinations bring their content to life', separator: ', or ' },
  { text: 'shaping interfaces that feel intuitive regardless of technical background', separator: '' },
]

const teamMembers = [
  {
    name: 'Thierry Hohmann',
    role: 'Founder | Backend Developer | Orchestrator',
    image: '/img/teamfoto_thierry.png',
    imgClass: 'object-[35%_20%]',
    color: '#4047D2',
    linkedin: 'https://ch.linkedin.com/in/thierryhohmann',
  },
  {
    name: 'Vladislav Bunkin',
    role: 'Founder | Strategy | Full Stack Developer',
    image: '/img/photo_vlad.jpg',
    imgClass: '',
    color: '#FA634B',
    linkedin: 'https://ch.linkedin.com/in/bunkinv',
  },
  {
    name: 'Andri Bösch',
    role: 'Founder | Backend Developer | Communications',
    image: '/img/andri_boesch.jpeg',
    imgClass: '',
    color: '#AF94D6',
    linkedin: 'https://ch.linkedin.com/in/andri-b%C3%B6sch-0682446a',
  },
  {
    name: 'Lucas Thorbecke',
    role: 'Advisor | Frontend Developer | Website & Design',
    image: 'https://robohash.org/tastenaffe2000',
    imgClass: '',
    color: '#F9B666',
    linkedin: null,
    website: 'https://lucasthorbecke.ch',
  },
]
</script>

<style scoped>
.team-highlight {
  padding: 2px 6px;
  margin: -2px -6px;
  background-color: transparent;
  color: inherit;
  background-size: 200% 100%;
  background-position: 100% 0;
}
.team-highlight.active {
  font-weight: 600;
}
.team-highlight.streak {
  animation: streak-sweep 600ms ease-out forwards;
  background-image: linear-gradient(
    90deg,
    transparent 0%,
    color-mix(in srgb, var(--streak-color) 15%, transparent) 30%,
    color-mix(in srgb, var(--streak-color) 25%, transparent) 50%,
    color-mix(in srgb, var(--streak-color) 15%, transparent) 70%,
    transparent 100%
  );
  background-size: 200% 100%;
}
@keyframes streak-sweep {
  0%   { background-position: 100% 0; }
  100% { background-position: -100% 0; }
}
</style>
