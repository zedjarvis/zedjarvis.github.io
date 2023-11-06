<script setup lang="ts">
import { MouseParallax, OrbitControls, useGLTF, useProgress } from '@tresjs/cientos';
import { TresCanvas, useRenderLoop } from '@tresjs/core';
import { ACESFilmicToneMapping, BasicShadowMap, SRGBColorSpace } from 'three';
import { reactive, ref } from 'vue';

const { scene } = await useGLTF('/gaming_desktop_pc/scene.gltf', { draco: true })
const { hasFinishLoading, progress, items } = await useProgress()
scene.background = null


const state = reactive({
  shadows: true,
  alpha: true,
  shadowMapType: BasicShadowMap,
  outputColorSpace: SRGBColorSpace,
  toneMapping: ACESFilmicToneMapping,
  toneMappingExposure: 3,
  physicallyCorrectLights: true,
})

const sphereRef = ref()
const isMobile = ref(false)

const { onLoop } = useRenderLoop()

onLoop(({ elapsed }) => {
  if (!sphereRef.value) return
  sphereRef.value.position.y += Math.sin(elapsed) * 0.01
})
</script>

<template>
  <div class="bg-transparent h-[400px] cursor-grab hidden md:flex" :class="{ 'w-[90vw]': isMobile, 'w-[650px]': !isMobile }">
    <TresCanvas v-bind="state" :antialias="true" :preserve-drawing-buffer="true" frameloop="demand">
      <TresPerspectiveCamera :position="[20, 3, 5]" :fov="32" :near="1" :far="100" :aspect="'width/height'" />
      <OrbitControls :enable-zoom="false" :min-polar-angle="Math.PI / 2" :max-polar-angle="Math.PI / 2" />
      <TresHemisphereLight :intensity="0.15" ground-color="black" />
      <TresSpotLight :position="[-20, 50, 10]" :angle="0.12" :penumbra="1" :intensity="1" cast-shadow
        :shadow-mapsize="1024" />
      <TresPointLight :intensity="1" cast-shadow />
      <Suspense>
        <primitive :object="scene" :scale="isMobile ? 0.7 : 1" :position="isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]"
          :rotation="[-0.01, -0.2, -0.1]" />
        <!-- <template #fallback>
          <p>Loading...{{ progress }}</p>
        </template> -->
      </Suspense>
      <MouseParallax :factor="0.5" :ease="3" />
      <TresDirectionalLight :position="[0, 2, 4]" :intensity=".5" cast-shadow />
    </TresCanvas>
  </div>
</template>