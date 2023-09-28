<script setup lang="ts">
import type { Fn } from '@vueuse/core';
import { gsap, TimelineLite } from 'gsap';
import { CSSProperties } from 'nuxt/dist/app/compat/capi';

const timeline = new TimelineLite()

const clickables = ref()
const color = ref('94, 234, 212')
const coords = ref({ x: 0, y: 0 })
const cursorOuterRef = ref()
const cursorInnerRef = ref()
const requestRef = ref()
const previousTimeRef = ref()
const isActive = ref(false)
const isVisible = ref(false)
const isActiveClickable = ref(false)


const outerScale = computed(() => isActive.value ? 5 : 1)
const innerScale = computed(() => isActive.value ? 0.7 : 1)

const cursor = computed((): CSSProperties => {
  return {
    zIndex: 99999,
    position: 'fixed',
    opacity: 1,
    pointerEvents: 'none',
    transition: 'opacity 0.15s ease-in-out, transform 0.15s ease-in-out',
  }
})

const cursorInner = computed((): CSSProperties => {
  return {
    opacity: isVisible.value ? 1 : 0,
    position: 'fixed',
    left: 0,
    top: 0,
    mixBlendMode: 'difference',
    userSelect: 'none',
    borderRadius: '100%',
    width: '8px', // Set your innerSize here
    height: '8px', // Set your innerSize here
    pointerEvents: 'none',
    backgroundColor: `rgba(${color.value}, 1)`, // Set your color here
    transform: 'translate(-50%, -50%)',
    // transform: isActiveClickable.value ? `scale(${innerScale.value * 1.3})` : `scale(${innerScale.value})`,
    transition: 'opacity 0.15s ease-in-out, transform 0.25s ease-in-out',
  }
})

const cursorOuter = computed((): CSSProperties => {
  return {
    opacity: isVisible.value ? 1 : 0,
    position: 'fixed',
    left: 0,
    top: 0,
    mixBlendMode: 'difference',
    userSelect: 'none',
    borderRadius: '100%',
    pointerEvents: 'none',
    width: '8px', // Set your outerSize here
    height: '8px', // Set your outerSize here
    backgroundColor: `rgba(${color.value}, 0.5)`, // Set your color and outerAlpha here
    transform: 'translate(-50%, -50%)',
    // transform: isActiveClickable.value ? `scale(${outerScale.value * 1.3})` : `scale(${outerScale.value})`,
    transition: 'opacity 0.15s ease-in-out, transform 0.15s ease-in-out',
  }
})

function useEventListener(_eventName: string, _handler: Function, _element = document): Fn | undefined {
  // const savedHandler = ref(_handler)

  if (!(_element && _element.addEventListener)) return
  const eventListener = (event: Event) => _handler(event)
  _element.addEventListener(_eventName, eventListener)
  return () => {
    _element.removeEventListener(_eventName, eventListener)
  }
}


function onMouseMove({ clientX, clientY }: MouseEvent) {
  coords.value = { x: clientX, y: clientY }
  cursorInnerRef.value.style.top = clientY + 'px';
  cursorInnerRef.value.style.left = clientX + 'px';
}

function animateOuterCursor(time: number) {
  if (previousTimeRef.value !== undefined) {
    timeline.to(cursorOuterRef.value, {
      duration: 0.0005,
      x: coords.value.x,
      y: coords.value.y,
      // ease: 'none',
    })
  }

  previousTimeRef.value = time
  requestAnimationFrame(animateOuterCursor);
}

function onMouseDown() {
  isActive.value = true;
  gsap.set(cursorInnerRef.value, {
    scale: 0.7
  })
  gsap.set(cursorOuterRef.value, {
    scale: 5
  })
}
function onMouseUp() {
  isActive.value = false;
  gsap.set(cursorInnerRef.value, {
    scale: 1
  })
  gsap.set(cursorOuterRef.value, {
    scale: 1
  })
}
function onMouseEnter() {
  isVisible.value = true;
}
function onMouseLeave() {
  isVisible.value = false;
}

onMounted(() => {
  requestAnimationFrame(animateOuterCursor)

  useEventListener('mousemove', onMouseMove, document);
  useEventListener('mousedown', onMouseDown, document);
  useEventListener('mouseup', onMouseUp, document);
  useEventListener('mouseenter', onMouseEnter, document);
  useEventListener('mouseleave', onMouseLeave, document);

  clickables.value = document.querySelectorAll('a, input[type="submit"], input[type="image"], label[for], select, button, .link');
  clickables.value.forEach((el: any) => {
    el.style.cursor = 'none';
    useEventListener('mouseover', () => {
      isActive.value = true;
    }, el);
    useEventListener('click', () => {
      isActive.value = true;
      isActiveClickable.value = false;
    }, el);
    useEventListener('mousedown', () => {
      isActiveClickable.value = true;
    }, el);
    useEventListener('mouseup', () => {
      isActive.value = true;
    }, el);
    useEventListener('mouseout', () => {
      isActive.value = false;
      isActiveClickable.value = false;
    }, el);
  });
})
</script>


<template>
  <div :style="cursor">
    <div ref="cursorOuterRef" :style="cursorOuter"></div>
    <div ref="cursorInnerRef" :style="cursorInner"></div>
  </div>
</template>

<style>
*, html, body {
  cursor: none;
}
</style>
