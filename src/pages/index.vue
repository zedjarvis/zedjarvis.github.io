<script setup lang="ts">
import { ref, computed } from 'vue';
import { useWindowSize } from '@vueuse/core';
import { useDisplay } from 'vuetify';

import VueTyper from "vue3-typer"
import "vue3-typer/dist/vue-typer.css"


const nameTyped = ref(false);
const { width, height } = useWindowSize()

const waitTime = computed(() => nameTyped.value ? 1000 : 4500)
const { xs } = useDisplay()

const nameCompleted = () => {
  nameTyped.value = true
}

</script>
<template>
  <VSheet class="d-flex justify-center text-center" style="background-color: rgb(var(--v-theme-background));">
    <VContainer class="text-center" style="position: relative;" :style="{ height: `${height - 64}px` }">
      <VCard rounded="0" :elevation="0" class="pt-14 mt-8 bg-transparent">
        <h1>
          <VueTyper class="intro-text" text="Hello, World! My name is..." :repeat="0" />
        </h1>
        <h2>
          <VueTyper @completed="nameCompleted" class="name-text" :style="{fontSize: `${ xs ? 1.85 : 2.5}rem`}" text="Cedrouseroll Omondi." :repeat="0"
            :pre-type-delay='2500' />
        </h2>
        <h3>
          <VueTyper class="about-text" :style="{fontSize: `${ xs ? 1.3 : 1.875}rem`}"
            :text="['AI enthusiast,', 'Pythonista,', 'Back-End Developer,', 'Front-End Developer,', 'A Full-Stack Software Developer.']"
            :pre-type-delay='waitTime' :erase-delay="100" :pre-erase-delay='2000' :repeat="0" erase-style="select-back"
            :erase-on-complete="false" caret-animation="smooth" />
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
.intro-text.vue-typer {
  font-family: SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, monospace;
  font-size: 16px;
  font-weight: 100;

  .char.typed {
    color: rgb(var(--v-theme-primary));
  }

  .caret {
    background-color: rgb(var(--v-theme-primary));
    animation: rocking 1s ease-in-out 0s infinite;
  }
}

.name-text.vue-typer {
  font-family: 'Space Grotesk', Ubuntu, sans-serif !important;
  font-weight: 700;
  font-variation-settings: 'wght' 700;

  .char.typed {
    color: rgb(var(--v-theme-on-background));
  }

  .caret {
    background-color: rgb(var(--v-theme-primary));
    animation: rocking 1s ease-in-out 0s infinite;
  }
}

.about-text.vue-typer {
  font-family: 'Space Grotesk', Ubuntu, sans-serif !important;
  font-weight: 500;
  font-variation-settings: 'wght' 500;

  .char.typed {
    color: rgb(var(--v-theme-on-background));
  }

  .caret {
    background-color: rgb(var(--v-theme-primary));
    animation: rocking 1s ease-in-out 0s infinite;
  }
}

.vue-typer .char.selected {
  color: #e91e63;
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
