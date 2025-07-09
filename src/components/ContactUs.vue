<script setup>
import { reactive, ref } from 'vue'
import { Form, Field, ErrorMessage } from 'vee-validate'
import * as yup from 'yup'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const layout = ref(1)

const budgetOptions = [
  { label: 'Less than $500', value: '< $500' },
  { label: '$500 - $1000', value: '$500 - $1000' },
  { label: '$1000 - $3000', value: '$1000 - $3000' },
  { label: 'More than $3000', value: '> $3000' },
]
const form = reactive({
  name: '',
  email: '',
  phone: '',
  service: '',
  budget: '',
  message: '',
})
function resetForm() {
  form.name = ''
  form.email = ''
  form.phone = ''
  form.service = ''
  form.budget = ''
  form.message = ''
  layout.value = 1
}
async function handleSubmit() {
  try {
    await validationSchema.validate(
      {
        name: form.name,
        email: form.email,
        message: form.message,
      },
      { abortEarly: false },
    )

    // Success
    alert('Contact information submitted successfully!')
    layout.value = 2

    resetForm()
  } catch (err) {
    if (err.inner) {
      const errorMessages = err.inner.map((e) => `${e.path}: ${e.message}`).join('\n')
      alert(`Validation Errors:\n${errorMessages}`)
    } else {
      alert('Unknown validation error')
    }
  } // Example: send data to backend API
}

const validationSchema = yup.object({
  name: yup
    .string()
    .matches(/^[A-Za-z\s]+$/, 'Only alphabet and space is accepted')
    .min(3, 'Name must be at least 3 characters')
    .required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  message: yup
    .string()
    .min(10, 'Message must be from 10 to 100 characters')
    .max(100, 'Message must be from 10 to 100 characters')
    .required('Message is required'),
})
</script>

<template>
  <div class="flex flex-col p-2 items-center h-screen">
    <p class="text-2xl p-2">{{ t('contact_title') }}</p>
    <div
      v-if="layout == 2"
      class="w-full h-full gap-2 max-w-xl mx-auto flex flex-col items-center space-y-4 p-4"
    >
      <!-- Show HTTP method -->
      <code class="text-green-600 font-mono">Method: POST</code>
      <code class="text-green-600 underline underline-offset-2 text-sm font-mono">Sucessfull</code>
      <pre class="text-sm">{{ JSON.stringify(form, null, 2) }}</pre>
      <button
        type="submit"
        @click="resetForm"
        class="w-[50%] py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Submit Form
      </button>
    </div>
    <form
      v-if="layout === 1"
      class="w-full gap-2 max-w-xl mx-auto flex flex-col space-y-4 p-4"
      @submit.prevent="handleSubmit"
    >
      <!-- Full Name -->
      <div class="flex flex-col gap-1">
        <label for="name" class="text-sm font-medium text-gray-900 dark:text-gray-300">
          {{ t('contact_fullName') }}
        </label>
        <input
          id="name"
          v-model="form.name"
          type="text"
          name="name"
          class="w-full p-2 border rounded"
          :placeholder="t('contact_namePlaceholder')"
          required
        />
      </div>

      <!-- Email -->
      <div class="flex flex-col gap-1">
        <label for="email" class="text-sm font-medium text-gray-900 dark:text-gray-300">
          {{ t('contact_email') }}
        </label>
        <input
          id="email"
          v-model="form.email"
          type="email"
          name="email"
          class="w-full p-2 border rounded"
          placeholder="you@example.com"
          required
        />
      </div>

      <!-- Phone -->
      <div class="flex flex-col gap-1">
        <label for="phone" class="text-sm font-medium text-gray-900 dark:text-gray-300">
          {{ t('contact_phone') }}
        </label>
        <input
          id="phone"
          v-model="form.phone"
          type="tel"
          name="phone"
          class="w-full p-2 border rounded"
          placeholder="+855 12345678"
          required
        />
      </div>

      <!-- Service Selection -->
      <div class="flex flex-col gap-1">
        <label for="service" class="text-sm font-medium text-gray-900 dark:text-gray-300">
          {{ t('contact_service') }}
        </label>
        <select
          id="service"
          v-model="form.service"
          name="service"
          class="w-full p-2 border rounded"
          required
        >
          <option value="" disabled selected>{{ t('contact_selectService') }}</option>
          <option value="frontend">Frontend Development</option>
          <option value="backend">Backend Development</option>
          <option value="gis">GIS Solutions</option>
          <option value="fullstack">Full Stack</option>
          <option value="other">Other</option>
        </select>
      </div>

      <!-- Budget Range -->
      <div class="flex flex-col gap-2">
        <label class="text-sm font-medium text-gray-900 dark:text-gray-300 mb-1">
          {{ t('contact_budget') }}
        </label>

        <div class="grid grid-cols-2 gap-2">
          <label
            v-for="(option, index) in budgetOptions"
            :key="index"
            class="cursor-pointer group flex items-center gap-2 p-3 border rounded-lg transition-transform transform hover:scale-105"
            :class="{
              'ring-2 ring-blue-500 bg-blue-50 dark:bg-gray-800': form.budget === option.value,
              'bg-white dark:bg-gray-900': form.budget !== option.value,
            }"
          >
            <input type="radio" v-model="form.budget" :value="option.value" class="hidden" />
            <span class="text-sm font-medium text-gray-900 dark:text-gray-200">
              {{ option.label }}
            </span>
          </label>
        </div>
      </div>

      <!-- Message -->
      <div class="flex flex-col gap-1">
        <label for="message" class="text-sm font-medium text-gray-900 dark:text-gray-300">
          {{ t('contact_description') }}
        </label>
        <textarea
          id="message"
          v-model="form.message"
          name="message"
          rows="5"
          class="w-full p-2 border rounded"
          :placeholder="t('contact_descriptionPlaceholder')"
          required
        ></textarea>
      </div>

      <!-- Submit -->
      <button
        type="submit"
        class="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        {{ t('contact_sendMessage') }}
      </button>
    </form>
  </div>
</template>
