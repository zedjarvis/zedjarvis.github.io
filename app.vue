<script setup lang="ts">
useHead({
  titleTemplate: '%s ← Cedrouseroll',
  bodyAttrs: {
    class: 'relative font-space text-slate-400 leading-relaxed bg-[#002937] selection:text-teal-900 selection:bg-teal-300'
  }
})

import { gsap } from 'gsap';

const cursorInnerRef = ref()
const cursorOuterRef = ref()

function updateCursor({ clientX, clientY }: MouseEvent) {
  console.log('animating mouse')
  gsap.set(cursorInnerRef.value, {
    left: clientX,
    top: clientY,
  })

  gsap.to(cursorOuterRef.value, {
    duration: 0.2,
    x: clientX,
    y: clientY,
  });

}


onMounted(() => {
  // requestAnimationFrame(updateCursor)
  useEventListener('mousemove', updateCursor, document)
  useEventListener('mousedown', () => {
    gsap.set([cursorInnerRef.value,], {
      scale: 2.5,
    })
  }, document)
  useEventListener('mouseup', () => {
    gsap.set([cursorInnerRef.value,], {
      scale: 1,
    })
  }, document)
  useEventListener('pointerenter', () => {
    console.log('mousein')
    gsap.set([cursorInnerRef.value, cursorOuterRef.value], {
      opacity: 1,
    })
  }, document)
  useEventListener('pointerleave', () => {
    console.log('mouse out')
    gsap.set([cursorInnerRef.value, cursorOuterRef.value], {
      opacity: 0,
    })
  }, document)
})
</script>

<template>
  <NuxtLayout>
    <div class="cursor hidden md:flex">
      <div ref="cursorInnerRef"
        class="cursor--small pointer-events-none select-none opacity-1 fixed z-50 top-0 left-0 w-2 h-2 rounded-full bg-[#36E4DA]">
      </div>
      <div ref="cursorOuterRef"
        class="cursor--large pointer-events-none select-none opacity-1 fixed z-50 top-0 left-0 w-8 h-8 rounded-full border border-solid border-[#36E4DA]">
      </div>
    </div>
    <NuxtPage />
    <UNotifications />
  </NuxtLayout>
</template>

<style scoped>
.cursor--small,
.cursor--large {
  transform: translate(-50%, -50%);
  /* transition: opacity 0.15s ease-in-out, transform 0.25s ease-in-out; */
}
</style>
