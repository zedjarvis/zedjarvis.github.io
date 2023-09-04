<script setup lang="ts">
import VueWriter from 'vue-writer';

// variables
const { height } = useWindowSize()
const { y } = useWindowScroll()
const { smAndDown } = useDisplay()

// computed refs
const wHeight = computed(() => smAndDown ? 'auto' : `${height.value - 64}px`)
const isScrolling = computed(() => y.value > 3)
// seo
useHead({
  title: 'Home',
})

</script>
<template>
  <section id="hero">
    <VSheet class="d-flex align-center" style="background-color: rgb(var(--v-theme-background));">
      <VContainer class="text-center position-relative" :style="{ height: `${height - 64}px` }">
        <VCard rounded="0" :elevation="0" class="pt-14 mt-md-8 bg-transparent">
          <h1 class="mb-3 mb-md-1">
            <VueWriter class="intro-text" :array="['Hello, World! My name is...']" :iterations="1" :typeSpeed="70"
              caret="underscore" />
          </h1>
          <h2>
            <VueWriter class="name-text" :style="{ fontSize: `${smAndDown ? 3.125 : 5}rem` }"
              :array="['Cedrouseroll Omondi.']" :iterations="1" :typeSpeed="100" :start="3000" caret="underscore" />
          </h2>
          <h3 class="h-100">
            <VueWriter class="about-text mt-5 mt-md-2" :style="{ fontSize: `${smAndDown ? 3 : 4}rem` }"
              :array="['AI enthusiast,', 'Pythonista,', 'Back-End Developer,', 'Front-End Developer,', 'A Full-Stack Software Developer.']"
              :start="6000" :iterations="1" :typeSpeed="100" :eraseSpeed="50" caret="underscore" />
          </h3>
          <TechStack />
        </VCard>
        <div v-if="!isScrolling" id="scroll-down" class="scroll-down d-none d-md-flex">
          <a><span></span> </a>
        </div>
      </VContainer>
    </VSheet>
  </section>
</template>

<style lang="scss">
.intro-text.is-typed {
  font-family: SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, monospace;
  font-size: 16px;
  font-weight: normal;

  .typed {
    color: rgb(var(--v-theme-primary));
  }

  .underscore {
    display: none;
    width: 1px;
    height: 100%;
    align-items: flex-end;
    background-color: rgb(var(--v-theme-primary));
    animation: rocking 1s ease-in-out 0s infinite;
  }
}

.name-text.is-typed {
  font-family: 'Space Grotesk' !important;
  font-weight: 600;
  font-variation-settings: 'wght' 600;
  line-height: 1.1;

  .typed {
    color: rgb(var(--v-theme-primary-text));
  }

  .underscore {
    display: none;
    width: 1px;
    height: 100%;
    align-items: flex-end;
    background-color: rgb(var(--v-theme-primary));
    animation: rocking 1s ease-in-out 0s infinite;
  }
}

.about-text.is-typed {
  font-family: 'Space Grotesk';
  font-weight: 600;
  font-variation-settings: 'wght' 600;
  line-height: 1.1;

  .typed {
    color: rgb(136, 146, 176);
  }

  .underscore {
    display: inline-block;
    opacity: 0;
    width: 1px;
    height: 100%;
    align-items: flex-end;
    background-color: rgb(var(--v-theme-primary));
    animation: rocking 1s ease-in-out 0s infinite;
  }
}

@keyframes blink {
  49% {
    background-color: rgb(var(--v-theme-primary));
  }

  50% {
    background-color: transparent;
  }

  99% {
    background-color: transparent;
  }
}

@keyframes rocking {

  0%,
  100% {
    transform: rotateZ(-10deg);
  }

  50% {
    transform: rotateZ(10deg);
  }
}

.sroll-down {
  position: relative;
  width: 100%;
  height: 100%;

  &::after {
    position: absolute;
    bottom: 0;
    left: 0;
    content: "";
    width: 100%;
    height: 80%;
  }
}

.scroll-down a {
  cursor: pointer;
  position: absolute;
  bottom: 20px;
  left: 50%;
  z-index: 2;
  display: inline-block;
  transform: translate(0, -50%);
  color: rgb(var(--v-theme-primary));
  font: normal 400 20px/1 "Josefin Sans", sans-serif;
  letter-spacing: 0.1em;
  text-decoration: none;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.5;
  }
}

#scroll-down a {
  padding-top: 16px;

  span {
    position: absolute;
    top: 0;
    left: 50%;
    width: 20px;
    height: 20px;
    margin-left: -12px;
    border-left: 1px solid rgb(var(--v-theme-primary));
    border-bottom: 1px solid rgb(var(--v-theme-primary));
    transform: rotate(-45deg);
    animation: sdb04 2s infinite;
    box-sizing: border-box;
  }
}

@keyframes sdb04 {

  0%,
  40% {
    transform: rotate(-45deg) translate(0, 0);
  }

  20% {
    transform: rotate(-45deg) translate(-10px, 10px);
  }
}
</style>
