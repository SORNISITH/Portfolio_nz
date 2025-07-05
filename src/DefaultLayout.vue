<script setup>
import { RouterView } from 'vue-router'
import HeaderMenu from '@/components/HeaderMenu.vue'
import Footer from '@/components/Footer.vue'
</script>
<template>
  <HeaderMenu />
  <div class="min-h-screen bg-gray-100">
    <RouterView />
  </div>
  <Footer />
</template>
