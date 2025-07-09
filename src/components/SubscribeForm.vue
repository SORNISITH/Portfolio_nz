<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-50">
    <div class="bg-white rounded-xl shadow-xl p-10 max-w-3xl w-full">
      <h2 class="text-3xl font-semibold text-gray-900 flex items-center gap-2">
        Subscribe to Bytes
        <img
          src="https://cdn.jsdelivr.net/gh/trekhleb/javascript-algorithms/assets/js-icon-512.png"
          alt="JS Logo"
          class="w-8 h-8"
        />
      </h2>
      <p class="text-lg text-gray-700 mt-2 mb-6">The Best JavaScript Newsletter</p>

      <div class="flex flex-col sm:flex-row gap-4">
        <input
          type="email"
          placeholder="Your email address"
          class="flex-1 px-4 py-3 rounded-md bg-gray-200 text-gray-700 placeholder-gray-500 focus:outline-none"
        />
        <button class="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-md">
          SUBSCRIBE
        </button>
      </div>

      <p class="text-gray-400 italic text-sm mt-4">Join over 100,000 devs</p>
    </div>
  </div>
</template>
