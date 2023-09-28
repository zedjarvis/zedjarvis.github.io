<script setup lang="ts">

const props = defineProps<{
  title: string
  image: string
  url?: string
  body?: string
  techStack: string[]
  opensource?: boolean
}>()


const { title, image, url, body, techStack, opensource } = toRefs(props)
</script>

<template>
  <div
    class="group font-space relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
    <div
      class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-[#1a3a46]/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg">
    </div>
    <div class="z-10 sm:order-2 sm:col-span-6">
      <h3>
        <a class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
          :href="url" target="_blank" rel="noreferrer" aria-label="Spotify Profile">
          <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
          <span class="inline-block">{{ title }}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
              class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
              aria-hidden="true">
              <path fill-rule="evenodd"
                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                clip-rule="evenodd"></path>
            </svg>
          </span>
        </a>
        <div v-if="opensource">
          <div class="text-slate-500" aria-hidden="true">open.source.contribution</div>
        </div>
      </h3>
      <p class="mt-2 text-sm leading-normal">
        {{ body }}
      </p>
      <!-- <a class="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300"
        href="https://github.com/bchiang7/spotify-profile" target="_blank" rel="noreferrer"
        aria-label="570 stars on GitHub"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
          class="mr-1 h-3 w-3" aria-hidden="true">
          <path fill-rule="evenodd"
            d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
            clip-rule="evenodd"></path>
        </svg><span>570</span></a> -->
      <ul class="mt-2 flex flex-wrap" aria-label="Technologies used:">
        <li v-for="(item, i) in  techStack" :key="i" class="mr-1.5 mt-2">
          <Pill :text="item" />
        </li>
      </ul>
    </div>
    <NuxtImg placeholer quality="100" alt="" loading="lazy" width="200" decoding="async" data-nimg="1"
      class="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
      style="color:transparent" :src="image" />
  </div>
</template>