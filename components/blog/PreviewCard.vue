<template>
    <NuxtLink :to="post.path" >
        <div class="rounded-lg border-2 shadow-md h-full hover:shadow-lg hover:shadow-bot_dark_blue">
            <img :src="`/img/${post.image}`" class="w-full rounded-t-lg object-cover" :alt="`image for ${post.title} article`" />
            <div class="p-4">
                <h2 class="text-2xl font-bold text-bot_dark_blue">{{ post.title }}</h2>
                <p class="mt-4 font-medium text-gray-500">{{ post.description }}</p>
            </div>
        </div>
    </NuxtLink>
</template>

<script  setup>
const {post} = defineProps({
    post: Object
})
</script>

<style>

</style>