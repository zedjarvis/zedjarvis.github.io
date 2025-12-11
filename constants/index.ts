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
    title: "Full-Stack Developer",
    company: "SunCulture Kenya",
    body:
      "Led the implementation of Zammad as the internal ticketing system, including automated customer data sync from the amortization platform. Built an internal expense and commission management system tightly integrated with core operations. Developed and maintained the Sales Commissions Module using Next.js, Express, Sequelize, and MySQL. Built secure APIs for the Sales Agents App, and provided ongoing technical guidance, architecture reviews, and code reviews across the internal software suite.",
    url: "https://sunculture.io",
    techStack: ["Next.js", "Express", "Sequelize", "MySQL", "Tailwind", "Ant Design", "Node.js"],
  },
  {
    startDate: "JUN 2024",
    endDate: "PRESENT",
    title: "Full-Stack Developer – Consultant",
    company: "Softan Tech",
    body:
      "Built a Next.js PWA mobile app integrated with Odoo for field agent order and stock management. Led development of an Electron desktop app connecting Sage 200 and Odoo to KRA eTIMS and Zambia Smart Invoice for automated tax compliance. Delivered cPanel hosting support, deployment, and maintenance for multiple clients. Wrote optimized SQL queries for Sage and Odoo systems, integrated SageOne Cloud with ZRA Smart Invoice, and developed an admin portal for LEA to streamline student progress tracking and operations.",
    url: "",
    techStack: ["Next.js", "Electron", "Odoo", "Sage 200", "Typescript", "SQL", "Node.js"],
  },
  {
    startDate: "APR 2025",
    endDate: "MAY 2025",
    title: "Frontend Developer – Contract",
    company: "Cazini AI",
    body:
      "Implemented layout fixes and UI improvements for the startup’s landing page. Rebuilt the dashboard layout and sidebar from scratch, applied Motiff design updates with TailwindCSS and shadcn-ui, and integrated UI screens with backend APIs as specified.",
    url: "",
    techStack: ["TailwindCSS", "shadcn-ui", "React", "Next.js"],
  },
  {
    startDate: "OCT 2023",
    endDate: "JUN 2024",
    title: "Full-Stack Developer",
    company: "Clifford Technologies",
    body:
      "Improved Sumoreads platform performance by over 50% through UI updates and server-side optimization. Developed and maintained Laravel and Vue.js applications, led client meetings, and managed deployments on AWS Lightsail and EC2. Set up and administered MySQL databases, and integrated Pesapal payments for secure online transactions.",
    url: "https://clifford.co.ke",
    techStack: ["Laravel", "Vue.js", "Nuxt", "AWS", "MySQL", "Tailwind", "Vuetify", "Redis", "Git"],
  },
  {
    startDate: "MAY 2022",
    endDate: "SEP 2023",
    title: "Software Developer",
    company: "Haft Studio Ltd",
    body:
      "Maintained the company website on cPanel and built an internal project management system using Django/DRF with a Vue + Typescript frontend. Managed the company’s web, email, and IT infrastructure, providing continuous technical support, troubleshooting, and input into application development plans. Used Docker for containerization and PostgreSQL for efficient data management.",
    url: "https://haftstudio.ke",
    techStack: [
      "Django",
      "DRF",
      "Vue.js",
      "Typescript",
      "TailwindCSS",
      "PostgreSQL",
      "Docker",
      "CPANEL",
      "Git",
    ],
  },
]);

const projects = ref<Project[]>([
  {
    title: "Schoolbooks.ke",
    image: "/images/sb.jpg",
    url: "https://www.schoolbooks.ke",
    body: "Schoolbooks.ke is an all-in-one, AI-enabled school management platform that brings accounting, student records, and administrative workflows together into a seamless, modern system designed for Kenyan schools.",
    techStack: ["Nestjs", "Express", "Vue.js", "Vuetify", "Typeorm", "Redis", "Nuxt"],
    opensource: false,
  },
  {
    title: "TaxManager",
    image: "/images/portfolio4.png",
    url: "https://ke.docs.digitax.tech/docs/digitax-sage-online-plugin",
    body: "A desktop and web solution built with Electron and Vue that integrates local ERP systems like Sage and Odoo with Digitax for full ETIMS tax compliance. Powered by an Express backend with Sequelize ORM. Implemented for DXC Technology, Ngong Veg Ltd, Seweco Paints, Poa Internet, and others.",
    techStack: ["Electron", "Express", "Vue.js", "Vuetify", "Sequelize", "Typescript", "Mssql", "Postgresql"],
    opensource: false,
  },
  {
    title: "Vue3-Compare-Image",
    image: "/images/portfolio2.jpg",
    url: "https://vue3-compare-image.vercel.app",
    body: "A lightweight and accessible Vue 3 component for comparing two images using a draggable slider. Supports vertical and horizontal modes, keyboard navigation, and full TypeScript typings for an improved developer experience.",
    techStack: ["Vue.js", "Typescript", "unbuild", "pnpm"],
    opensource: true,
  },
  {
    title: "Meskith.com",
    image: "/images/meskith.jpg",
    url: "https://meskith.com",
    body: "Meskith is a brand strategy and identity studio that helps businesses shape audience perception and build compelling, story-driven brands through modern digital experiences.",
    techStack: ["Nuxt", "Vuetify", "UnoCSS", "SCSS", "Typescript"],
  },
  {
    title: "HaftStudio Website",
    image: "/images/portfolio.jpg",
    url: "https://haftstudio-website.vercel.app",
    body: "A clean, modern website crafted for a design, furniture, and build company. Focused on showcasing their work with a minimalist aesthetic. Currently under active development.",
    techStack: ["Vue.js", "Vuetify", "SCSS", "Typecript"],
  },
]);

export { experiences, projects };
