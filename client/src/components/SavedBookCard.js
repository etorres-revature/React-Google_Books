import React from "react";
import { Card, Button } from "react-bootstrap";

const SavedBookCard = (props) => {
  return (
    <Card className="mb-4">
      <Card.Header>
        <strong>Title: {props.book.title} </strong> {" / "} Author(s):{" "}
        {props.book.authors}
      </Card.Header>
      <Card.Body className="bg-dark text-white">
        <div className="float-left m-2">
          <Card.Img
            src={props.book.image}
            alt={props.book.title + " cover image"}
            className="bookImage"
          />
        </div>
        <Card.Text>{props.book.description}</Card.Text>
        <Card.Text>
          Publisher: {props.book.publisher}
          {"; "} {props.book.publishedDate}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <Card.Link href={props.book.link}>More Info</Card.Link>{" "}
        <Button
          className="float-right mb-2"
          variant="danger"
          size="sm"
          data-id={props.book._id}
          onClick={() => props.removeBook(props.book._id)}
        >
          {" "}
          REMOVE{" "}
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default SavedBookCard;
