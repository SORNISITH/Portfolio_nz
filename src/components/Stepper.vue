<script setup lang="ts">
import { Check, Circle, Dot } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import {
  Stepper,
  StepperDescription,
  StepperItem,
  StepperSeparator,
  StepperTitle,
  StepperTrigger,
} from '@/components/ui/stepper'
import { ref, onMounted, onBeforeUnmount } from 'vue'

const current = ref(1) // Start from 1

let intervalId = null

onMounted(() => {
  intervalId = setInterval(() => {
    current.value = current.value < 6 ? current.value + 1 : 1
  }, 3000) // change every second (1000ms)
})

onBeforeUnmount(() => {
  clearInterval(intervalId)
})

defineProps({
  steps: Array,
  // {
  //   step: 1,
  //   title: 'Project Brief',
  //   description: 'Discuss goals and give a quote',
  // },
})
</script>

<template>
  <Stepper
    :modelValue="current"
    class="flex justify-center w-full scale-90 md:scale-95 xl:scale-99 lg:scale-100 p-10 gap-2"
  >
    <StepperItem
      v-for="step in steps"
      :key="step.step"
      v-slot="{ state }"
      class="relative flex w-full flex-col items-center justify-center"
      :step="step.step"
    >
      <StepperSeparator
        v-if="step.step !== steps[steps.length - 1].step"
        class="absolute left-[calc(50%+20px)] right-[calc(-50%+10px)] top-5 block h-0.5 shrink-0 rounded-full bg-muted group-data-[state=completed]:bg-primary"
      />

      <StepperTrigger as-child>
        <Button
          :variant="state === 'completed' || state === 'active' ? 'default' : 'outline'"
          size="icon"
          class="z-10 rounded-full shrink-0"
          :class="[state === 'active' && 'ring-2 ring-ring ring-offset-2 ring-offset-background']"
        >
          <Check v-if="state === 'completed'" class="size-5" />
          <Circle v-if="state === 'active'" />
          <Dot v-if="state === 'inactive'" />
        </Button>
      </StepperTrigger>

      <div class="mt-5 flex flex-col items-center text-center">
        <StepperTitle
          :class="[state === 'active' && 'text-primary']"
          class="text-sm font-semibold whitespace-pre-line transition lg:text-base"
        >
          {{ step.title }}
        </StepperTitle>
        <StepperDescription
          :class="[state === 'active' && 'text-primary']"
          class="sr-only text-xs text-muted-foreground transition md:not-sr-only lg:text-sm"
        >
          {{ step.description }}
        </StepperDescription>
      </div>
    </StepperItem>
  </Stepper>
</template>
