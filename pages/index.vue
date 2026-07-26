<template>
  <div>
    <section id="section1">
      <HomeHero />
    </section>
    <HomeAppBridge />
    <section id="section2">
      <HomeAppFeatures />
    </section>
    <HomeDifferentiation />
    <section id="section3">
      <HomeCMTFeatures />
    </section>
    <section id="section4">
      <HomeFeaturesOverview />
    </section>
    <section id="section5">
      <HomeStatistics />
    </section>
    <section id="section6">
      <HomeTestimonials />
    </section>
    <section id="section7">
      <HomeFAQ />
    </section>
  </div>
</template>

<script setup>
const { locale, locales, t } = useI18n()
const siteUrl = 'https://citybot.ch'

useSeoMeta({
  title: 'CityBot – Digital Destination Management Platform',
  ogTitle: 'CityBot – Digital Destination Management Platform',
  description: 'CityBot helps cities and tourism destinations digitize the visitor experience — AI-powered app, content management, and analytics in one Swiss platform.',
  ogDescription: 'CityBot helps cities and tourism destinations digitize their visitor experience. AI-powered mobile app, content management, and analytics — all in one platform.',
  ogType: 'website',
  ogImage: `${siteUrl}/img/CItybot_Logo_highres.png`,
  ogUrl: computed(() => `${siteUrl}/${locale.value}`),
  twitterCard: 'summary_large_image',
  twitterTitle: 'CityBot – Digital Destination Management Platform',
  twitterDescription: 'AI-powered digital destination management for cities and tourism boards.',
  twitterImage: `${siteUrl}/img/CItybot_Logo_highres.png`,
})

const jsonLd = computed(() => JSON.stringify({
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
      email: 'info@citybot.ch',
      foundingDate: '2021',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Berninaplatz 1',
        postalCode: '8050',
        addressLocality: 'Zürich',
        addressCountry: 'CH',
      },
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
      inLanguage: ['en', 'de', 'fr', 'it', 'de-CH'],
    },
    {
      '@type': 'WebPage',
      '@id': `${siteUrl}/${locale.value}#webpage`,
      url: `${siteUrl}/${locale.value}`,
      name: 'CityBot – Digital Destination Management Platform',
      isPartOf: { '@id': `${siteUrl}/#website` },
      about: { '@id': `${siteUrl}/#organization` },
      description: 'CityBot helps cities and tourism destinations digitize their visitor experience with an AI-powered mobile app, content management system, and analytics platform.',
    },
    {
      '@type': 'MobileApplication',
      '@id': `${siteUrl}/#app`,
      name: 'CityBot',
      operatingSystem: 'iOS, Android',
      applicationCategory: 'TravelApplication',
      publisher: { '@id': `${siteUrl}/#organization` },
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'CHF' },
      installUrl: [
        'https://apps.apple.com/ch/app/citybot-zug/id6443655653',
        'https://play.google.com/store/apps/details?id=ch.citybot.citybot',
      ],
    },
    {
      '@type': 'FAQPage',
      // Mirrors the visible FAQ section in the current locale
      mainEntity: ['1', '2', '4', '5', '6', '7'].map((n) => ({
        '@type': 'Question',
        name: t(`faq_q${n}`),
        acceptedAnswer: { '@type': 'Answer', text: t(`faq_a${n}`) },
      })),
    },
  ],
}))

useHead({
  link: computed(() => [
    { rel: 'canonical', href: `${siteUrl}/${locale.value}` },
    ...locales.value.map((loc) => ({ rel: 'alternate', hreflang: loc.language ?? loc.code, href: `${siteUrl}/${loc.code}` })),
    { rel: 'alternate', hreflang: 'x-default', href: `${siteUrl}/en` },
  ]),
  script: [
    {
      type: 'application/ld+json',
      innerHTML: jsonLd,
    },
  ],
})
</script>
