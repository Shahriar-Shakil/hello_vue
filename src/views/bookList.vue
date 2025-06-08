<template>
  <div>
    <h2>Book List</h2>
    <ul>
      <li v-for="book in store.books" :key="book.id">
        {{ book.name }} - {{ book.author }} - {{ book.price }}
        <router-link :to="`/edit/${book.id}`">Edit</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { bookStore as store } from "../store/bookStore";
</script>
