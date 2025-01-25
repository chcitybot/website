// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
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
  modules: ['@nuxtjs/tailwindcss', "@nuxtjs/i18n", '@nuxt/content'],
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
    vueI18n: "./i18n.config.ts",
    locales: [
      {
        code: 'en',
        name: 'English'
      },
      {
        code: 'fr',
        name: 'Francaise'
      },
      {
        code: 'de',
        name: 'Deutsch'
      }
    ], // used in URL path prefix
    defaultLocale: 'de',
    strategy: "prefix_except_default", // Use "prefix_except_default"
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      alwaysRedirect: true,
      fallbackLocale: 'de', // Ensure fallback is set to German
    },
  }
})