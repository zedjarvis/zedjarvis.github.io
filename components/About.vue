<script setup lang="ts">

const isShow = ref(true)

</script>

<template>
  <div class="font-space text-slate-400">
    <p class="mb-3">Hey there, I'm Ced, a
      <RoughNotation :is-show="isShow" type="box" color="#f4f" :padding="1">
        software developer
      </RoughNotation>
      on a mission to unravel the mysteries of coding and problem-solving.
      The love affair with code began back in 2018 with a curious trial on QPython. Little did I know, it'd mark the
      start of a bond that's only grown stronger since.
    </p>
    <p class="mb-3">
      From those humble beginnings, I've delved into a fascinating array of projects, diving into an eclectic mix of
      technologies like
      <RoughNotation :is-show="isShow" type="circle" color="#ffde57" :padding="2">
        Python
      </RoughNotation>
      , PHP, C,
      <RoughNotation :is-show="isShow" type="underline" color="#f7df1e" :padding="1">
        JavaScript
      </RoughNotation>
      ,
      <RoughNotation :is-show="isShow" type="underline" color="#f4f" :padding="1">
        TypeScript
      </RoughNotation>
      , and heavyweight frameworks such as
      <RoughNotation :is-show="isShow" type="underline" color="#f4f" :padding="1">
        Django
      </RoughNotation>
      , React,
      <RoughNotation :is-show="isShow" type="circle" color="#42b883" :padding="2">
        Vue.js
      </RoughNotation>
      , Laravel, and Express.js.
    </p>
    <p class="mb-3">
      One vital lesson I've learned in this ever-evolving tech landscape is that there's always something new to explore,
      but that's the best part cause I'm always eager to embrace the challenge of learning.
    </p>
    <p>
      Whether you've got an exciting project in mind or just fancy a chat, I'm only a message away. Currently seeking
      a new role in the developer realm. I'm up for the challenge!
      <RoughNotation :is-show="isShow" type="circle" color="aqua" :padding="2">
        <span> Hire me.</span>
      </RoughNotation>
    </p>
  </div>
</template>

<style scoped>
/* */
</style>