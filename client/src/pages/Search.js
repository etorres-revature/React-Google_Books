import React from "react";
import { Container } from "react-bootstrap";
import BookJumbotron from "../components/BookJumbotron";
import BookText from "../components/BookText";
import BookCardList from "../components/BookCardList";

const Search = ({ title, handleChange }) => {
  return (
    <div>
      <BookJumbotron title={title} />
      <Container>
        <div className="card p-3">
          <BookText handleChange={handleChange} />
        </div>
      </Container>
      <BookCardList />
    </div>
  );
};

export default Search;
