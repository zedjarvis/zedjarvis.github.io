<script setup lang="ts">
import { gsap } from 'gsap';
import { CSSProperties } from 'nuxt/dist/app/compat/capi';


const parentEl = useParentElement()

const { x, y } = useMouse({ target: parentEl, })
const cursorInnerRef = ref()
const cursorOuterRef = ref()

const radialBgStyle = computed((): CSSProperties => {
  return {
    background: `radial-gradient(600px at ${x.value}px ${y.value}px, #36E4DA, transparent 80%)`,
    opacity: .15,
    // filter: 'blur(160px)',
  }
})

// const innerCursorStyle = computed((): CSSProperties => {
//   return {
//     top: `${y.value}px`,
//     left: `${x.value}px`,
//   }
// })

function updateCursor() {
  gsap.set(cursorInnerRef.value, {
    left: x.value,
    top: y.value,
  })

  gsap.to(cursorOuterRef.value, {
    duration: 0.2,
    x: x.value,
    y: y.value,
  });
}
onMounted(() => {
  updateCursor()
  useEventListener('mousemove', updateCursor)
  useEventListener('mousedown', () => {
    gsap.set([cursorInnerRef.value, cursorOuterRef.value], {
      scale: 1.15,
    })
  })
  useEventListener('mouseup', () => {
    gsap.set([cursorInnerRef.value, cursorOuterRef.value], {
      scale: 1,
    })
  })
  useEventListener('mouseenter', () => {
    gsap.set([cursorInnerRef.value, cursorOuterRef.value], {
      opacity: 1,
    })
  })
  useEventListener('mouseleave', () => {
    gsap.set([cursorInnerRef.value, cursorOuterRef.value], {
      opacity: 0,
    })
  })
})
</script>

<template>
  <div class="relative group/spotlight">
    <!-- <div id="mouseLight" class="absolute top-0 rounded-full mouse-gradient transition-opacity h-[200px] w-[200px]"
      style="opacity: 1; top: 0px; left: 0px; height: 300px; width: 300px; filter: blur(100px);"></div> -->
    <div id="mouseLight" class="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 lg:absolute"
      :style="radialBgStyle" />
    <div class="cursor hidden lg:flex">
      <div ref="cursorInnerRef"
        class="cursor--small mix-blend-difference pointer-events-none select-none opacity-0 fixed lg:absolute z-30 top-0 left-0 w-2 h-2 rounded-full bg-[#36E4DA]">
      </div>
      <div ref="cursorOuterRef"
        class="cursor--large mix-blend-difference pointer-events-none select-none opacity-0 fixed lg:absolute z-30 top-0 left-0 w-8 h-8 rounded-full border border-solid border-[#36E4DA]">
      </div>
    </div>

    <div
      class="mx-auto min-h-screen max-w-screen-xl px-6 py-12 text-slate-400 font-space bg-[#002937]  md:px-12 md:py-20 lg:px-24 lg:py-0">
      <a href="#content"
        class="content absolute left-0 top-0 block -translate-x-full rounded bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 px-4 py-3 text-sm font-bold uppercase tracking-widest text-white focus-visible:translate-x-0">Skip
        to Main Content</a>
      <slot />
    </div>
  </div>
</template>

<style scoped>
.cursor--small,
.cursor--large {
  transform: translate(-50%, -50%);
}


.test {
  color: rgba(29, 78, 216, .2);
}

.mouse-gradient {
  background: repeating-linear-gradient(to right, #00DC82 0%, #1DE0B1 50%, #36E4DA 100%);
  filter: blur(160px);
  transition-duration: 0.15s;
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style>