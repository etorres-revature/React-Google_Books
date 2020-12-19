import React from "react";
import { Container } from "react-bootstrap";
import BookJumbotron from "../components/BookJumbotron";
import BookText from "../components/BookText";
import BookCardList from "../components/BookCardList";

const Search = (props) => {
  return (
    <div>
      <BookJumbotron title={props.title} />
      <Container className="mb-4">
        <div className="card p-3">
          <BookText
            handleChange={props.handleChange}
            handleSubmit={props.handleSubmit}
          />
        </div>
      </Container>
      <BookCardList books={props.books} />
    </div>
  );
};

export default Search;
