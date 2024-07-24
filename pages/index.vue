<template>
    <div>
        <section
            class="relative bg-backgroundMain text-white h-screen w-screen flex items-center justify-center overflow-hidden">

            <!-- <div class="flex-1 h-full">
                <TresCanvas v-bind="gl">
                    <OrbitControls />
                    <TresPerspectiveCamera :position="[11, 11, 11]" />
                    <TresMesh ref="sphereRef">
                    <TresSphereGeometry />
                    <TresMeshNormalMaterial />
                </TresMesh> 
                    <Suspense>
                        <DDDLogo />
                    </Suspense>
                    <TresDirectionalLight color="#F78B3D" :position="[3, 3, 3]" :intensity="1" />
                    <TresAmbientLight :intensity="2" />
                    <TresGridHelper />
                </TresCanvas>

            </div> -->
            <div class="absolute inset-0">
                <img src="/img/home_colorful.jpg" alt="Background Image"
                    class="object-cover object-center w-full h-full" />
                <div class="absolute inset-0 bg-backgroundMain opacity-80"></div>
            </div>

            <!-- Content on Top of Image -->
            <div class="text-center p-8 font-main flex items-center flex-col z-10">
                <svgLogo class="h-48 mb-8" />
                <h1 class="text-5xl font-bold mb-4">DestinationBase is the platform to run your destination
                    digital</h1>
                <p class="text-lg mb-8">Create, configure, engage!</p>
                <div class="relative group">
                    <div
                        class="absolute -inset-1 group-hover:-inset-2 group-hover:opacity-100 transition group-hover:duration-300 duration-1000 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-lg blur opacity-75">
                    </div>
                    <NuxtLink class="ml-2 hover:text-white hover:cursor-pointer" :to="localePath('/contact')"><button
                            class="bg-white text-black px-6 py-3 rounded-lg font-semibold relative group-hover:text-teal-600 tx-xl">Contact
                            us to get started</button></NuxtLink>
                </div>
            </div>
        </section>

        <section class="bg-gray-100" id="section2">
            <FeaturesOverview />
        </section>

        <!-- Section 2 -->
        <section id="section3">
            <CMTFeatures />
        </section>

        <!-- Section 3 -->
        <section class=" bg-gray-100" id="section4">
            <AppFeatures />
        </section>

        <!-- Section 4 -->
        <section class="bg-white" id="section5">
            <Testimonials />
        </section>
    </div>
</template>

<script lang="ts" setup>
import { OrbitControls } from '@tresjs/cientos';
import DDDLogo from '~/components/DDDLogo.vue';
import { BasicShadowMap, SRGBColorSpace, NoToneMapping } from 'three'
import CMTFeatures from '~/components/CMTFeatures.vue';
import AppFeatures from '~/components/AppFeatures.vue';
import FeaturesOverview from '~/components/FeaturesOverview.vue';
import Testimonials from '~/components/Testimonials.vue';


const gl = {
    clearColor: "#82DBC5",
    shadows: true,
    alpha: false,
    shadowMapType: BasicShadowMap,
    outputColorSpace: SRGBColorSpace,
    toneMapping: NoToneMapping,
}

const sphereRef = ref()

const { onLoop } = useRenderLoop()

onLoop(({ elapsed }) => {
    if (sphereRef.value) {
        sphereRef.value.position.y = Math.sin(elapsed)
    }
})


</script>

<style>
#canvas {
    height: 100%;
    width: 50%;
}
</style>