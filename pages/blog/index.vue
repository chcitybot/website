<template>
  <div>
    {{ locale }}
    <div class="w-full py-40 bg-gray-100 px-4">
      <h1 class="text-6xl font-bold text-center text-bot_pink">
        {{ $t("insights") }}
      </h1>
    </div>
    <div
      class="flex flex-col max-w-7xl bg-white rounded-t-3xl shadow-md -mt-20 mx-auto p-4 md:p-10"
    >
      <!-- Tag Filter Dropdown -->
      <div class="py-4">
        <label class="font-bold text-bot_pink">{{
          $t("blog_by_topic_filter")
        }}</label>
        <select v-model="tagFilter" class="ml-2 p-2 border rounded">
          <option value="">{{ $t("blog_topic_all") }}</option>
          <option v-for="tag in allTags" :key="tag" :value="tag">
            {{ tag }}
          </option>
        </select>
      </div>
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch gap-10"
      >
        <div v-if="loading">{{ $t("loading") }}</div>
        <div v-else-if="filteredPosts.length === 0">
          {{ $t("blog_no_posts") }}
        </div>
        <BlogPreviewCard
          v-else
          v-for="post in filteredPosts"
          :key="post.id"
          :post="post"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const { locale } = useI18n();
const tagFilter = ref("");
const allTags = ref([]);
const allPosts = ref([]);
const loading = ref(true);

const fetchPosts = async () => {
  try {
    const posts = await queryCollection("blog")
      .where("path", "LIKE", `/${locale.value}/blog/%`)
      .order("date", "ASC")
      .all();
    return posts;
  } catch (error) {
    console.error(error);
  } finally {
    loading.value = false;
  }
};

watchEffect(async () => {
  if (!locale.value) return;

  const posts = await fetchPosts();
  allPosts.value = posts;

  // Extract tags if not yet initialized
  if (!posts) return;
  const tagsSet = new Set();
  posts.forEach((post) => {
    if (Array.isArray(post.tags)) {
      post.tags.forEach((tag) => tagsSet.add(tag));
    }
  });
  allTags.value = Array.from(tagsSet);
});

const filteredPosts = computed(() => {
  if (!allPosts.value) return [];
  if (!tagFilter.value) return allPosts.value;
  return allPosts.value.filter((post) => post.tags?.includes(tagFilter.value));
});
</script>
