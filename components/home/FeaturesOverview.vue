<template>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-main py-10">
        <div>
            <h1 class="text-2xl lg:text-4xl my-8 font-bold text-center">A central hub to manage all your
                content and
                turn it into
                seamless
                guest experiences.</h1>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
            <!-- User Group 1 -->
            <div class="bg-white rounded-lg shadow-md p-6">
                <h2 class="text-2xl font-bold text-gray-800 mb-2 text-teal-600">For Destinations</h2>
                <p class="my-4"> DestinationBase offers a cloud admin tool to manage points of interest,
                    tours, events and special offers under one roof.</p>
                <ul class="space-y-3 list-disc">
                    <li class="flex">
                        <div>
                            <h3 class="text-lg font-semibold text-gray-900">All your data at your fingertips</h3>
                            <p class="text-gray-600">Keep full control and oversight over all your centrally managed
                                content.</p>
                        </div>
                    </li>
                    <li class="flex">
                        <div>
                            <h3 class="text-lg font-semibold text-gray-900">Analytics tools to improve your guest
                                experiences</h3>
                            <p class="text-gray-600">Learn from your data and improve your offerings accordingly.</p>
                        </div>
                    </li>
                    <li class="flex items-start">
                        <div>
                            <h3 class="text-lg font-semibold text-gray-900">Cost efficient and flexible</h3>
                            <p class="text-gray-600">Why develop your own application if you can license it flexibly for
                                a fraction of the cost while maintining full control over your data and brand!?</p>
                        </div>
                    </li>
                </ul>
                <div class="relative max-w-min group mt-8 mx-auto">
                    <div
                        class="absolute -inset-0.5 group-hover:-inset-1 group-hover:opacity-100 transition group-hover:duration-300 duration-1000 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-lg blur opacity-75">
                    </div>
                    <button @click.prevent="scrollToSection('section3')"
                        class="bg-white text-black px-6 py-3 rounded-lg font-semibold leading-none relative group-hover:text-teal-600">More
                        Details</button>
                </div>
            </div>
            <!-- User Group 2 -->
            <div class="bg-white rounded-lg shadow-md p-6 relative">
                <h2 class="text-2xl font-bold text-teal-600">For Destination Visitors</h2>
                <p class="my-4">DestinationBase offers a mobile app to seamlessly explore a destination in many
                    different
                    ways.</p>
                <ul class="space-y-3 ">
                    <li class="flex">
                        <div>
                            <h3 class="text-lg font-semibold text-gray-900">One app for all destinations</h3>
                            <p class="text-gray-600">One app, many destionations and
                                experiences.</p>
                        </div>
                    </li>
                    <li class="flex items-start">
                        <div>
                            <h3 class="text-lg font-semibold text-gray-900">Seamless and wholistic experience</h3>
                            <p class="text-gray-600">One app for the full journey. From planing, selection, navigation
                                to detailed infos on site.
                            </p>
                        </div>
                    </li>
                    <li class="flex items-start">
                        <div>
                            <h3 class="text-lg font-semibold text-gray-900">Personalized</h3>
                            <p class="text-gray-600">Personalized suggestions based on preferences and a range of
                                different options how to explore. AI powered of course!
                            </p>
                        </div>
                    </li>
                </ul>
                <div class="relative max-w-min group mt-8 mx-auto">
                    <div
                        class="absolute -inset-0.5 group-hover:-inset-1 group-hover:opacity-100 transition group-hover:duration-300 duration-1000 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-lg blur opacity-75">
                    </div>
                    <button @click.prevent="scrollToSection('section4')"
                        class="bg-white text-black px-6 py-3 rounded-lg font-semibold leading-none relative group-hover:text-teal-600">More
                        Details</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    const yOffset = -window.innerHeight / 2 + element.getBoundingClientRect().height / 4;
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({
        top: y,
        behavior: 'smooth'
    });
}
</script>

<style lang="postcss" scoped></style>
