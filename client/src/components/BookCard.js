import React from "react";
import "./BookCard.css";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

const BookCard = (props) => {
  console.log(props.books);
  return props.books.length === 0 ? (
    <h1>There is nothing to display at this time.</h1>
  ) : (
    props.books[0].map((book, i) => (
      <Card key={i}>
        <Card.Body>
          <Card.Header>{book.volumeInfo.title}</Card.Header>{" "}
          <img
            className="bookImage float-left mr-2"
            alt={"cover art for " + book.volumeInfo.title}
            src={book.volumeInfo.imageLinks.thumbnail}
          />
          {book.volumeInfo.description}
          <div>
            <ListGroup className="list-group mt-2">
              <ListGroupItem>
                Author(s): {book.volumeInfo.authors}
              </ListGroupItem>
              <ListGroupItem>
                Publisher: {book.volumeInfo.publisher}
              </ListGroupItem>
              <ListGroupItem>
                Publish Date: {book.volumeInfo.publishedDate}
              </ListGroupItem>
            </ListGroup>
          </div>
          <Card.Body>
            <Card.Link href={book.volumeInfo.previewLink}>
              Preview Link
            </Card.Link>
            <Card.Link className="float-right" href={book.volumeInfo.infoLink}>
              Info Link
            </Card.Link>
          </Card.Body>
        </Card.Body>
      </Card>
    ))
  );
};

export default BookCard;
