<script setup lang="ts">
useHead({
  titleTemplate: "%s ← Cedrouseroll Omondi",
  bodyAttrs: {
    class:
      "relative font-space text-slate-400 leading-relaxed bg-[#002937] selection:text-teal-900 selection:bg-teal-300",
  },
});

import { gsap } from "gsap";
// import { CSSProperties } from 'nuxt/dist/app/compat/capi';
import type { CSSProperties } from "vue";

const cursorInnerRef = ref();
const cursorOuterRef = ref();

const { x, y } = usePointer();
const isLeft = usePageLeave();

// hide custom cursor when mouse leaves page
const cursorStyle = computed((): CSSProperties => {
  return {
    opacity: isLeft.value ? 0 : 1,
  };
});

function updateCursor() {
  console.log("animating mouse");
  gsap.set(cursorInnerRef.value, {
    left: x.value,
    top: y.value,
  });

  gsap.to(cursorOuterRef.value, {
    duration: 0.2,
    x: x.value,
    y: y.value,
  });
}

onMounted(() => {
  // requestAnimationFrame(updateCursor)
  useEventListener("mousemove", updateCursor, document);
});
</script>

<template>
  <NuxtLayout>
    <div class="cursor hidden md:flex">
      <div
        ref="cursorInnerRef"
        class="cursor--small pointer-events-none select-none fixed z-50 top-0 left-0 w-2 h-2 rounded-full bg-[#36E4DA]"
        :style="cursorStyle"
      ></div>
      <div
        ref="cursorOuterRef"
        class="cursor--large pointer-events-none select-none fixed z-50 top-0 left-0 w-8 h-8 rounded-full border border-solid border-[#36E4DA]"
        :style="cursorStyle"
      ></div>
    </div>
    <NuxtPage />
    <!-- <UNotifications /> -->
  </NuxtLayout>
</template>

<style scoped>
.cursor--small,
.cursor--large {
  transform: translate(-50%, -50%);
  /* transition: opacity 0.15s ease-in-out, transform 0.25s ease-in-out; */
}
</style>
