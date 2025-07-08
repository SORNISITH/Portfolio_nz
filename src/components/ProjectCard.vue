<script setup>
import { ref } from 'vue'

const services = [
  {
    title: 'My Portfolio Website',
    image: '/images/portfolio1.png',
    tools: [
      'Vue 3',
      'Vue Router',
      'Vue I18n',
      'Tailwind CSS',
      'Motion V (Animations)',
      'Highlight.js',
      'Axios',
      'Vite',
    ],
  },

  {
    title: 'My Portfolio 2',
    image: '/images/portfolio2.png',
    tools: [
      'React 19',
      'React Router v7',
      'MUI (Material UI)',
      '@emotion/styled',
      'Tailwind CSS',
      'Axios',
      'PDF.js (pdfjs-dist)',
      'React Window',
    ],
  },

  {
    title: 'Landing Page Template',
    image: '/images/landing.png',
    tools: ['HTML5', 'Tailwind CSS', 'GSAP'],
  },

  {
    title: 'Chat App',
    image: '/images/chat.png',
    tools: ['JavaScript', 'HTML5', 'CSS'],
  },
  {
    title: 'Code HTML Highlight',
    image: '/images/code.jpg',
    tools: ['Next.js', 'Sanity.io', 'Tailwind CSS'],
  },
  {
    title: 'Weather Dashboard',
    image: '/images/weather.jpg',
    tools: ['Vue.js', 'OpenWeather API', 'Bootstrap'],
  },
  {
    title: 'Admin Panel',
    image: '/images/dashboard1.png',
    tools: ['React', 'Redux Toolkit', 'Firebase'],
  },
  {
    title: 'Real-time Dashboard',
    image: '/images/dashboard.png',
    tools: ['Vue.js', 'Chart.js', 'Node.js'],
  },
]

const toolColors = {
  // Frontend
  HTML: 'bg-orange-100 text-orange-800',
  CSS: 'bg-blue-100 text-blue-800',
  JavaScript: 'bg-yellow-100 text-yellow-800',
  TypeScript: 'bg-blue-200 text-blue-900',
  'Vue.js': 'bg-green-100 text-green-800',
  React: 'bg-cyan-100 text-cyan-800',
  'Tailwind CSS': 'bg-teal-100 text-teal-800',

  // Backend
  'Node.js': 'bg-lime-100 text-lime-800',
  'Express.js': 'bg-gray-200 text-gray-800',
  MongoDB: 'bg-green-200 text-green-900',
  PostgreSQL: 'bg-indigo-100 text-indigo-800',
  JWT: 'bg-purple-100 text-purple-800',
  'REST API': 'bg-blue-100 text-blue-800',

  // DevOps
  Linux: 'bg-gray-100 text-gray-800',
  Nginx: 'bg-emerald-100 text-emerald-800',
  Docker: 'bg-sky-100 text-sky-800',
  Netlify: 'bg-teal-100 text-teal-800',
  Vercel: 'bg-neutral-200 text-black',
  'GitHub Actions': 'bg-slate-200 text-slate-900',

  // UI/UX
  Figma: 'bg-pink-100 text-pink-800',
  'Adobe XD': 'bg-red-100 text-red-700',
  Sketch: 'bg-yellow-200 text-yellow-800',
  Framer: 'bg-blue-100 text-blue-800',

  // Testing
  Jest: 'bg-red-200 text-red-800',
  Mocha: 'bg-brown-100 text-brown-800',
  Cypress: 'bg-green-100 text-green-900',
  Playwright: 'bg-indigo-100 text-indigo-900',
  Vitest: 'bg-lime-200 text-lime-900',
  HTML5: 'bg-[hsl(231,90%,90%)] text-[hsl(231,60%,30%)]',
  GSAP: 'bg-[hsl(292,90%,90%)] text-[hsl(292,60%,30%)]',
  Express: 'bg-[hsl(810,90%,90%)] text-[hsl(810,60%,30%)]',
  'Socket.IO': 'bg-[hsl(614,90%,90%)] text-[hsl(614,60%,30%)]',
  'Next.js': 'bg-[hsl(588,90%,90%)] text-[hsl(588,60%,30%)]',
  'Sanity.io': 'bg-[hsl(911,90%,90%)] text-[hsl(911,60%,30%)]',
  'OpenWeather API': 'bg-[hsl(1522,90%,90%)] text-[hsl(1522,60%,30%)]',
  Bootstrap: 'bg-[hsl(944,90%,90%)] text-[hsl(944,60%,30%)]',
  'Redux Toolkit': 'bg-[hsl(1306,90%,90%)] text-[hsl(1306,60%,30%)]',
  Firebase: 'bg-[hsl(741,90%,90%)] text-[hsl(741,60%,30%)]',
  EJS: 'bg-[hsl(226,90%,90%)] text-[hsl(226,60%,30%)]',
  'Chart.js': 'bg-[hsl(870,90%,90%)] text-[hsl(870,60%,30%)]',
}
</script>

<template>
  <!-- Grid container -->
  <div>
    <div>
      <h1 class="text-center text-2xl py-2 underline underline-offset-5">My Project Showcase!</h1>
      <br />
    </div>
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 bg-gray-100 items-stretch"
    >
      <!-- Card -->
      <div
        v-for="(service, index) in services"
        :key="index"
        class="flex flex-col hover:border-2 hover:border-green-500 hover:z-100 transition-all duration-300 border-b-[5px] border-green-500 bg-white text-black shadow-sm rounded-md overflow-hidden"
      >
        <!-- Title -->
        <h1 class="text-2xl text-center p-2 font-bold mb-3">
          {{ service.title }}
        </h1>

        <!-- Image Section -->
        <div class="bg-gray-200 scale-95 shadow-sm h-120 flex items-center justify-center">
          <img
            :src="service.image"
            alt="Screenshot of project"
            class="object-cover hover:grayscale-0 grayscale w-full h-full border-2 border-gray-200 max-h-full max-w-full"
          />
        </div>

        <!-- Stack Section -->
        <div class="bg-gray-300 p-2 text-sm text-center">
          <ul class="flex flex-wrap gap-2 p-2 justify-center">
            <li
              v-for="tool in service.tools"
              :key="tool"
              :class="[
                'px-3 py-1 rounded-full text-sm font-medium transition-transform transform duration-300 hover:scale-105',
                toolColors[tool] || 'bg-gray-200 text-black',
              ]"
            >
              {{ tool }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <br />
</template>
