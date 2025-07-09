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
      'Axios',
      'Vite',
    ],
    href: '',
  },

  {
    title: 'My Portfolio 2',
    image: '/images/portfolio2.png',
    tools: ['React 19', 'React Router v7', 'MUI (Material UI)', 'Tailwind CSS', 'React Window'],
    href: 'https://nisith.com/',
  },

  {
    title: 'Landing Page Template',
    image: '/images/landing.png',
    tools: ['HTML5', 'Tailwind CSS', 'Vue 3', 'Motion One'],
  },

  {
    title: 'Github API Test',
    image: '/images/githubapi.png',
    tools: [
      'Vue 3',
      'Tailwind CSS',
      'Axios',
      '@highlightjs/vue-plugin',
      'GitHub REST API v3',
      'Vite',
    ],
  },

  {
    title: 'Chat App',
    image: '/images/chat.png',
    tools: ['JavaScript', 'HTML5', 'CSS3', 'Socket.IO', 'Vite'],
  },
  {
    title: 'Code HTML Highlight',
    image: '/images/code.jpg',
    tools: ['Vue 3', 'Highlight.js', 'Tailwind CSS', '@highlightjs/vue-plugin'],
  },
  {
    title: 'Weather Dashboard',
    image: '/images/weather.jpg',
    tools: ['React.js', 'Tailwind CSS', 'OpenWeather API', 'Axios'],
  },
  {
    title: 'Admin Panel',
    image: '/images/dashboard1.png',
    tools: ['Vue 3', 'Vue Router', 'Tailwind CSS', 'Pinia', 'Chart.js'],
  },
  {
    title: 'Real-time Dashboard',
    image: '/images/dashboard.png',
    tools: ['Vue 3', 'Tailwind CSS', 'Vue Router', 'WebSocket', 'Pinia'],
  },
]

const toolColors = {
  // ⚙️ Core Web
  HTML5: 'bg-orange-100 text-orange-700',
  CSS3: 'bg-blue-100 text-blue-700',
  JavaScript: 'bg-yellow-100 text-yellow-800',

  // ⚛️ React Ecosystem
  'React 19': 'bg-cyan-100 text-cyan-700',
  'React.js': 'bg-cyan-100 text-cyan-700',
  'React Router v7': 'bg-rose-100 text-rose-700',
  'React Window': 'bg-indigo-100 text-indigo-700',

  // 🧩 Vue Ecosystem
  'Vue 3': 'bg-emerald-100 text-emerald-700',
  'Vue Router': 'bg-green-100 text-green-700',
  'Vue I18n': 'bg-teal-100 text-teal-700',
  Pinia: 'bg-lime-100 text-lime-700',

  // 💨 Styling
  'Tailwind CSS': 'bg-sky-100 text-sky-700',
  'MUI (Material UI)': 'bg-blue-100 text-blue-800',
  '@emotion/styled': 'bg-pink-100 text-pink-700',

  // 📦 Tooling
  Vite: 'bg-purple-100 text-purple-700',
  Axios: 'bg-gray-100 text-gray-800',
  'Motion V (Animations)': 'bg-purple-100 text-purple-700',
  'Motion One': 'bg-violet-100 text-violet-700',

  // 🔌 Networking & Real-time
  'Socket.IO': 'bg-gray-200 text-gray-800',
  WebSocket: 'bg-stone-100 text-stone-700',

  // 📊 Visualization & Utility
  ChartJS: 'bg-red-100 text-red-700',
  'Chart.js': 'bg-red-100 text-red-700',
  'OpenWeather API': 'bg-blue-50 text-blue-700',
  'Highlight.js': 'bg-yellow-50 text-yellow-700',
  '@highlightjs/vue-plugin': 'bg-yellow-50 text-yellow-700',
  'PDF.js (pdfjs-dist)': 'bg-slate-100 text-slate-700',
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
        <a
          :href="service.href"
          target="_blank"
          class="text-2xl hover:underline underline-offset-2 cursor-pointer text-center p-2 font-bold mb-3"
        >
          {{ service.title }}
        </a>

        <!-- Image Section -->
        <div class="bg-gray-200 scale-95 shadow-sm h-120 flex items-center justify-center">
          <img
            :src="service.image"
            alt="Screenshot of project"
            class="object-cover hover:scale-105 transition-scale duration-700 hover:grayscale-0 grayscale w-full h-full border-2 border-gray-200 max-h-full max-w-full"
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
