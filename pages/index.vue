<script setup lang="ts">
// SEO
useHead({
  title: 'Home'
})

// utils

// composables

// plugins

// assets

const greeted = useLocalStorage('greeted', false)
const currentSection = ref()

const {
  isSupported,
  show,
  onShow,
  onError,
} = useWebNotification({
  title: 'Greetings from Ced!',
  body: 'Enjoy your visit.',
  dir: 'auto',
  lang: 'en',
  renotify: true,
  tag: 'greeting',
})

if (isSupported.value && !greeted.value)
  show()

onShow(() => greeted.value = true)
onError(() => console.log('Greeting notification not shown'))

interface Link {
  text: string
  url: string
}

interface Experience {
  startDate: string
  endDate: string
  title: string
  company?: string
  url: string
  body?: string
  links?: Link[]
  techStack: string[]
}

interface Project {
  title: string
  image: string
  url?: string
  body?: string
  techStack: string[]
  opensource?: boolean
}

const experiences = ref<Experience[]>([
  {
    startDate: '2022',
    endDate: 'AUG 2023',
    title: 'Developer',
    company: 'Haft Studio',
    body: 'I took charge of our company\'s online presence by building, deploying and maintaining a modern website. I initially created it using HTML, CSS, and JavaScript, and later revamped it with Vue, Vuetify, and Vite. This upgrade greatly improved the site look and feel. I developed internal programs to help manage, keep record and track projects and expenses. In addition to my development responsibilities, I managed a shared hosting and email accounts, google sites and maps.',
    url: 'https://haftstudio.ke',
    techStack: ['Django', 'DRF', 'Vue.js', 'Nuxt', 'Vuetify', 'Typescript', 'SCSS', 'PHP', 'CPANEL', 'MySQL', 'Git']
  },
  {
    startDate: '2018',
    endDate: 'PRESENT',
    title: 'Software Developer',
    body: 'If I am to show you what I\'ve done, then I believe my journey is part of the experience. All the things that I have learnt and the projects that i\'ve got to work on both formally and informally - it\'s all one big picture.',
    url: '/',
    links: [
      {
        text: 'vue3-compare-image',
        url: 'https://vue3-compare-image.vercel.app'
      },
    ],
    techStack: ['Python', 'C', 'Django', 'Javascript', 'Typescript', 'HTML', 'CSS', 'SASS', 'Vue.js', 'React', 'php', 'JQuery', 'Laravel', 'Redis', 'Postgresql', 'Git']
  },
])

const projects = ref<Project[]>([
  {
    title: 'Vue3-Compare-Image',
    image: '/images/portfolio2.jpg',
    url: 'https://vue3-compare-image.vercel.app',
    body: 'A simple Vue 3 component to compare two images with a slider, supports vertical and horizontal modes and keyboard navigation for accessibility. Typescript support for improved developer experience.',
    techStack: ['Vue.js', 'Typescript', 'unbuild', 'pnpm'],
    opensource: true,
  },
  {
    title: 'Pro-Manager.com',
    image: '/images/portfolio3.png',
    url: 'pro-manager.vercel.app',
    body: '',
    techStack: ['Django', 'Vue.js', 'Vuetify', 'UnoCSS', 'SCSS', 'Typescript', 'Javascript', 'Postgresql', 'DRF', 'Redis', 'Docker']
  },
  {
    title: 'HaftStudio Website',
    image: '/images/portfolio.jpg',
    url: 'https://haftstudio-website.vercel.app',
    body: '',
    techStack: ['Vue.js', 'Vuetify', 'SCSS', 'Typecript']
  }
])
onMounted(() => {
  const sections = document.querySelectorAll('section')
  window.addEventListener('scroll', () => {
    sections.forEach((section) => {
      const sectionTop = section.offsetTop
      if ((scrollY + 96) >= sectionTop) currentSection.value = section.getAttribute('id')
    })
  })
})
</script>
<template>
  <div class="lg:flex lg:justify-between lg:gap-4">
    <!-- HEADER -->
    <header
      class="font-space lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 class="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          <NuxtLink to="/">
            Cedrouse Omondi
          </NuxtLink>
        </h1>
        <h2 class="font-medium mt-3 text-lg tracking-tight text-slate-200 sm:text-xl">
          <RoughNotation :is-show="true" type="highlight" color="#f4f169">
            <span class="text-slate-500">Fullstack Software Developer</span>
          </RoughNotation>
        </h2>
        <p class="mt-4 max-w-xs leading-normal">
          <span class="font-thin">"The code you write makes you a programmer. The code you delete makes you a good one.
            The code you don't have to write makes you a great one."
          </span>
        </p>
        <nav class="nav hidden lg:block" aria-label="In-page jump links">
          <ul class="mt-16 w-max">
            <li>
              <a class="group flex items-center py-3" :class="{ 'active': currentSection == 'about' }" href="#about">
                <span
                  class="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span><span
                  class="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">About</span>
              </a>
            </li>
            <li>
              <a class="group flex items-center py-3" :class="{ 'active': currentSection == 'experience' }"
                href="#experience">
                <span
                  class="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span><span
                  class="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Experience</span>
              </a>
            </li>
            <li>
              <a class="group flex items-center py-3" :class="{ 'active': currentSection == 'projects' }"
                href="#projects">
                <span
                  class="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span><span
                  class="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Projects</span>
              </a>
            </li>
            <li>
              <a class="group flex items-center py-3" :class="{ 'active': currentSection == 'blog' }" href="#blog">
                <span
                  class="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span><span
                  class="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Blog</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <ul class="mt-8  flex items-center" aria-label="Social media">
        <li class="mr-5">
          <SocialLink title="Github" url="https://github.com/zedjarvis" icon="i-carbon-logo-github" />
        </li>
        <li class="mr-5">
          <SocialLink title="Linkedin" url="https://linkedin.com/in/cedrouseroll-omondi-44b119252"
            icon="i-carbon-logo-linkedin" />
        </li>
        <li class="mr-5">
          <SocialLink title="Twitter" url="https://twitter.com/cedrouseR" icon="i-carbon-logo-twitter" />
        </li>
        <li class="mr-5">
          <SocialLink title="Email" url="mailto:omondicedo@gmail.com" icon="i-carbon-email" />
        </li>
      </ul>

    </header>

    <!-- MAIN  -->
    <main id="content" class="pt-24 lg:w-1/2 lg:py-24 font-space">

      <!-- ABOUT SECTION -->
      <section id="about" class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="About me">
        <SectionHeader title="About" />
        <About />
      </section>

      <!-- EXPERIENCE SECTION  -->
      <section id="experience" class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Work experience">
        <SectionHeader title="Experience" />
        <div>
          <ol class="group/list">
            <li v-for="(exp, i) in experiences" :key="i" class="mb-12">
              <ExperienceCard :start-date="exp.startDate" :end-date="exp.endDate" :title="exp.title"
                :company="exp.company" :url="exp.url" :body="exp.body" :links="exp.links" :tech-stack="exp.techStack" />
            </li>
          </ol>

          <!-- SECTION LINK  -->
          <SectionLink external text="View Full Résumé" url="/Resume-Cedrouseroll-Omondi.pdf" />

        </div>

      </section>

      <!-- PROJECTS SECTION  -->
      <section id="projects" class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Selected projects">
        <SectionHeader title="Projects" />
        <div>
          <ul class="group/list">
            <li v-for="(project, i) in projects" :key="i" class="mb-12">
              <ProjectCard :title="project.title" :image="project.image" :url="project.url" :body="project.body"
                :tech-stack="project.techStack" :opensource="project.opensource" />
            </li>
          </ul>

          <!-- SECTION LINK  -->
          <SectionLink text="View Full Project Archive" url="/projects" />

        </div>

      </section>



      <!-- BLOG SECTION -->
      <section id="blog" class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Blog posts">
        <SectionHeader title="Blog" />
        <div>
          <ul class="group/list">
            <li class="mb-12">
              <!-- BLOG CARD COMES HERE  -->
            </li>
          </ul>
        </div>
      </section>



      <!-- FOOTER  -->
      <IndexFooter />


    </main>


  </div>
</template>