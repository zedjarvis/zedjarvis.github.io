<script setup lang="ts">

const isShow = ref(true)
const name = useLocalStorage('visitor-name', '')

</script>

<template>
  <div class="font-space text-slate-400">
    <p class="mb-3">Hello<span class="capitalize">
        {{ name ? ' ' + name : '' }}</span>, I'm delighted to have you here, and I hope our interaction goes far beyond
      these two paragraphs. I am a Passionate Developer based in
      <span class="group/kenya inline-flex lg:cursor-[url('/images/cursor.png'),_pointer] lg:font-medium text-slate-200">
        <span class="sr-only">Kenya</span>
        <span class="group-hover/kenya:text-black transition duration-75 group-hover/kenya:-translate-y-px delay-[50ms]"
          aria-hidden="true">K</span>
        <span class="group-hover/kenya:text-white transition duration-75 group-hover/kenya:-translate-y-px delay-[75ms]"
          aria-hidden="true">e</span>
        <span
          class="group-hover/kenya:text-[#922529] transition duration-75 group-hover/kenya:-translate-y-px delay-[100ms]"
          aria-hidden="true">n</span>
        <span class="group-hover/kenya:text-white transition duration-75 group-hover/kenya:-translate-y-px delay-[125ms]"
          aria-hidden="true">y</span>
        <span
          class="group-hover/kenya:text-[#008c51] transition duration-75 group-hover/kenya:-translate-y-px delay-[150ms]"
          aria-hidden="true">a</span>
      </span>.
      I run my first line of code on QPython in 2018. How did I get there?
      <InlineLink text="- Read More" url="#" /> ...Short story; literaly - And I'm glad that I
      did.
    </p>
    <p class="mb-3">
      Ever since then, I've had the privilege of working on a diverse range of projects spanning multiple technologies
      including Python, PHP, C, C++, JavaScript, TypeScript, and powerful Frameworks like Django, React,
      Vue.js, Svelte, Laravel, and more.
    </p>
    <p class="mb-3">
      One vital lesson I've learned in this ever-evolving tech landscape is that there's always something new to explore,
      but that's the best part cause I'm always eager to embrace the challenge of learning. Whether you have an exciting
      project in mind or simply want to connect, I'm just a message away.
    </p>
    <p>
      <RoughNotation :is-show="isShow" type="underline" color="#f4f169">
        <span>tl;dr</span>
      </RoughNotation>
    </p>
    <p>I'm currently looking for a new role as a developer.
      <RoughNotation :is-show="isShow" type="circle" color="aqua" :padding="2">
        <span> Hire Me?</span>
      </RoughNotation>
    </p>
  </div>
</template>

<style scoped>
/* */
</style>