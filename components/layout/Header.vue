<script setup>
const { locale, t } = useI18n();

const isMenuOpen = ref(false)

function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value
}

function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    const yOffset = -window.innerHeight / 2 + element.getBoundingClientRect().height / 2;
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({
        top: y,
        behavior: 'smooth'
    });
}
</script>

<template>
    <header class="bg-transparent text-white p-4 h-26 lg:h-30 flex fixed top-0 z-20 w-full">
        <div class="flex w-full justify-between max-w-7xl mx-auto rounded-lg border px-4 bg-backgroundMain">
            <NuxtLink class="hover:text-white" :to="localePath('/')">
                <svgLogoTextBanner class="w-[180px] md:w-[220px] lg:w-[350px]" />
            </NuxtLink>

            <div class="flex  items-center">
                <div class="hidden md:block text-lg ml-10 text-teal-200 items-center text-center font-main">
                    <NuxtLink @click.prevent="scrollToSection('section2')"
                        class="hover:text-white hover:cursor-pointer">{{ $t("features") }}
                    </NuxtLink>
                    <NuxtLink class="ml-4 hover:text-white hover:cursor-pointer" :to="localePath('/contact')">Contact
                    </NuxtLink>
                </div>

                <LayoutLanguageSwitcher :class="isMenuOpen ? 'hidden' : 'block'" />
                <!-- Hamburger Menu Button -->
                <div class="ml-2 -my-2 md:hidden" :class="isMenuOpen ? 'hidden' : 'block'">
                    <button @click="toggleMenu"
                        class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span class="sr-only">Open menu</span>
                        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>

            </div>

            <div v-if="isMenuOpen" class="absolute top-0 inset-x-0 p-4 transition transform origin-top-right md:hidden">
                <div
                    class="rounded-lg pb-4 shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50 font-main">
                    <div class="pb-6 px-4">
                        <div class="flex items-center justify-between">
                            <svgLogoTextBanner class="w-[180px]" textFillColor="#000000" />
                            <div class="-mr-2 flex items-center">
                                <LayoutLanguageSwitcher class="text-black" />
                                <button @click="toggleMenu"
                                    class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                    <span class="sr-only">Close menu</span>
                                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="py-6 px-4 text-black">
                        <NuxtLink @click.prevent="scrollToSection('section2')">Features
                        </NuxtLink>
                    </div>
                    <div class="py-6 px-4 text-black">
                        <NuxtLink class="" :to="localePath('/contact')">Contact</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>
