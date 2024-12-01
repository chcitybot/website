<template>
    <LayoutHeader />
    <slot />
    <LayoutFooter />
</template>

<script setup>
const { locale, t } = useI18n();

</script>