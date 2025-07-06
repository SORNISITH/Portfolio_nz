<script setup>
import { ref } from 'vue'

const services = [
  {
    title: 'My Portfolio Website',
    image: '/images/portfolio.png',
    tools: ['Vue.js', 'Tailwind CSS', 'Node.js'],
  },
  {
    title: 'Landing Page Template',
    image: '/images/landing.png',
    tools: ['HTML5', 'Tailwind CSS', 'GSAP'],
  },

  {
    title: 'E-Commerce Site',
    image: '/images/shop.png',
    tools: ['React', 'Express', 'MongoDB'],
  },
  {
    title: 'Task Manager API',
    image: '/images/api.png',
    tools: ['Node.js', 'Express', 'PostgreSQL'],
  },
  {
    title: 'Chat App',
    image: '/images/chat.png',
    tools: ['Socket.IO', 'React', 'Node.js'],
  },
  {
    title: 'Blog Platform',
    image: '/images/blog.png',
    tools: ['Next.js', 'Sanity.io', 'Tailwind CSS'],
  },
  {
    title: 'Weather Dashboard',
    image: '/images/weather.png',
    tools: ['Vue.js', 'OpenWeather API', 'Bootstrap'],
  },
  {
    title: 'Admin Panel',
    image: '/images/admin.png',
    tools: ['React', 'Redux Toolkit', 'Firebase'],
  },
  {
    title: 'URL Shortener',
    image: '/images/url-shortener.png',
    tools: ['Express', 'MongoDB', 'EJS'],
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
        class="flex flex-col hover:border-1 hover:border-green-500 hover:z-100 transition-all duration-300 border-b-[5px] border-green-500 bg-white text-black shadow-sm rounded-md overflow-hidden"
      >
        <!-- Title -->
        <h1 class="text-2xl text-center p-2 font-bold mb-3">
          {{ service.title }}
        </h1>

        <!-- Image Section -->
        <div class="bg-gray-200 h-70 flex items-center justify-center">
          <img
            :src="service.image"
            alt="Screenshot of project"
            class="object-cover w-full h-full border-2 border-gray-200 max-h-full max-w-full"
          />
        </div>

        <!-- Stack Section -->
        <div class="bg-gray-100 p-2 text-sm text-center">
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
