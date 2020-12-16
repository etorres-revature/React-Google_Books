const mongoose = require("mongoose");

const Schema = new mongoose.Schema();

const BookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  authors: {
    type: Array,
    required: true,
  },
  description: {},
  synopsis: {},
  image: { type: {} },
  link: { type: String },
  dateAdded: { type: Date, default: Date.now },
});

const Book = new mongoose.model("Book", BookSchema);

module.exports = Book;
