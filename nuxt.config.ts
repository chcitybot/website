// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'CityBot',
      meta: [
        { name: 'description', content: 'The platform for the digital precence of your city or destination!' }
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
  site: {  url: 'https://citybot.ch',  name: 'CityBot - The platform for the digital precence of your city or destination'  },
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
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'fr', name: 'Francaise', file: 'fr.json' },
      { code: 'de', name: 'Deutsch', file: 'de.json' },
      { code: 'it', name: 'Italiano', file: 'it.json' }
    ],
    defaultLocale: 'en',
    strategy: "prefix",
    detectBrowserLanguage: false,
    langDir: 'locales',
  },
  
})
