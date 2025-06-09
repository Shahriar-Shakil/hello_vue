<template>
  <div class="min-h-screen bg-gray-100 font-sans antialiased">
    <header class="bg-indigo-700 text-white shadow-md py-4">
      <div
        class="container mx-auto flex flex-col sm:flex-row justify-between items-center px-4"
      >
        <h1 class="text-3xl font-extrabold mb-3 sm:mb-0">Vue Book Store App</h1>
        <nav class="space-x-6">
          <router-link
            to="/"
            class="text-lg font-medium hover:text-indigo-200 transition duration-300 ease-in-out"
            active-class="border-b-2 border-indigo-200 pb-1"
          >
            Book List
          </router-link>
          <router-link
            to="/add"
            class="text-lg font-medium hover:text-indigo-200 transition duration-300 ease-in-out"
            active-class="border-b-2 border-indigo-200 pb-1"
          >
            Add New Books
          </router-link>
        </nav>
      </div>
    </header>

    <main class="container mx-auto mt-8 p-4">
      <router-view />
    </main>
  </div>
</template>

<script setup>
// No script changes needed for this template update
</script>
