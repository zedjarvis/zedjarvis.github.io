<script setup lang="ts">
// utilities
import { ref } from 'vue'

const props = defineProps<{
  isDark: boolean,
  smAndDown: boolean
}>()

const emit = defineEmits<{
  (e: 'toggleTheme'): void
}>()

const drawer = ref<boolean | null>(null)

const toggleDrawer = () => drawer.value = !drawer.value
</script>

<template>
  <VAppBar scroll-behavior="elevate" class="px-md-16" style="background: rgb(var(--v-theme-background));">
    <VAppBarNavIcon :icon="drawer ? 'mdi-close' : 'mdi-menu'" color="primary" class="d-sm-flex d-md-none"
      @click="toggleDrawer" />
    <VAppBarTitle class="name-logo">
      <span class="text-primary">&lt;</span>
      <span v-if="smAndDown">Cr</span>
      <span v-else>CedrouseRoll
        <VTooltip activator="parent" location="bottom">Cedrouseroll Omondi</VTooltip>
      </span>
      <span class="text-primary">/&gt;</span>
    </VAppBarTitle>
    <VSpacer></VSpacer>
    <VBtn variant="outlined" color="primary" class="text-capitalize">Resume &rightarrow;
      <VTooltip activator="parent" location="bottom">Download my Resume</VTooltip>
    </VBtn>
    <VBtn @click="$emit('toggleTheme')" :ripple="false" variant="plain" class="text-capitalize" icon>
      <VIcon :icon="isDark ? 'mdi-weather-sunny' : 'mdi-weather-night'"></VIcon>
      <VTooltip activator="parent" location="bottom" :text="isDark ? 'Activate light mode' : 'Activate dark mode'">
      </VTooltip>
    </VBtn>
  </VAppBar>
  <VNavigationDrawer :height="210" v-model="drawer" temporary location="top" :scrim="false">
    <VList>
      <VListItem title="About"></VListItem>
      <VDivider></VDivider>
      <VListItem title="Experience"></VListItem>
      <VDivider></VDivider>
      <VListItem title="Projects"></VListItem>
      <VDivider></VDivider>
      <VListItem title="Contact"></VListItem>
      <VDivider></VDivider>
    </VList>
  </VNavigationDrawer>
</template>

<style lang="sass" scoped>
$link-font: SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, monospace

.name-logo
  font-family: 'Space Grotesk' !important
  font-weight: 700
  font-size: 20px
  font-variation-settings: 'wght' 700
</style>
