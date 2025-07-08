<script setup>
import { RouterView } from 'vue-router'
import HeaderMenu from '@/components/HeaderMenu.vue'
import HyperFooter from '@/components/HyperFooter.vue'
</script>
<template>
  <div class="h-0.5 w-full sticky bg-gradient-to-b from-[#16a34a] via-[#4ade80] to-[#bbf7d0]"></div>
  <HeaderMenu />
  <div class="min-h-screen relative bg-gray-100">
    <RouterView />
  </div>
  <HyperFooter />
</template>
