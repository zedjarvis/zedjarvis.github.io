<script setup lang="ts">

const props = defineProps<{
  url: string
  text: string
}>()

const { url, text } = toRefs(props)
</script>

<template>
  <NuxtLink :to="url" class="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300 cursor-pointer" target="_blank"
    rel="noreferrer">
    {{ text }}
  </NuxtLink>
</template>