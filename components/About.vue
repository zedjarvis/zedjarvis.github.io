<script setup lang="ts">
const isShow = ref(true);
</script>

<template>
  <div class="font-space text-slate-400">
    <p class="mb-3">
      Hello there 👋, I'm Ced, a
      <RoughNotation :is-show="isShow" type="box" color="#f4f" :padding="1">
        software developer
      </RoughNotation>
      on a mission to unravel the mysteries of coding and problem-solving. The
      love affair with code began back in 2018 with a curious trial on QPython,
      and it has only grown stronger since.
    </p>
    <p class="mb-3">
      From those humble beginnings, I've explored a fascinating array of
      projects, working with a diverse mix of technologies like
      <RoughNotation
        :is-show="isShow"
        type="circle"
        color="#ffde57"
        :padding="2"
      >
        Python
      </RoughNotation>
      , PHP, C,
      <RoughNotation
        :is-show="isShow"
        type="underline"
        color="#f7df1e"
        :padding="1"
      >
        JavaScript
      </RoughNotation>
      ,
      <RoughNotation
        :is-show="isShow"
        type="underline"
        color="#f4f"
        :padding="1"
      >
        TypeScript
      </RoughNotation>
      , and powerful frameworks such as
      <RoughNotation
        :is-show="isShow"
        type="underline"
        color="#f4f"
        :padding="1"
      >
        Django
      </RoughNotation>
      , Nextjs,
      <RoughNotation
        :is-show="isShow"
        type="underline"
        color="#42b883"
        :padding="2"
      >
        Nuxtjs
      </RoughNotation>
      , Laravel, and Express.js.
    </p>
    <p class="mb-3">
      One vital lesson I've learned in this ever-evolving tech landscape is that
      there's always something new to explore. That's what excites me the
      most&mdash;embracing the challenges of continuous learning.
    </p>
    <p>
      Whether you have an exciting opportunity, a life-changing project to
      discuss, or just fancy a chat, I'm only a message away.
    </p>
  </div>
</template>

<style scoped>
/* */
</style>
