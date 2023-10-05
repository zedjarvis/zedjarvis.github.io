<script setup lang="ts">
import { CSSProperties } from 'nuxt/dist/app/compat/capi';

const parentEl = useParentElement()

const { x, y } = useMouse({ target: parentEl, })


const radialBgStyle = computed((): CSSProperties => {
  return {
    background: `radial-gradient(600px at ${x.value}px ${y.value}px, #36E4DA, transparent 80%)`,
    opacity: .15,
  }
})


</script>

<template>
  <div class="relative group/spotlight">
    <div id="mouseLight" class="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 lg:absolute"
      :style="radialBgStyle" />

    <div
      class="mx-auto min-h-screen max-w-screen-xl px-6 py-12 text-slate-400 font-space bg-[#002937]  md:px-12 md:py-20 lg:px-24 lg:py-0">
      <a href="#content"
        class="content absolute left-0 top-0 block -translate-x-full rounded bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 px-4 py-3 text-sm font-bold uppercase tracking-widest text-white focus-visible:translate-x-0">Skip
        to Main Content</a>
      <slot />
    </div>
  </div>
</template>
