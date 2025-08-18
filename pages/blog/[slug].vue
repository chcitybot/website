<template>
  <div v-if="post" class="w-full max-w-7xl mx-auto">
    <div class="relative h-[50vh] mt-28">
      <img
        :src="`/img/${post.image}`"
        class="w-full h-[50vh] object-cover mx-auto"
        :alt="`image for ${post.title} article`"
      />
      <h1
        class="absolute bottom-8 bg-bot_dark_blue p-2 m-4 text-4xl rounded-md text-white font-bold text-center"
      >
        {{ post.title }}
      </h1>
      <p
        class="absolute bottom-4 right-4 bg-gray-400 p-2 font-bold rounded-md text-white"
      >
        {{ post.date }}
      </p>
    </div>
    <div class="max-w-7xl mx-auto py-10 px-4">
      <ContentRenderer :value="post" class="prose lg:prose-xl" />
      <div class="my-8 flex flex-col items-center">
        <NuxtLink
          class="mt-2 hover:text-white hover:cursor-pointer"
          :to="'/contact'"
        >
          <button
            class="bg-bot_dark_blue text-white px-6 py-3 rounded-lg font-semibold relative group-hover:text-bot_pink tx-xl"
          >
            {{ $t("cta_become_partner") }}
          </button>
        </NuxtLink>
      </div>
    </div>
  </div>
  <div v-else>Page not found</div>
</template>

<script lang="ts" setup>
const route = useRoute();
const { locale, locales } = useI18n();
const { data: post } = await useAsyncData(route.path, () => {
  return queryCollection("blog").path(route.path).first();
});

const siteUrl = "https://citybot.ch";
const fullPath = route.fullPath;

useHead(() => {
  const canonicalUrl = `${siteUrl}/${locale.value}${fullPath}`;
  const alternateLinks = locales.value.map((loc: any) => {
    return {
      rel: "alternate",
      hreflang: loc.code,
      href: `${siteUrl}/${loc.code}${fullPath}`,
    };
  });

  return {
    title: post.value?.title,
    meta: [
      { name: "description", content: post.value?.description },
      { property: "og:title", content: post.value?.title },
      { property: "og:description", content: post.value?.description },
      {
        property: "og:image",
        content: `${siteUrl}/${post.value?.image}`,
      },
      {
        property: "og:url",
        content: `${siteUrl}/${useRoute().path}`,
      },
      { property: "og:type", content: "article" },
    ],
    link: [{ rel: "canonical", href: canonicalUrl }, ...alternateLinks],
  };
});
</script>
