<template>
  <div
    class="container mx-auto p-6 bg-white shadow-lg rounded-lg max-w-md mt-10"
  >
    <h2 class="text-3xl font-bold mb-8 text-center text-gray-800">
      {{ isEdit ? "✏️ Edit Book" : "➕ Add New Book" }}
    </h2>

    <form @submit.prevent="handleSubmit" class="space-y-6">
      <div>
        <label for="name" class="block text-gray-700 text-sm font-bold mb-2"
          >Book Name:</label
        >
        <input
          type="text"
          id="name"
          v-model="form.name"
          required
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200"
          placeholder="e.g., The Hitchhiker's Guide to the Galaxy"
        />
      </div>

      <div>
        <label for="author" class="block text-gray-700 text-sm font-bold mb-2"
          >Author:</label
        >
        <input
          type="text"
          id="author"
          v-model="form.author"
          required
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200"
          placeholder="e.g., Douglas Adams"
        />
      </div>

      <div>
        <label for="price" class="block text-gray-700 text-sm font-bold mb-2"
          >Price ($):</label
        >
        <input
          type="number"
          id="price"
          v-model="form.price"
          required
          min="0"
          step="0.01"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200"
          placeholder="e.g., 19.99"
        />
      </div>

      <button
        type="submit"
        class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 ease-in-out transform hover:scale-105"
      >
        {{ isEdit ? "Update Book" : "Add Book" }}
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useBookStore } from "../store/bookStore";

const store = useBookStore();
const route = useRoute();
const router = useRouter();

const isEdit = !!route.params.id;
const form = ref({ name: "", author: "", price: "" });

onMounted(() => {
  if (isEdit) {
    const book = store.getBook(route.params.id);
    if (book) {
      form.value = { ...book };
    }
  }
});

function handleSubmit() {
  if (isEdit) {
    store.updateBook(route.params.id, form.value);
  } else {
    store.addBook(form.value);
  }
  router.push("/");
}
</script>
