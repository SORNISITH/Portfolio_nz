<script setup>
import { Button } from '@/components/ui/button'
import SquareAnimation from '@/components/SquareAnimation.vue'
import { Separator } from '@/components/ui/separator'
import ServiceCardWeb from '@/components/ServiceCardWeb.vue'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import ServiceCardArcgisPro from '@/components/ServiceCardArcgisPro.vue'
import Stepper from '@/components/Stepper.vue'
const { t } = useI18n()

const steps = [
  {
    step: 1,
    title: 'Project Brief',
    description: 'Discuss goals and give a quote',
  },
  {
    step: 2,
    title: 'Initial Payment',
    description: 'Pay deposit to start the job',
  },
  {
    step: 3,
    title: 'Build Process',
    description: 'Develop and update the client',
  },
  {
    step: 4,
    title: 'Client Review',
    description: 'Check final work and give feedback',
  },
  {
    step: 5,
    title: 'Final Handoff',
    description: 'Pay balance and get all files',
  },
]
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
.welcome {
  font-family: 'Fira Sans', sans-serif;
  font-weight: 800;
  font-style: normal;
}

.welcome-text {
  font-family: 'Fira Sans', sans-serif;
  font-weight: 220;
  font-style: normal;
}
</style>
<template>
  <main class="flex flex-col min-h-screen bg-gray-100">
    <div class="flex h-77 w-full items-center justify-center bg-gray-200">
      <div class="w-1/2 flex justify-end items-center">
        <span class="flex flex-col items-end text-right">
          <h1 class="welcome text-black text-2xl">Welcome to N Z</h1>
          <h1
            class="w-[90%] text-teal-700 lg:w-[50%] md:w-[60%] text-l lg:text-2xl md:text-xl welcome-text"
          >
            {{ t('welcome_hero') }}
          </h1>
        </span>
      </div>
      <div
        class="w-1/2 flex scale-70 md:scale-80 xl:scale-95 lg:scale-100 justify-start items-center"
      >
        <SquareAnimation />
      </div>
    </div>
    <Stepper :steps="steps" />
    <ServiceCardWeb />
    <br />
    <ServiceCardArcgisPro />
    <br />
  </main>
</template>
