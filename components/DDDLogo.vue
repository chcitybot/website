<template>
    <primitive :object="model" />

</template>

<script lang="ts" setup>
const { scene: model, animations } = await useGLTF(
    '3dmodels/bunny.gltf',
)

const { actions } = useAnimations(animations, model)

const currentAction = ref(actions.Greeting)
currentAction.value.play()

</script>

<style lang="postcss" scoped></style>
