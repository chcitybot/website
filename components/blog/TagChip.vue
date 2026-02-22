<template>
  <div class="px-3 py-1 font-medium rounded-full text-xs" :class="containerClasses">
    {{ tag }}
  </div>
</template>

<script lang="ts" setup>
defineProps({
  tag: String,
  containerClasses: String,
})
</script>
