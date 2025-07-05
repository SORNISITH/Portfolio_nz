<script setup>
import { ref } from 'vue'

const services = ref([
  {
    title: 'Frontend Development',
    description:
      'Building responsive and interactive user interfaces for websites and applications.',
    tools: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Vue.js', 'React', 'Tailwind CSS'],
  },
  {
    title: 'Backend Development',
    description: 'Creating server-side logic, APIs, and databases for scalable web applications.',
    tools: ['Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'JWT', 'REST API'],
  },
  {
    title: 'DevOps & Deployment',
    description: 'Automating deployments, managing infrastructure, and continuous integration.',
    tools: ['Linux', 'Nginx', 'Docker', 'Netlify', 'Vercel', 'GitHub Actions'],
  },
])

const toolColors = {
  HTML: 'bg-orange-100 text-orange-800',
  CSS: 'bg-blue-100 text-blue-800',
  JavaScript: 'bg-yellow-100 text-yellow-800',
  TypeScript: 'bg-blue-200 text-blue-900',
  'Vue.js': 'bg-green-100 text-green-800',
  React: 'bg-cyan-100 text-cyan-800',
  'Tailwind CSS': 'bg-teal-100 text-teal-800',
  'Node.js': 'bg-lime-100 text-lime-800',
  'Express.js': 'bg-gray-200 text-gray-800',
  MongoDB: 'bg-green-200 text-green-900',
  PostgreSQL: 'bg-indigo-100 text-indigo-800',
  JWT: 'bg-purple-100 text-purple-800',
  'REST API': 'bg-blue-100 text-blue-800',
  Linux: 'bg-gray-100 text-gray-800',
  Nginx: 'bg-emerald-100 text-emerald-800',
  Docker: 'bg-sky-100 text-sky-800',
  Netlify: 'bg-teal-100 text-teal-800',
  Vercel: 'bg-neutral-200 text-black',
  'GitHub Actions': 'bg-slate-200 text-slate-900',
}
</script>
<template>
  <!-- Grid container -->

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 bg-gray-100 items-stretch">
    <!-- Card -->
    <div
      v-for="(service, index) in services"
      :key="index"
      class="flex flex-col border-l-[5px] border-green-500 bg-white p-6 text-black shadow-sm rounded-md"
    >
      <h1 class="text-2xl font-bold mb-3">{{ service.title }}</h1>
      <p class="mb-4 text-base text-gray-700">{{ service.description }}</p>
      <h2 class="text-base font-semibold mb-2">Tools:</h2>
      <ul class="flex flex-wrap gap-3 text-sm font-medium mt-auto">
        <li
          v-for="tool in service.tools"
          :key="tool"
          :class="[
            'px-3 py-1 rounded-full transition-transform transform duration-300 hover:scale-105',
            toolColors[tool] || 'bg-gray-200 text-black',
          ]"
        >
          {{ tool }}
        </li>
      </ul>
    </div>
  </div>
</template>
