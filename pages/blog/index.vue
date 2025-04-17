<template>
  <div>
    <div class="w-full py-40 bg-gray-100 px-4">
      <h1 class="text-6xl font-bold text-center text-bot_pink">Einblicke</h1>
    </div>
    <div
      class="flex flex-col max-w-7xl bg-white rounded-t-3xl shadow-md -mt-20 mx-auto p-10"
    >
      <!-- Tag Filter Dropdown -->
      <div class="py-4">
        <label class="font-bold text-bot_pink">Filter by Topic:</label>
        <select v-model="tagFilter" class="ml-2 p-2 border rounded">
          <option value="">All</option>
          <option v-for="tag in allTags" :key="tag" :value="tag">
            {{ tag }}
          </option>
        </select>
      </div>
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch gap-10"
      >
        <BlogPreviewCard
          v-for="post in filteredPosts"
          :key="post.id"
          :post="post"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const tagFilter = ref("");
const allTags = ref([]);

const { data: allPosts } = await useAsyncData("blog", () =>
  queryCollection("blog").order("date", "DESC").all()
);

const filteredPosts = computed(() => {
  if (!allPosts.value) return [];
  if (!tagFilter.value) return allPosts.value;
  return allPosts.value.filter((post) => post.tags?.includes(tagFilter.value));
});

watch([tagFilter, filteredPosts], () => {
  console.log("Tag filter is now:", tagFilter.value);
  console.log("Filtered posts:", filteredPosts.value);
});

watchEffect(() => {
  if (allPosts.value && allTags.value.length === 0) {
    const tagsSet = new Set();
    allPosts.value.forEach((post) => {
      if (Array.isArray(post.tags)) {
        post.tags.forEach((tag) => tagsSet.add(tag));
      }
    });
    allTags.value = Array.from(tagsSet);
  }
});
</script>
