<script setup lang="ts">

// props
const props = defineProps<{
  isDark: boolean,
  smAndDown: boolean
}>()

// emmits
const emit = defineEmits<{
  (e: 'toggleTheme'): void
}>()

// variables
const drawer = ref<boolean | null>(null)
const { smAndDown } = useDisplay()
const { y } = useWindowScroll()

// computed refs
const isScrolling = computed(() => y.value > 0)

// functions
const toggleDrawer = () => drawer.value = !drawer.value
</script>

<template>
  <VAppBar scroll-behavior="elevate hide" :height="isScrolling ? '55' : '80'" scroll-threshold="200" class="px-md-16 bg-background">
    <VAppBarTitle>
      <TheLogo />
    </VAppBarTitle>
    <VSpacer></VSpacer>
    <VToolbarItems class="d-none d-md-flex align-center">
      <p class="nav-link ma-3"><span class="mr-2 text-primary">1.</span>About</p>
      <p class="nav-link ma-3"><span class="mr-2 text-primary">2.</span>Projects</p>
      <p class="nav-link ma-3"><span class="mr-2 text-primary">3.</span>Blog</p>
      <p class="nav-link ma-3"><span class="mr-2 text-primary">4.</span>Playground</p>
      <VBtn @click="$emit('toggleTheme')" :ripple="false" variant="plain" class="text-capitalize" icon>
        <VIcon :icon="props.isDark ? 'mdi-weather-sunny' : 'mdi-weather-night'"></VIcon>
        <VTooltip activator="parent" location="bottom"
          :text="props.isDark ? 'Activate light mode' : 'Activate dark mode'">
        </VTooltip>
      </VBtn>
    </VToolbarItems>
    <VBtn to="/resume" variant="outlined" color="primary" class="d-none d-md-flex text-capitalize" style="font-size: 13px !important;">
      Resume <VIcon>mdi-arrow-right</VIcon>
      <VTooltip activator="parent" location="bottom">Download my Resume</VTooltip>
    </VBtn>
    <VAppBarNavIcon :icon="drawer ? 'mdi-close' : 'mdi-menu'" color="primary" class="d-sm-flex d-md-none"
      @click="toggleDrawer" />
  </VAppBar>
  <VNavigationDrawer :elevation="0" :width="320" v-model="drawer" temporary location="top">
    <VList class="text-center">
      <VBtn variant="outlined" color="primary" class="text-capitalize mb-2" style="font-size: 13px !important;">
        Resume <VIcon>mdi-arrow-right</VIcon>
      </VBtn>
      <VDivider></VDivider>
      <VListItem title="About"></VListItem>
      <VDivider></VDivider>
      <VListItem title="Projects"></VListItem>
      <VDivider></VDivider>
      <VListItem title="Blog"></VListItem>
      <VDivider></VDivider>
      <VListItem title="Playground"></VListItem>
      <VDivider></VDivider>
      <VBtn @click="$emit('toggleTheme')" :ripple="false" variant="plain" class="text-capitalize" icon>
        <VIcon :icon="props.isDark ? 'mdi-weather-sunny' : 'mdi-weather-night'"></VIcon>
      </VBtn>
      <VBtn href="https://github.com/zedjarvis" target="_blank" variant="plain" icon>
        <VIcon>mdi-github</VIcon>
      </VBtn>
      <VBtn href="https://www.linkedin.com/in/cedrouseroll-omondi-44b119252/" target="_blank" variant="plain" icon>
        <VIcon>mdi-linkedin</VIcon>
      </VBtn>
    </VList>
  </VNavigationDrawer>
</template>

<style lang="scss" scoped>
$link-font: SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, monospace;


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
