<script setup lang="ts">
import { MouseParallax, OrbitControls, useAnimations, useGLTF } from '@tresjs/cientos';
import { TresCanvas } from '@tresjs/core';
import { BasicShadowMap, NoToneMapping, SRGBColorSpace } from 'three';
import { reactive } from 'vue';


const state = reactive({
  clearColor: '#002937',
  shadows: true,
  alpha: true,
  antialias: true,
  shadowMapType: BasicShadowMap,
  outputColorSpace: SRGBColorSpace,
  toneMapping: NoToneMapping,
})


const { scene, animations } = await useGLTF('/dragon_animation_flying/output.gltf', { draco: true })

const { actions } = useAnimations(animations, scene)

let currentAction = actions.flying

currentAction.play()

</script>

<template>
  <div class="h-16 py-5 px-28 w-full z-[999]">
    <NuxtLink to="/"
      class="group mb-2 inline-flex items-center font-semibold leading-tight text-teal-300 absolute top-0 left-0">
      <UIcon name="i-carbon-arrow-left" class="mr-1 h-4 w-4 transition-transform group-hover:-translate-x-2" />
      Cedrouseroll Omondi
    </NuxtLink>
  </div>
  <TresCanvas v-bind="state" window-size>
    <TresPerspectiveCamera :position="[5, 2, 4]" :fov="20" />
    <OrbitControls :enable-zoom="true" />
    <TresHemisphereLight :intensity="0.15" ground-color="black" />
    <TresSpotLight :position="[-20, 50, 10]" :angle="0.12" :penumbra="1" :intensity="1" cast-shadow
      :shadow-mapsize="1024" />
    <TresPointLight :intensity="1" />
    <Suspense>
      <primitive :object="scene" :scale="1" :position="[0, -3.25, -1.5]"
        :rotation="[-0.01, -0.2, -0.1]" />
      <template #fallback>
        <p>Loading...</p>
      </template>
    </Suspense>
    <MouseParallax :factor="1" :ease="3" />
    <TresAmbientLight :position="[10, 10, 10]" :intensity=".5" color="red" />
    <TresDirectionalLight :position="[0, 2, 4]" :intensity="1" cast-shadow />
  </TresCanvas>
</template>

<style scoped>
#canvas {
  width: 100vw;
  height: 80vh;
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -9999;
}
</style>