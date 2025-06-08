<template>
  <div>
    <h2>{{ isEdit ? "Edit Product" : "Add Product" }}</h2>
    <form @submit.prevent="handleSubmit">
      <div>
        <label>Name:</label>
        <input v-model="form.name" required />
      </div>
      <div>
        <label>Author:</label>
        <input v-model="form.author" required />
      </div>
      <div>
        <label>Price:</label>
        <input v-model="form.price" required type="number" />
      </div>
      <button type="submit">Save</button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { bookStore as store } from "../store/bookStore";

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
