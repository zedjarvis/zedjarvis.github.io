import { ref } from "vue";

interface Link {
  text: string;
  url: string;
}

interface Experience {
  startDate: string;
  endDate: string;
  title: string;
  company?: string;
  url: string;
  body?: string;
  links?: Link[];
  techStack: string[];
}

interface Project {
  title: string;
  image: string;
  url?: string;
  body?: string;
  techStack: string[];
  opensource?: boolean;
}

const experiences = ref<Experience[]>([
  {
    startDate: "MAR 2024",
    endDate: "PRESENT",
    title: "Full-Stack Engineer",
    company: "SunCulture Kenya",
    body: "I consult on the internal software suite, providing guidance and development support. I leverage React, Node.js, Express, Sequelize, and MySQL to develop and maintain a module within the main system. I build APIs to interface with mobile apps and the main system, ensuring seamless integration and functionality, and I review code and fix bugs from time to time.",
    url: "https://sunculture.io",
    techStack: ["React", "Nodejs", "Express", "Sequelize", "MySQL"],
  },
  {
    startDate: "OCT 2023",
    endDate: "JUN 2024",
    title: "Full-Stack Developer",
    company: "Clifford Technologies",
    body: "I developed and maintained applications using Laravel and Vue.js, regularly chairing meetings with clients to discuss progress, fixes, and roadmaps. I successfully deployed and managed Ubuntu servers on AWS Lightsail and EC2, establishing and administering MySQL databases. My work included implementing UI updates and server-side optimizations to enhance app performance, as well as integrating the Pesapal payment gateway for secure online transactions. My tech stack comprised Laravel, Vue.js, Vuetify, Tailwind, AWS, MySQL, Redis, and Git.",
    url: "https://clifford.co.ke",
    techStack: [
      "Laravel",
      "MySQL",
      "Vue.js",
      "AWS",
      "Vuetify",
      "EC2",
      "Tailwind",
      "PHP",
      "CPANEL",
    ],
  },
  {
    startDate: "2022",
    endDate: "SEP 2023",
    title: "Developer",
    company: "Haft Studio",
    body: "I built and maintained the company website using cPanel, ensuring a seamless online presence. I developed an internal project management system leveraging Django and Django Rest Framework for the back end, while utilizing Vue.js for a dynamic front-end experience. Additionally, I oversaw the company’s web, email, and IT infrastructure, providing regular technical support and troubleshooting. My contributions also included offering valuable insights into the development plans for various applications, programs, and systems.",
    url: "https://haftstudio.ke",
    techStack: [
      "Django",
      "DRF",
      "Vue.js",
      "Nuxt",
      "Vuetify",
      "Typescript",
      "SCSS",
      "PHP",
      "CPANEL",
      "MySQL",
      "Git",
    ],
  },
]);

const projects = ref<Project[]>([
  {
    title: "TaxManager",
    image: "/images/portfolio4.png",
    url: "https://docs.digitax.tech/docs/sage-online-plugin",
    body: "An Electron Desktop and web application that integrages Locally hosted ERP systems e.g Sage and Odoo to digitax for Tax Compliance with the new ETIMS API specifications. The frontend is Vue while the backend is Expressjs. It uses sequelize ORM to simplify DB access. Integrated for DXC Technology, Ngong Veg Ltd, Seweco Paints, Poa Internet and more.",
    techStack: ["Electron", "Express", "Vue.js", "Typescript", "SQL"],
    opensource: false,
  },
  {
    title: "Vue3-Compare-Image",
    image: "/images/portfolio2.jpg",
    url: "https://vue3-compare-image.vercel.app",
    body: "A simple Vue 3 component to compare two images with a slider, supports vertical and horizontal modes and keyboard navigation for accessibility. Typescript support for improved developer experience.",
    techStack: ["Vue.js", "Typescript", "unbuild", "pnpm"],
    opensource: true,
  },
  {
    title: "Pro-Manager.com",
    image: "/images/portfolio3.png",
    url: "https://github.com/zedjarvis/promanager",
    body: "A Project Management web application. The landing page is greatly inspired by Trello and the actual app by ProjectManager.com. Fronted is built with Vue composition api and Typescript while the backed is build with Django & Django Rest Framework. The app uses JWT authentication and django-channels for websockets, Postgresql and Redis for database requirements.",
    techStack: [
      "Django",
      "Vue.js",
      "Vuetify",
      "UnoCSS",
      "SCSS",
      "Typescript",
      "Javascript",
      "Postgresql",
      "DRF",
      "Redis",
      "Docker",
    ],
  },
  {
    title: "HaftStudio Website",
    image: "/images/portfolio.jpg",
    url: "https://haftstudio-website.vercel.app",
    body: "Simple, Modern, professional website made for a Design, Furniture and Build company. Still under developement.",
    techStack: ["Vue.js", "Vuetify", "SCSS", "Typecript"],
  },
]);

export { experiences, projects };
