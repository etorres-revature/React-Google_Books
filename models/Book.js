const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  authors: {
    type: Array,
    required: true,
  },
  description: { type: String },
  image: { type: String },
  link: { type: String },
  publisher: { type: String },
  publishedDate: { type: String },
  dateAdded: { type: Date, default: Date.now },
});

const Book = new mongoose.model("Book", BookSchema);

module.exports = Book;
