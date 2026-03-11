<template>
  <div>
    <section id="section1">
      <HomeHero />
    </section>
    <section id="section2">
      <HomeCMTFeatures />
    </section>
    <section id="section3">
      <HomeFeaturesOverview />
    </section>
    <section id="section4">
      <HomeAppFeatures />
    </section>
    <section id="section5">
      <HomeStatistics />
    </section>
    <section id="section6">
      <HomeTestimonials />
    </section>
  </div>
</template>

<script setup>
const { locale, locales } = useI18n()
const siteUrl = 'https://citybot.ch'

useSeoMeta({
  title: 'CityBot – Digital Destination Management Platform',
  ogTitle: 'CityBot – Digital Destination Management Platform',
  description: 'CityBot helps cities and tourism destinations digitize their visitor experience. AI-powered mobile app, content management, and analytics — all in one platform. Based in Zug, Switzerland.',
  ogDescription: 'CityBot helps cities and tourism destinations digitize their visitor experience. AI-powered mobile app, content management, and analytics — all in one platform.',
  ogType: 'website',
  ogImage: `${siteUrl}/img/CItybot_Logo_highres.png`,
  ogUrl: computed(() => `${siteUrl}/${locale.value}`),
  twitterCard: 'summary_large_image',
  twitterTitle: 'CityBot – Digital Destination Management Platform',
  twitterDescription: 'AI-powered digital destination management for cities and tourism boards.',
  twitterImage: `${siteUrl}/img/CItybot_Logo_highres.png`,
})

useHead({
  link: computed(() => [
    { rel: 'canonical', href: `${siteUrl}/${locale.value}` },
    ...locales.value.map((loc) => ({ rel: 'alternate', hreflang: loc.code, href: `${siteUrl}/${loc.code}` })),
    { rel: 'alternate', hreflang: 'x-default', href: `${siteUrl}/en` },
  ]),
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Organization',
            '@id': `${siteUrl}/#organization`,
            name: 'CityBot',
            url: siteUrl,
            logo: {
              '@type': 'ImageObject',
              url: `${siteUrl}/img/CItybot_Logo_highres.png`,
            },
            email: 'contact.citybot@gmail.com',
            foundingDate: '2021',
            foundingLocation: { '@type': 'Place', name: 'Zug, Switzerland' },
            description: 'CityBot is a Swiss digital destination management platform that helps cities and tourism organizations enhance visitor experiences through AI-powered mobile apps and cloud-based content management tools.',
            sameAs: [
              'https://ch.linkedin.com/in/thierryhohmann',
              'https://ch.linkedin.com/in/bunkinv',
              'https://play.google.com/store/apps/details?id=ch.citybot.citybot',
              'https://apps.apple.com/ch/app/citybot-zug/id6443655653',
            ],
          },
          {
            '@type': 'WebSite',
            '@id': `${siteUrl}/#website`,
            url: siteUrl,
            name: 'CityBot',
            publisher: { '@id': `${siteUrl}/#organization` },
            inLanguage: ['en', 'de', 'fr', 'it'],
          },
          {
            '@type': 'WebPage',
            '@id': `${siteUrl}/en#webpage`,
            url: `${siteUrl}/en`,
            name: 'CityBot – Digital Destination Management Platform',
            isPartOf: { '@id': `${siteUrl}/#website` },
            about: { '@id': `${siteUrl}/#organization` },
            description: 'CityBot helps cities and tourism destinations digitize their visitor experience with an AI-powered mobile app, content management system, and analytics platform.',
          },
          {
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'What is CityBot?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'CityBot is a digital destination management platform that helps cities, tourism boards, and destinations create, manage, and deliver personalized visitor experiences. It combines an AI-powered mobile app for visitors with a cloud-based CMS and analytics tools for destination managers.',
                },
              },
              {
                '@type': 'Question',
                name: 'How does CityBot help tourism destinations?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'CityBot provides destinations with a branded mobile app experience for visitors, a CMS for managing attractions, tours, and events, real-time analytics, and AI-powered personalized suggestions — all at a fraction of the cost of building a custom solution. Over 130,000 personalized suggestions have been made through the platform.',
                },
              },
              {
                '@type': 'Question',
                name: 'Is CityBot available on iOS and Android?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. The CityBot visitor app is available on both iOS (Apple App Store) and Android (Google Play Store), free to download and use for visitors.',
                },
              },
              {
                '@type': 'Question',
                name: 'Where is CityBot based?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'CityBot is a Swiss startup founded and based in Zug, Switzerland.',
                },
              },
              {
                '@type': 'Question',
                name: 'What does digital destination management mean?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Digital destination management refers to using technology platforms to organize, distribute, and personalize a destination\'s content — attractions, tours, events, and offers — for visitors via digital channels like mobile apps. CityBot provides this as a ready-to-use, cost-efficient platform.',
                },
              },
            ],
          },
        ],
      }),
    },
  ],
})
</script>
