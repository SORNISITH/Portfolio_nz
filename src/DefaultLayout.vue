<script setup>
import { RouterView } from 'vue-router'
import HeaderMenu from '@/components/HeaderMenu.vue'
import HyperFooter from '@/components/HyperFooter.vue'
</script>
<template>
  <HeaderMenu />
  <div class="min-h-screen bg-gray-100">
    <RouterView />
  </div>
  <HyperFooter />
</template>
