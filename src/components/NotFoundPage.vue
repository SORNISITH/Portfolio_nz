<template>
  <!-- component -->
  <!-- This is an example component -->
  <div class="h-screen w-screen bg-gray-50 justify-center flex items-center">
    <div
      class="container flex flex-col md:flex-row items-center justify-between px-5 text-gray-700"
    >
      <div class="w-full lg:w-1/2 mx-8">
        <div class="text-7xl text-green-500 font-dark font-extrabold mb-8">404</div>
        <p class="text-2xl md:text-3xl font-light leading-normal mb-8">
          Sorry we couldn't find the page you're looking for
        </p>
        <br />
        <router-link
          to="/"
          class="px-10 mt-5 inline py-3 text-sm font-medium leading-5 shadow-2xl text-white transition-all duration-400 border border-transparent rounded-lg focus:outline-none bg-green-600 active:bg-red-600 hover:bg-red-700"
          >back to homepage</router-link
        >
      </div>
      <div class="w-full lg:flex lg:justify-end lg:w-1/2 mx-5 my-12">
        <img
          src="https://user-images.githubusercontent.com/43953425/166269493-acd08ccb-4df3-4474-95c7-ad1034d3c070.svg"
          class=""
          alt="Page not found"
        />
      </div>
    </div>
  </div>
</template>
