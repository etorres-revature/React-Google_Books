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
        console.log(res);
        this.setState({ books: res.data }, () => {
          console.log(this.state.books);
        });
      })
      .catch((err) => console.log(err));
  };

  removeBook = (e, id) => {
    e.preventDefault();
    API.deleteBook(id)
      .then((res) => {
        console.log(res);
        alert(`${res.title} has been deleted`);
      })
      .then((res) => this.loadBooks())
      .catch((err) => console.log(err));
  };

  makeCards = (books) => {
    return books.map((book) => {
      return (
        <SavedBookCard
          key={book._id}
          book={book}
          removeBook={this.removeBook}
        />
      );
    });
  };

  render() {
    return <Container>{this.makeCards(this.state.books)}</Container>;
  }
}

export default SavedBookList;
