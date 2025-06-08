import { createRouter, createWebHistory } from "vue-router";
import BookForm from "./views/bookForm.vue";
import BookList from "./views/bookList.vue";

const routes = [
  { path: "/", component: BookList },
  { path: "/add", component: BookForm },
  { path: "/edit/:id", component: BookForm, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
