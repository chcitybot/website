<template>
  <div v-if="post" class="w-full max-w-7xl mx-auto font-main pt-24 px-6 lg:px-8">
    <div class="overflow-hidden rounded-2xl">
      <img
        :src="`/img/${post.image}`"
        class="w-full h-[40vh] lg:h-[50vh] object-cover"
        :alt="`image for ${post.title} article`"
      />
    </div>
    <div class="mt-8 mb-6">
      <h1 class="font-heading text-display-sm text-gray-900">{{ post.title }}</h1>
      <p class="mt-2 text-caption text-bot_gray">{{ post.date }}</p>
    </div>
    <div class="max-w-4xl py-10">
      <ContentRenderer :value="post" class="prose lg:prose-xl" />
      <div class="my-12 flex flex-col items-center">
        <NuxtLink :to="'/contact'">
          <button
            class="inline-flex items-center px-8 py-4 rounded-full bg-bot_dark_blue text-white text-paragraph font-semibold hover:bg-bot_dark_blue/90 transition-all duration-200 shadow-lg shadow-bot_dark_blue/25 hover:shadow-xl hover:-translate-y-0.5"
          >
            {{ $t("cta_become_partner") }}
          </button>
        </NuxtLink>
      </div>
    </div>
  </div>
  <div v-else class="pt-32 text-center text-bot_gray">Page not found</div>
</template>

<script lang="ts" setup>
const route = useRoute()
const { locale, locales } = useI18n()

const { data: post, error } = await useAsyncData(
  `blog-${route.params.slug}-${locale.value}`,
  () => {
    return queryCollection("blog").path(route.path).first()
  }
)

useHead(() => {
  if (!post.value) {
    return {}
  }

  const siteUrl = "https://citybot.ch"
  const fullPath = route.fullPath

  const canonicalUrl = `${siteUrl}/${locale.value}${fullPath}`
  const alternateLinks = locales.value.map((loc: any) => {
    return {
      rel: "alternate",
      hreflang: loc.code,
      href: `${siteUrl}/${loc.code}${fullPath}`,
    }
  })

  return {
    title: post.value?.title,
    meta: [
      { name: "description", content: post.value?.description },
      { property: "og:title", content: post.value?.title },
      { property: "og:description", content: post.value?.description },
      {
        property: "og:image",
        content: `${siteUrl}${post.value?.image}`,
      },
      {
        property: "og:url",
        content: `${siteUrl}${route.path}`,
      },
      { property: "og:type", content: "article" },
    ],
    link: [{ rel: "canonical", href: canonicalUrl }, ...alternateLinks],
  }
})

if (!post.value && process.client) {
  throw createError({ statusCode: 404, statusMessage: "Page Not Found" })
}
</script>
