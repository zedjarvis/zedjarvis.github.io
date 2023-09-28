<script setup lang="ts">

const props = defineProps<{
  title: string;
  icon: string;
  url: string;
}>();
</script>

<template>
  <a :href="url" target="_blank" rel="noreferer" class="block hover:text-slate-200">
    <span class="sr-only">{{ title }}</span>
    <UIcon :name="icon" style="font-size: 24px;"></UIcon>
  </a>
</template>