import React from "react";
import { Jumbotron, Container } from "react-bootstrap";

const BookJumbotron = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container>
          <h1>{props.title}</h1>
        </Container>
      </Jumbotron>
      <span className="mb-3 p-0">
        Photo by{" "}
        <a href="https://unsplash.com/@anniespratt?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
          Annie Spratt
        </a>{" "}
        on{" "}
        <a href="https://unsplash.com/s/photos/home-library?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
          Unsplash
        </a>
      </span>
    </div>
  );
};

export default BookJumbotron;
