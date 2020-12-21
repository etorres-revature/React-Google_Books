import React, { Component } from "react";
import { Container } from "react-bootstrap";
import SavedBookCard from "./SavedBookCard";

import API from "../utils/API";

class SavedBookList extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
    };
  }

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.savedBooks()
      .then((res) => {
        this.setState({ books: res.data });
      })
      .catch((err) => console.log(err));
  };

  removeBook = (id) => {
    API.deleteBook(id)
      .then((res) => {
        alert(`This book has been deleted`);
      })
      .then((res) => this.loadBooks())
      .catch((err) => console.log(err));
  };

  makeCards = (books, removeBook) => {
    return books.map((book) => {
      return (
        <SavedBookCard
          key={book._id}
          book={book}
          removeBook={removeBook}
        ></SavedBookCard>
      );
    });
  };

  render() {
    return (
      <Container className="mt-3">
        {this.makeCards(this.state.books, this.removeBook)}
      </Container>
    );
  }
}

export default SavedBookList;
