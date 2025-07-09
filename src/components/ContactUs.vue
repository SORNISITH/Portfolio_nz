<script setup>
import 'highlight.js/lib/common'
import hljsVuePlugin from '@highlightjs/vue-plugin'
import 'highlight.js/styles/stackoverflow-light.css'

import { ref } from 'vue'
import { Form, Field, ErrorMessage, useForm } from 'vee-validate'
import * as yup from 'yup'
import { useI18n } from 'vue-i18n'
const { values } = useForm() //  live form values
const { t } = useI18n()
let submittedValues = ref({})

const layout = ref(1)
const contactForm = ref(null)
const budgetOptions = [
  { label: 'Less than $500', value: '< $500' },
  { label: '$500 - $1000', value: '$500 - $1000' },
  { label: '$1000 - $3000', value: '$1000 - $3000' },
  { label: 'More than $3000', value: '> $3000' },
]

// Validation schema
const validationSchema = yup.object({
  name: yup
    .string()
    .matches(/^[A-Za-z\s]+$/, 'Only alphabet and space is accepted')
    .min(3, 'Name must be at least 3 characters')
    .required('Name is required'),

  email: yup.string().email('Invalid email').required('Email is required'),

  phone: yup
    .string()
    .matches(/^\+\d[\d\s-]*$/, 'Phone must start with + and contain only digits, spaces or dashes')
    .required('Phone is required'),
  service: yup.string().required('Service is required'),

  budget: yup.string().required('Budget is required'),

  message: yup
    .string()
    .min(10, 'Message must be from 10 to 100 characters')
    .max(100, 'Message must be from 10 to 100 characters')
    .required('Message is required'),
})

// Handle Submit
function onSubmit(values, { resetForm }) {
  layout.value = 2
  submittedValues.value = values
  console.log(values)
}
function onReSubmit(values) {
  layout.value = 1
  contactForm.value?.resetForm()
}
</script>
<template>
  <div class="flex flex-col p-2 text-black items-center">
    <p class="text-2xl p-2">{{ t('contact_title') }}</p>

    <!-- Success layout -->
    <div
      v-if="layout === 2"
      class="w-full h-full gap-2 max-w-xl mx-auto flex flex-col items-center space-y-4 p-4"
    >
      <code class="text-green-600 font-mono">Method: POST</code>
      <code class="text-green-600 underline underline-offset-2 text-sm font-mono">Sucessfull</code>
      <hljsVuePlugin.component
        autodetect
        class="w-full h-full"
        :code="JSON.stringify(submittedValues, null, 2)"
      />

      <p class="text-sm italic text-gray-500">Form has been submitted</p>
      <button
        type="button"
        @click="onReSubmit"
        class="w-[50%] py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Submit Another
      </button>
    </div>

    <!-- Vee Form -->
    <Form
      method="POST"
      netlify
      ref="contactForm"
      v-else
      data-netlify="true"
      name="contact-form"
      :validation-schema="validationSchema"
      @submit="onSubmit"
      class="w-full gap-2 max-w-xl mx-auto flex flex-col space-y-4 p-4"
      v-slot="{ errors, values }"
    >
      <!-- Full Name -->
      <div class="flex flex-col gap-1">
        <label for="name">{{ t('contact_fullName') }}</label>
        <Field
          id="name"
          name="name"
          type="text"
          class="w-full p-2 border rounded"
          :placeholder="t('contact_namePlaceholder')"
        />
        <ErrorMessage name="name" class="text-red-500 text-sm" />
      </div>

      <!-- Email -->
      <div class="flex flex-col gap-1">
        <label for="email">{{ t('contact_email') }}</label>
        <Field
          id="email"
          name="email"
          type="email"
          class="w-full p-2 border rounded"
          placeholder="you@example.com"
        />
        <ErrorMessage name="email" class="text-red-500 text-sm" />
      </div>

      <!-- Phone -->
      <div class="flex flex-col gap-1">
        <label for="phone">{{ t('contact_phone') }}</label>
        <Field
          id="phone"
          name="phone"
          type="tel"
          class="w-full p-2 border rounded"
          placeholder="+855 12345678"
        />
        <ErrorMessage name="phone" class="text-red-500 text-sm" />
      </div>

      <!-- Service -->
      <div class="flex flex-col gap-1">
        <label for="service">{{ t('contact_service') }}</label>
        <Field as="select" name="service" class="w-full p-2 border rounded">
          <option value="" disabled>{{ t('contact_selectService') }}</option>
          <option value="frontend">Frontend Development</option>
          <option value="backend">Backend Development</option>
          <option value="gis">GIS Solutions</option>
          <option value="fullstack">Full Stack</option>
          <option value="other">Other</option>
        </Field>
        <ErrorMessage name="service" class="text-red-500 text-sm" />
      </div>

      <!-- Budget -->
      <div class="flex flex-col gap-2">
        <label class="mb-1">{{ t('contact_budget') }}</label>
        <div class="grid grid-cols-2 gap-2">
          <label
            v-for="option in budgetOptions"
            :key="option.value"
            class="cursor-pointer group flex items-center gap-2 p-3 border rounded-lg transition-transform transform hover:scale-105"
            :class="{
              'ring-2 ring-blue-500 bg-blue-50 dark:bg-gray-800': values.budget === option.value,
              'bg-white dark:bg-gray-900': values.budget !== option.value,
            }"
          >
            <Field type="radio" name="budget" :value="option.value" class="hidden" />
            <span class="text-sm font-medium text-gray-900 dark:text-gray-200">
              {{ option.label }}
            </span>
          </label>
        </div>
        <ErrorMessage name="budget" class="text-red-500 text-sm" />
      </div>

      <!-- Message -->
      <div class="flex flex-col gap-1">
        <label for="message">{{ t('contact_description') }}</label>
        <Field
          as="textarea"
          id="message"
          name="message"
          rows="5"
          class="w-full p-2 border rounded"
          :placeholder="t('contact_descriptionPlaceholder')"
        />
        <ErrorMessage name="message" class="text-red-500 text-sm" />
      </div>

      <!-- Submit Button -->
      <button
        type="submit"
        class="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        {{ t('contact_sendMessage') }}
      </button>
    </Form>
  </div>
</template>
