<template>
  <div class="p-2 font-semibold rounded-md text-white text-xs" :class="containerClasses">
    {{ tag }}
  </div>
</template>

<script lang="ts" setup>
defineProps({
    tag: String,
    containerClasses: String

})
</script>

<style>

</style>