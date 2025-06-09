import { defineStore } from "pinia";

export const useBookStore = defineStore("bookStore", {
  state: () => ({
    books: [],
  }),
  actions: {
    addBook(book) {
      book.id = Date.now().toString();
      this.books.push(book);
    },
    updateBook(id, newData) {
      const index = this.books.findIndex((b) => b.id === id);
      if (index !== -1) this.books[index] = { ...newData, id };
    },
    getBook(id) {
      return this.books.find((b) => b.id === id);
    },
    deleteBook(id) {
      const index = this.books.findIndex((b) => b.id === id);
      if (index !== -1) this.books.splice(index, 1);
    },
  },
  persist: true,
});
