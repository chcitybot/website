<template>
    <div>
        <HomeHero />
        <section class="bg-gray-100" id="section2">
            <HomeFeaturesOverview />
        </section>

        <section id="section3">
            <HomeCMTFeatures />
        </section>
        <section class=" bg-gray-100" id="section4">
            <HomeAppFeatures />
        </section>

        <section class=" bg-gray-100" id="section4">
            <HomeStatistics />
        </section>

        <section class="bg-white" id="section5">
            <HomeTestimonials />
        </section>
    </div>
</template>

<script lang="ts" setup>
// import { BasicShadowMap, SRGBColorSpace, NoToneMapping } from 'three'


// const gl = {
//     clearColor: "#82DBC5",
//     shadows: true,
//     alpha: false,
//     shadowMapType: BasicShadowMap,
//     outputColorSpace: SRGBColorSpace,
//     toneMapping: NoToneMapping,
// }

// const sphereRef = ref()

// const { onLoop } = useRenderLoop()

// onLoop(({ elapsed }) => {
//     if (sphereRef.value) {
//         sphereRef.value.position.y = Math.sin(elapsed)
//     }
// })


</script>

<style>
#canvas {
    height: 100%;
    width: 50%;
}
</style>