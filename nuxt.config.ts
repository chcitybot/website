// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'CityBot – Digital Destination Management Platform',
      meta: [
        { name: 'description', content: 'CityBot helps cities and tourism destinations digitize their visitor experience with an AI-powered mobile app, content management, and analytics.' },
        { property: 'og:site_name', content: 'CityBot' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
      link: [
        {
          rel: 'stylesheet',
          href: "https://fonts.googleapis.com/css2?family=Oxanium:wght@200..800&display=swap",
        },
        {
          rel: 'stylesheet',
          href: "https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap",
        },
        {
          rel: 'stylesheet',
          href: "https://fonts.googleapis.com/css2?family=Eczar:wght@400;500;600;700&display=swap",
        },
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css',
        },
      ],
    },
  },
  ssr: true,
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  hooks: {
    'pages:extend'(routes) {
      routes.push({
        path: '/download.html',
        redirect: '/download',
      })
    },
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/content', '@nuxtjs/i18n'],
  content: {
    // Options for @nuxt/content
  },

  tailwindcss: {
    cssPath: ['~/assets/css/tailwind.css', { injectPosition: "first" }],
    configPath: 'tailwind.config',
    exposeConfig: {
      level: 2
    },
    config: {},
    viewer: true,
  },
  i18n: {
    baseUrl: 'https://citybot.ch',
    locales: [
      { code: 'de', name: 'Deutsch', file: 'de.json' },
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'fr', name: 'Français', file: 'fr.json' },
      { code: 'ch', name: 'Schwiizerdütsch', file: 'gsw.json' },
      { code: 'it', name: 'Italiano', file: 'it.json' }
    ],
    defaultLocale: 'en',
    strategy: "prefix",
    detectBrowserLanguage: false,
    langDir: 'locales',
  },
  
})
