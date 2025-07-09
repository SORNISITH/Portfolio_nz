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
  {
    title: 'UI/UX Design',
    description: 'Designing intuitive interfaces and experiences for users.',
    tools: ['Figma', 'Adobe XD', 'Sketch', 'Framer'],
  },
  {
    title: 'Testing & QA',
    description: 'Ensuring code quality and application reliability through testing.',
    tools: ['Jest', 'Mocha', 'Cypress', 'Playwright', 'Vitest'],
  },
  {
    title: 'Mobile Development',
    description: 'Building native and cross-platform mobile applications.',
    tools: ['Android', 'iOS', 'Flutter', 'React Native', 'Swift', 'Kotlin'],
  },
  {
    title: 'Desktop Development',
    description: 'Creating desktop applications for Windows, macOS, and Linux.',
    tools: ['Electron', 'Qt', 'WPF', '.NET', 'GTK'],
  },
  {
    title: 'WebAssembly',
    description: 'Developing high-performance web applications with WebAssembly.',
    tools: ['Rust', 'AssemblyScript', 'Emscripten', 'Blazor'],
  },
])

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
  <div class="bg-gray-200 flex flex-col items-center">
    <div>
      <h1 class="text-center z-10 text-emerald-600 text-2xl py-2">Web Development Services</h1>
    </div>
    <div
      class="grid bg-gray-200 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:w-full lg:w-[70%] place-items-center gap-4 px-6 items-stretch"
    >
      <!-- Card -->
      <div
        v-for="(service, index) in services"
        :key="index"
        class="flex hover:border-1 w-full active:border-green-500 hover:border-green-500 hover:z-100 transition-all duration-300 flex-col border-l-[5px] border-green-500 bg-white p-6 text-black shadow-sm rounded-md"
      >
        <h1 class="text-2xl font-bold mb-3">{{ service.title }}</h1>
        <p class="mb-4 text-base text-gray-700">{{ service.description }}</p>
        <br />
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
  </div>
</template>
