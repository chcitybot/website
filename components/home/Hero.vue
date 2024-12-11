<script lang="ts" setup>

</script>

<template>
    <section
        class="relative text-white h-screen w-screen flex items-center justify-center overflow-hidden">

        <!-- Background image and blue opacity layer -->
        <div class="absolute inset-0">
            <img src="/img/bot_hero_image.png" alt="Background Image" class="object-cover object-center w-full h-full" />
            <div class="absolute inset-0 bg-bot_dark_blue opacity-60"></div>
        </div>

        <!-- Content on Top of Image -->
        <div class="text-center p-8 font-main flex items-center flex-col z-10">
            <svgBotWithText class="h-[200px] w-[200px] lg:h-[400px] lg:w-[400px]" :text-fill-color="'#f2b4b4'"/>
            <h1 class="text-3xl lg:text-5xl font-bold mb-4">Die Plattform für die digitale Präsenz eurer Stadt/Destination</h1>
            <p class="text-xl mb-8">Kreiert, konfiguriert und engagiert nach eurem Gusto!</p>
            <div class="relative group">
                <div
                    class="absolute -inset-1 group-hover:-inset-2 group-hover:opacity-100 transition group-hover:duration-300 duration-1000 bg-gradient-to-r from-bot_salmon to-bot_pink rounded-lg blur opacity-75">
                </div>
                <NuxtLink class="ml-2 hover:text-white hover:cursor-pointer" :to="'/contact'">
                    <button class="bg-white text-black px-6 py-3 rounded-lg font-semibold relative group-hover:text-bot_pink tx-xl">
                        Durchstarten
                    </button>
                </NuxtLink>
            </div>
        </div>
    </section>
</template>

<style lang="css" scoped>
</style>
