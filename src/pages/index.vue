<script setup lang="ts">
import { useWindowSize } from '@vueuse/core';
import { useDisplay } from 'vuetify';

import VueWriter from 'vue-writer'


const { width, height } = useWindowSize()
const { xs } = useDisplay()

</script>
<template>
  <VSheet class="d-flex justify-center text-center" style="background-color: rgb(var(--v-theme-background));">
    <VContainer class="text-center" style="position: relative;" :style="{ height: `${height - 64}px` }">
      <VCard rounded="0" :elevation="0" class="pt-14 mt-8 bg-transparent">
        <h1>
          <VueWriter class="intro-text" :array="['Hello, World! My name is...']" :iterations="1" :typeSpeed="70"
            caret="underscore" />
        </h1>
        <h2>
          <VueWriter class="name-text" :style="{ fontSize: `${xs ? 1.85 : 2.5}rem` }" :array="['Cedrouseroll Omondi.']"
            :iterations="1" :typeSpeed="100" :start="3000" caret="underscore" />
        </h2>
        <h3 class="h-100">
          <VueWriter class="about-text" :style="{ fontSize: `${xs ? 1.3 : 1.875}rem` }"
            :array="['AI enthusiast,', 'Pythonista,', 'Back-End Developer,', 'Front-End Developer,', 'A Full-Stack Software Developer.']"
            :start="6000" :iterations="1" :typeSpeed="100" :eraseSpeed="50" caret="underscore" />
        </h3>
        <TechStack />
      </VCard>
      <div id="scroll-down" class="scroll-down d-none d-md-flex">
        <a><span></span> </a>
      </div>
    </VContainer>
  </VSheet>
</template>

<style lang="scss">
.intro-text.is-typed {
  font-family: SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, monospace;
  font-size: 16px;
  font-weight: 100;

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
  font-family: 'Space Grotesk', Ubuntu, sans-serif !important;
  font-weight: 700;
  font-variation-settings: 'wght' 700;

  .typed {
    color: rgb(var(--v-theme-on-background));
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
  font-family: 'Space Grotesk', Ubuntu, sans-serif !important;
  font-weight: 500;
  font-variation-settings: 'wght' 500;

  .typed {
    color: rgb(var(--v-theme-on-background));
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
