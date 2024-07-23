<template>
    <header class="bg-black text-white p-4 h-30 flex fixed top-0 z-10 w-full">
        <div class="flex w-full items-center justify-between max-w-7xl mx-auto rounded-lg border p-4">
            <svgLogoBanner />
            <div class="text-lg ml-10 text-teal-200">
                <a class="block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4">
                    {{ $t("features") }}
                </a>
                <a lass="block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4">
                    For Destinations
                </a>
                <a class="block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4">
                    For Visitors
                </a>
                <a class="block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4">
                    Case Studies
                </a>
                <a class="block mt-4 lg:inline-block lg:mt-0 hover:text-white">
                    About
                </a>
            </div>
            <LanguageSwitcher />
        </div>
    </header>
    <slot />
</template>

<script setup>
const { locale, t } = useI18n();
const isOpen = ref(false);

const toggleDropdown = () => {
    isOpen.value = !isOpen.value;
};

const switchLocale = (code) => {
    locale.value = code;
    isOpen.value = false;
};

const currentLocaleName = computed(() => {
    const current = $i18n.locales.find((l) => l.code === locale.value);
    return current ? current.name : 'Language';
});

</script>