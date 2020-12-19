import axios from "axios";

export default {
  getBook: (query) => {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
  },

  deleteBook: (id) => {
    return axios.delete("/api/books" + id).then((result) => result.data);
  },

  saveBook: (bookData) => {
    return axios.post("/api/books", bookData).then((result) => result.data);
  },

  savedBooks: () => {
    return axios.get("/api/books").then((result) => result.data);
  },
};
