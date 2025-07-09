<script setup>
import { ref } from 'vue'

const service = ref([
  {
    title: 'GIS & ArcGIS Pro',
    description:
      'Providing advanced GIS services with ArcGIS Pro for spatial data analysis, mapping, and geographic visualization to support smart decision-making.',
    tools: ['ArcGIS Pro', 'QGIS', 'Spatial Analyst', 'ModelBuilder', 'Python'],
  },
  {
    title: 'Remote Sensing',
    description:
      'Analyzing satellite and aerial imagery to monitor environmental changes and support geospatial projects.',
    tools: ['ENVI', 'ERDAS IMAGINE', 'Google Earth Engine', 'Python'],
  },
  {
    title: 'Cartography & Map Design',
    description:
      'Creating visually compelling and accurate maps tailored for print and digital media.',
    tools: ['Adobe Illustrator', 'ArcGIS Pro', 'QGIS', 'Mapbox'],
  },
  {
    title: 'Spatial Data Management',
    description:
      'Organizing, storing, and maintaining spatial datasets to ensure data integrity and accessibility.',
    tools: ['PostGIS', 'GeoServer', 'FME', 'SQL'],
  },
])

const toolColors = {
  'ArcGIS Pro': 'bg-orange-200 text-orange-900',
  QGIS: 'bg-green-100 text-green-800',
  'Spatial Analyst': 'bg-yellow-100 text-yellow-800',
  ModelBuilder: 'bg-blue-100 text-blue-800',
  Python: 'bg-purple-100 text-purple-800',
  ENVI: 'bg-indigo-200 text-indigo-900',
  'ERDAS IMAGINE': 'bg-purple-200 text-purple-900',
  'Google Earth Engine': 'bg-sky-200 text-sky-900',
  'Adobe Illustrator': 'bg-red-200 text-red-900',
  Mapbox: 'bg-cyan-200 text-cyan-900',
  PostGIS: 'bg-lime-200 text-lime-900',
  GeoServer: 'bg-gray-300 text-gray-900',
  FME: 'bg-pink-200 text-pink-900',
  SQL: 'bg-blue-300 text-blue-900',
}
</script>

<template>
  <div class="flex flex-col items-center">
    <div>
      <h1 class="text-center text-orange-600 text-2xl py-2 font-semibold">
        GIS & ArcGIS Pro Services
      </h1>
    </div>
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:w-[70%] md:w-[85%] gap-6 px-6 items-stretch"
    >
      <div
        v-for="(service, index) in service"
        :key="`arcgis-${index}`"
        class="flex flex-col border-l-[5px] hover:border-1 active:border-orange-500 hover:border-orange-500 hover:z-100 transition-all duration-900 border-orange-500 bg-white p-6 text-black shadow-sm rounded-md"
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
