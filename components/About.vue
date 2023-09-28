<script setup lang="ts">

const isShow = ref(true)
const name = useLocalStorage('visitor-name', '')

</script>

<template>
  <div class="font-space text-slate-400">
    <p class="mb-3">Hello<span class="capitalize">
        {{ name ? ' ' + name : '' }}</span>, I'm thrilled that you are here. I Hope our interaction goes beyond these 2
      Paragraphs. I am a Developer from
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
      I run my first line of code on QPython in 2018. How did I get there? ...Short story; literaly - And I'm glad that I
      did.
    </p>
    <p class="mb-3">Fast-foward to today,I had the plasure of interacting
      into the rabbit hole of coding and web development. Fast-forward to today, and I’ve had the privilege of
      building software for an <a class="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
        href="https://us.mullenlowe.com/" target="_blank" rel="noreferrer">advertising agency</a>, a<!-- --> <a
        class="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300" href="https://starry.com/"
        target="_blank" rel="noreferrer">start-up</a>, a<!-- --> <a
        class="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
        href="https://scout.camd.northeastern.edu/" target="_blank" rel="noreferrer">student-led design studio</a>,
      and a<!-- --> <a class="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
        href="https://www.apple.com/apple-music/" target="_blank" rel="noreferrer">huge corporation</a>.
    </p>
    <p class="mb-3">
      The most important thing I've learnt in this constantly evolving world of tech is that there is so much to learn,
      but that's the best part cause I'm always ready to learn. Get in touch if you have a project, an opportunity or just
      want to Connect.
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