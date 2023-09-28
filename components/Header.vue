<script setup lang="ts">

const props = defineProps<{
  activeSection?: string;
}>();

const show = ref(true)
</script>

<template>
  <header class="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
    <div>
      <h1 class="font-space drop-shadow-lg text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
        <NuxtLink to="/">
          Cedrouseroll Omondi
        </NuxtLink>
      </h1>
      <h2 class="font-space mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
        A Full-Stack Software developer
      </h2>
      <p class="font-space mt-4 max-w-xs leading-normal">
        <span class="italic">"No Man chooses
          <RoughNotation :is-show="show" type="strike-through" color="red" :padding="2">
            <span>evil</span>
          </RoughNotation>
          because it is evil; He only mistakes it for
          <RoughNotation :is-show="show" type="underline" color="#f4f" :padding="2">
            <span>happiness,</span>
          </RoughNotation>
          the
          <RoughNotation :is-show="show" type="highlight" color="#f4f169" :padding="0">
            <span class="text-slate-500">good</span>
          </RoughNotation>
          He seeks"
        </span> — Mary Shelly
      </p>
      <nav class="nav hidden lg:block">
        <ul class="mt-16 w-max font-space">
          <li class="m-0">
            <a class="group flex items-center py-3 active" href="#about">
              <span
                class="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
              <span
                class="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">About</span>
            </a>
          </li>
          <li>
            <a class="group flex items-center py-3" href="#experience">
              <span
                class="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
              <span
                class="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Experience</span>
            </a>
          </li>
          <li>
            <a class="group flex items-center py-3" href="#about">
              <span
                class="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
              <span
                class="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Projects</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
    <ul class="mt-8  flex items-center" aria-label="Social media">
      <li class="mr-5">
        <a href="https://github.com/zedjarvis" target="_blank" rel="noreferer" class="block hover:text-slate-200">
          <span class="sr-only">Github</span>
          <UIcon name="i-carbon-logo-github" style="font-size: 24px;"></UIcon>
        </a>
      </li>
      <li class="mr-5">
        <a href="#" target="_blank" rel="noreferer" class="block hover:text-slate-200">
          <span class="sr-only">Linkedin</span>
          <UIcon name="i-carbon-logo-linkedin" style="font-size: 24px;"></UIcon>
        </a>
      </li>
      <li class="mr-5">
        <a href="#" target="_blank" rel="noreferer" class="block hover:text-slate-200">
          <span class="sr-only">Twitter</span>
          <UIcon name="i-carbon-logo-twitter" style="font-size: 24px;"></UIcon>
        </a>
      </li>
      <li class="mr-5">
        <a href="mailto:omondicedo@gmail.com" rel="noreferer" class="block hover:text-slate-200">
          <span class="sr-only">Gmail</span>
          <UIcon name="i-carbon-email" style="font-size: 24px;"></UIcon>
        </a>
      </li>
    </ul>
  </header>
</template>

<style scoped>
.logo {
  filter: drop-shadow(0 0 2em #e3ff64aa);
}
</style>
