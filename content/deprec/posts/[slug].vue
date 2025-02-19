<script setup>
import { useRoute } from 'vue-router';
import { queryContent } from '@nuxt/content';

const route = useRoute();
const { data: post } = await useAsyncData(() =>
  queryContent('posts').where({ _path: `/posts/${route.params.slug}` }).findOne()
);
</script>

<template>
  <div v-if="post" class="post-container">
    <h1 class="text-4xl font-bold">{{ post.title }}</h1>
    <ContentRenderer :value="post" />
  </div>
</template>

<style scoped>
.post-container {
  max-width: 800px;
  margin: auto;
  padding: 2rem;
}
</style>
