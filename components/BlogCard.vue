<script setup lang="ts">

const props = defineProps<{
  year: string
  title: string
  url: string
  image: string
}>()

const { year, title, url, image } = toRefs(props)
</script>

<template>
  <div
    class="group relative grid grid-cols-8 gap-4 transition-all sm:items-center sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
    <div
      class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg">
    </div>
    <img alt="Telescope" loading="lazy" width="200" height="48" decoding="async" data-nimg="1"
      class="z-10 col-span-2 rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:col-span-2"
      style="color:transparent"
      srcset="/_next/image?url=%2Fimages%2Fwriting%2Falgolia-search.jpeg&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2Fwriting%2Falgolia-search.jpeg&amp;w=640&amp;q=75 2x"
      :src="image" />
    <div class="z-10 col-span-6">
      <p class="-mt-1 text-sm font-semibold leading-6">{{ year }}</p>
      <h3 class="-mt-1">
        <a class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
          :href="url" rel="noreferrer" aria-label="Integrating Algolia Search with WordPress Multisite">
          <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
          <span>
            {{ title }}
            <UIcon name="i-carbon-arrow-up-right" aria-hidden="true"
              class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
          </span>
        </a>
      </h3>
    </div>
  </div>
</template>