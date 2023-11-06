import { ref } from 'vue'

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
    url: 'https://github.com/zedjarvis/promanager',
    body: 'A Project Management web application. The landing page is greatly inspired by Trello and the actual app by ProjectManager.com. Fronted is built with Vue composition api and Typescript while the backed is build with Django & Django Rest Framework. The app uses JWT authentication and django-channels for websockets, Postgresql and Redis for database requirements.',
    techStack: ['Django', 'Vue.js', 'Vuetify', 'UnoCSS', 'SCSS', 'Typescript', 'Javascript', 'Postgresql', 'DRF', 'Redis', 'Docker']
  },
  {
    title: 'HaftStudio Website',
    image: '/images/portfolio.jpg',
    url: 'https://haftstudio-website.vercel.app',
    body: 'Simple, Modern, professional website made for a Design, Furniture and Build company. Still under developement.',
    techStack: ['Vue.js', 'Vuetify', 'SCSS', 'Typecript']
  }
])


export { experiences, projects }
