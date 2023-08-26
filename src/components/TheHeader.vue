<script setup lang="ts">
// utilities
import { ref } from 'vue';

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
  <VAppBar scroll-behavior="elevate hide" height="70" class="px-md-16 bg-background">
    <VAppBarNavIcon :icon="drawer ? 'mdi-close' : 'mdi-menu'" color="primary" class="d-sm-flex d-md-none"
      @click="toggleDrawer" />
    <VAppBarTitle class="name-logo">
      <span class="text-primary">&lt;</span>
      <span v-if="props.smAndDown">Cr</span>
      <span v-else>CedrouseR
        <VTooltip activator="parent" location="bottom">Cedrouseroll Omondi</VTooltip>
      </span>
      <span class="text-primary">/&gt;</span>
    </VAppBarTitle>
    <VSpacer></VSpacer>
    <VToolbarItems class="d-none d-md-flex align-center">
      <p class="nav-link ma-3"><span class="mr-2 text-primary">1.</span>About</p>
      <p class="nav-link ma-3"><span class="mr-2 text-primary">2.</span>Portfolio</p>
      <p class="nav-link ma-3"><span class="mr-2 text-primary">3.</span>Blog</p>
      <p class="nav-link ma-3"><span class="mr-2 text-primary">4.</span>Playground</p>
    </VToolbarItems>
    <VBtn @click="$emit('toggleTheme')" :ripple="false" variant="plain" class="text-capitalize" icon>
      <VIcon :icon="props.isDark ? 'mdi-weather-sunny' : 'mdi-weather-night'"></VIcon>
      <VTooltip activator="parent" location="bottom" :text="props.isDark ? 'Activate light mode' : 'Activate dark mode'">
      </VTooltip>
    </VBtn>
    <VBtn rounded="0" variant="outlined" color="primary" class="text-capitalize ma-0" style="font-size: 13px !important;">
      Resume <VIcon>mdi-arrow-right</VIcon>
      <VTooltip activator="parent" location="bottom">Download my Resume</VTooltip>
    </VBtn>
  </VAppBar>
  <VNavigationDrawer :elevation="0" :height="210" v-model="drawer" temporary location="top">
    <VList class="text-center">
      <VListItem title="About"></VListItem>
      <VDivider></VDivider>
      <VListItem title="Portfolio"></VListItem>
      <VDivider></VDivider>
      <VListItem title="Blog"></VListItem>
      <VDivider></VDivider>
      <VListItem title="Playground"></VListItem>
      <VDivider></VDivider>
    </VList>
  </VNavigationDrawer>
</template>

<style lang="scss" scoped>
$link-font: SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, monospace;

.name-logo {
  font-family: 'Space Grotesk' !important;
  font-weight: 600;
  font-size: 20px;
  font-variation-settings: 'wght' 600;
  color: rgb(var(--v-theme-primary-text));
}

.nav-link {
  font-size: 13px;
  font-family: $link-font;
  line-height: 16.9px;
  color: rgb(var(--v-theme-primary-text));

  &:hover {
    color: rgb(var(--v-theme-primary));
  }
}
</style>
