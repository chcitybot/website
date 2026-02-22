<template>
  <div class="font-main antialiased text-gray-900">
    <LayoutHeader />
    <main>
      <NuxtPage />
    </main>
    <LayoutFooter />
  </div>
</template>

<script setup>
import { useScrollReveal } from '~/composables/useScrollReveal'
useScrollReveal()
</script>
