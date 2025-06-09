<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center p-4">
    <div class="w-full max-w-2xl bg-white shadow-xl rounded-lg p-8">
      <h2 class="text-4xl font-extrabold mb-8 text-center text-gray-900">
        📚 My Book Collection
      </h2>
      <ul class="space-y-6">
        <li
          v-for="book in store.books"
          :key="book.id"
          class="bg-gray-50 border border-gray-200 rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between transition-all duration-300 ease-in-out hover:shadow-lg hover:border-indigo-400"
        >
          <div class="mb-4 sm:mb-0 sm:mr-6 flex-grow">
            <h3 class="text-2xl font-bold text-indigo-700 mb-1">
              {{ book.name }}
            </h3>
            <p class="text-gray-700 text-lg">
              <span class="font-semibold">Author:</span> {{ book.author }}
            </p>
            <p class="text-green-600 text-xl font-extrabold mt-1">
              <span class="font-semibold text-gray-600">Price:</span> $
              {{ book.price }}
            </p>
          </div>
          <div
            class="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3"
          >
            <router-link
              :to="`/edit/${book.id}`"
              class="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
            >
              Edit
            </router-link>
            <button
              @click="handleDelete(book.id)"
              class="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-150 ease-in-out"
            >
              Delete
            </button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { bookStore as store } from "../store/bookStore";

function handleDelete(id) {
  store.deleteBook(id);
}
</script>
