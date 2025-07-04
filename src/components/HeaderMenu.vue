<script setup>
import { ref } from 'vue'
import { Button } from '@/components/ui/button'

const menu = ref(['Home', 'About Me', 'Projects', 'Github', 'Contact'])

const navBarSlide = ref(false)
</script>

<template>
  <header class="bg-gray-100 flex justify-evenly top-0 sticky z-10 w-full shadow-sm">
    <div class="mx-auto flex h-16 w-[100%] lg:w-[80%] items-center gap-8 px-4 sm:px-6 lg:px-8">
      <router-link class="block text-teal-600" to="/">
        <span class="sr-only">Home</span>
        <img
          class="w-12 aspect-square hover:rotate-90 transition-rotate duration-300"
          src="@/assets/Artboard 1.svg"
          alt="Logo"
        />
      </router-link>

      <div class="flex justify-end items-center w-full">
        <nav aria-label="Global" class="hidden md:block">
          <ul class="flex items-center gap-6 text-sm">
            <li v-for="item in menu" :key="item">
              <router-link
                class="relative after:content-[''] after:absolute after:left-0 after:-bottom-[10px] after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full active-link"
                :to="item.toLowerCase().replace(/\s+/g, '_')"
              >
                {{ item }}
              </router-link>
            </li>
          </ul>
        </nav>

        <div class="flex items-center gap-4">
          <button
            @click="navBarSlide = !navBarSlide"
            class="block rounded-sm bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
          >
            <span class="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="size-7 hover:rotate-90 transition-all duration-300 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>
