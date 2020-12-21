import { Form, Button } from "react-bootstrap";

const BookText = (props) => {
  return (
    <Form onSubmit={props.handleSubmit}>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Book Search</Form.Label>
        <Form.Control
          value={props.searchInput}
          onChange={props.handleChange}
          type="text"
          placeholder="Enter the name of a book here..."
        />
      </Form.Group>
      <Button className="float-right" variant="info" type="submit">
        Search for Books
      </Button>
    </Form>
  );
};

export default BookText;
