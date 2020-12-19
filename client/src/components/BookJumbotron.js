import React from "react";
import { Jumbotron, Container } from "react-bootstrap";

const BookJumbotron = (props) => {
  return (
    <Jumbotron fluid>
      <Container>
        <h1>{props.title}</h1>
      </Container>
    </Jumbotron>
  );
};

export default BookJumbotron;
