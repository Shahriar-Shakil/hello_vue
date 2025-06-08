import { reactive } from "vue";

export const bookStore = reactive({
  books: [],
  addBook(book) {
    book.id = Date.now().toString();
    this.books.push(book);
  },
  updateBook(id, newData) {
    const index = this.books.findIndex((p) => p.id === id);
    if (index !== -1) this.books[index] = { ...newData, id };
  },
  getBook(id) {
    return this.books.find((p) => p.id === id);
  },
});
