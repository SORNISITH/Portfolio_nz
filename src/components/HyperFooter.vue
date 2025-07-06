<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
<template>
  <footer class="bg-black text-gray-300 flex justify-center items-center py-10">
    <div class="max-w-7xl items-center mx-auto px-6 md:px-12">
      <div class="flex flex-col md:flex-row md:justify-between md:items-start gap-8">
        <!-- About Company -->
        <div class="md:w-1/3">
          <h2 class="text-white text-xl font-semibold mb-4">{{ t('perspective') }}</h2>
          <p class="text-gray-400 leading-relaxed">
            {{ t('perspective_desc') }}
          </p>
        </div>

        <!-- Services -->
        <div class="md:w-1/3">
          <h2 class="text-white text-xl font-semibold mb-4">{{ t('footer_our_services') }}</h2>
          <ul class="space-y-2 text-gray-400">
            <li>
              <address class="hover:text-white transition">{{ t('footer_web_design') }}</address>
            </li>
            <li>
              <address class="hover:text-white transition">
                {{ t('footer_app_development') }}
              </address>
            </li>
            <li>
              <address href="/" class="hover:text-white transition">
                {{ t('footer_seo_optimization') }}
              </address>
            </li>
            <li>
              <address class="hover:text-white transition">{{ t('footer_cloud_hosting') }}</address>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div class="md:w-1/3">
          <h2 class="text-white text-xl font-semibold mb-4">{{ t('contact_us') }}</h2>
          <p class="text-gray-400 mb-2">Email : nisith100394@gmail.com</p>
          <p class="text-gray-400 mb-2">{{ t('footer_phone') }}</p>
          <p class="text-gray-400">{{ t('footer_address') }}</p>
        </div>
      </div>
      <br />
      <div class="mt-10 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        {{ t('copyright') }}
      </div>
    </div>
  </footer>
</template>
