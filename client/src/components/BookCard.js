import React from "react";
import "./BookCard.css";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

const BookCard = (props) => {
  console.log(props.books);
  return props.books.length === 0 ? (
    <h1>There is nothing to display at this time.</h1>
  ) : (
    props.books.map((book, i) => (
      <Card key={i}>
        <Card.Body>
          <Card.Header>{book[i].volumeInfo.title}</Card.Header>{" "}
          <img
            className="bookImage float-left mr-2"
            alt={"cover art for " + book[i].volumeInfo.title}
            src={book[i].volumeInfo.imageLinks.thumbnail}
          />
          {book[i].volumeInfo.description}
          <div>
            <ListGroup className="list-group mt-2">
              <ListGroupItem>
                Author(s): {book[i].volumeInfo.authors}
              </ListGroupItem>
              <ListGroupItem>
                Publisher: {book[i].volumeInfo.publisher}
              </ListGroupItem>
              <ListGroupItem>
                Publish Date: {book[i].volumeInfo.publishedDate}
              </ListGroupItem>
            </ListGroup>
          </div>
          <Card.Body>
            <Card.Link href={book[i].volumeInfo.previewLink}>
              Preview Link
            </Card.Link>
            <Card.Link
              className="float-right"
              href={book[i].volumeInfo.infoLink}
            >
              Info Link
            </Card.Link>
          </Card.Body>
        </Card.Body>
      </Card>
    ))
  );
};

export default BookCard;
