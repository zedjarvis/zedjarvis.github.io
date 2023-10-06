<script setup lang="ts">

useHead({
  title: 'Projects'
})

interface Projects {
  year: string
  title: string
  place?: string
  url: string,
  techStack: string[]
  github: boolean,
}

const projects = ref<Projects[]>([
  {
    year: '2023',
    title: 'Vue3-Compare-Image',
    url: 'vue3-compare-image.vercel.app',
    techStack: ['Typescript', 'unbuild', 'Vue', 'HTML', 'CSS'],
    github: false
  },
  {
    year: '2023',
    title: 'Haft Studio Website',
    place: 'Haft Studio',
    url: 'haftstudio-website.vercel.app',
    techStack: ['Vuetify', 'UnoCSS', 'Typescript', 'Vue'],
    github: false
  },
  {
    year: '2023',
    title: 'ProManager Landingpage',
    url: 'pro-manager.vercel.app',
    techStack: ['Vue', 'Typescript', 'Vuetify', 'SCSS'],
    github: false
  },
  {
    year: '2023',
    title: 'ProManager webapp',
    url: 'pro-manager.vercel.app',
    techStack: ['UnoCSS', 'Vue', 'Typescript', 'Mirage', 'SCSS', 'Vuetify'],
    github: false
  },
  {
    year: '2023',
    title: 'Promanger Backend',
    url: 'promanager-backend',
    techStack: ['Python', 'Django', 'Django Rest Framework', 'JWT', 'Postgresql', 'Redis', 'Channels'],
    github: true,
  },
  {
    year: '2023',
    title: 'Personal Portfolio',
    url: 'zedjarvis.github.io',
    techStack: ['Nuxt.js 3', 'Tailwind CSS', 'Three.js', 'Typescript'],
    github: false
  },
  {
    year: '2023',
    title: 'Vuetify 3 Starter template',
    url: 'vuetify3-starter-template',
    techStack: ['Vuetify', 'Typescript'],
    github: true,
  },
  {
    year: '2022',
    title: 'Myles Tours and Travels',
    url: 'myles_tours_and_travel_safaris',
    techStack: ['JQuery', 'HTML', 'CSS', 'Django'],
    github: true,
  },
  {
    year: '2021',
    title: 'Rollindustries',
    url: 'rollindustries',
    techStack: ['Django', 'Jinja2', 'Heroku'],
    github: true,
  },
  {
    year: '2021',
    title: 'Django Blog',
    url: 'blog',
    techStack: ['DJango', 'HTML', 'CSS'],
    github: true,
  },
  {
    year: '2021',
    title: 'Ifarming',
    url: 'ifarming',
    techStack: ['Django', 'HTML', 'CSS'],
    github: true,
  },
  {
    year: '2020',
    title: 'Personal Portfolio v1',
    url: 'landingpage',
    techStack: ['Django', 'heroku'],
    github: true,
  }
])
</script>

<template>
  <div class="lg:py-24 font-space">
    <NuxtLink to="/" class="group mb-2 inline-flex items-center font-semibold leading-tight text-teal-300">
      <UIcon name="i-carbon-arrow-left" class="mr-1 h-4 w-4 transition-transform group-hover:-translate-x-2" />
      Cedrouseroll Omondi
    </NuxtLink>
    <h1 class="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">All Projects</h1>
    <table id="content" class="mt-12 w-full border-collapse text-left">
      <thead class="sticky top-0 z-10 border-b border-slate-300/10 bg-[#002937]/75 px-6 py-5 backdrop-blur">
        <tr>
          <th class="py-4 pr-8 text-sm font-semibold text-slate-200">Year</th>
          <th class="py-4 pr-8 text-sm font-semibold text-slate-200">Project</th>
          <th class="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">Made at</th>
          <th class="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">Built with</th>
          <th class="hidden py-4 pr-8 text-sm font-semibold text-slate-200 sm:table-cell">Link</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(project, i) in projects" :key="i" class="border-b border-slate-300/10 last:border-none">
          <td class="py-4 pr-4 align-top text-sm">
            <div class="translate-y-px">{{ project.year }}</div>
          </td>
          <td class="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
            <div>
              <div class="block sm:hidden">
                <a class="inline-flex items-baseline font-medium leading-tight text-slate-200 focus-visible:text-teal-300 hover:text-slate-200 sm:hidden group/link text-base"
                  :href="`https://${project.url}`" target="_blank" rel="noreferrer" :aria-label="project.title">
                  <span class="inline-block">{{ project.title }}<svg xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20" fill="currentColor"
                      class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                      aria-hidden="true">
                      <path fill-rule="evenodd"
                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                        clip-rule="evenodd"></path>
                    </svg>
                  </span>
                </a>
              </div>
              <div class="hidden sm:block">{{ project.title }}</div>
            </div>
          </td>
          <td class="hidden py-4 pr-4 align-top text-sm lg:table-cell">
            <div class="translate-y-px whitespace-nowrap">{{ project.place }}</div>
          </td>
          <td class="hidden py-4 pr-4 align-top lg:table-cell">
            <ul class="flex -translate-y-1.5 flex-wrap">
              <li v-for="(text, i) in project.techStack" :key="i" class="my-1 mr-1.5">
                <Pill :text="text" />
              </li>
            </ul>
          </td>
          <td class="hidden py-4 align-top sm:table-cell">
            <ul class="translate-y-1">
              <li class="mb-1 flex items-center">
                <a v-if="project.github" :href="`https://github.com/zedjarvis/${project.url}`"
                  class="flex items-center font-medium leading-tight text-sm text-slate-400 hover:text-slate-200 focus-visible:text-teal-300 group/link">
                  GitHub
                  <i class="ml-2 text-[18px] i-carbon-logo-github"></i>
                </a>
                <a v-else
                  class="inline-flex items-baseline font-medium leading-tight text-sm text-slate-400 hover:text-slate-200 focus-visible:text-teal-300 group/link"
                  :href="`https://${project.url}`" target="_blank" rel="noreferrer" :aria-label="project.title">
                  <span>
                    <span>{{ project.url }}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                        class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-0.5"
                        aria-hidden="true">
                        <path fill-rule="evenodd"
                          d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                          clip-rule="evenodd"></path>
                      </svg>
                    </span>
                  </span>
                </a>
              </li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
