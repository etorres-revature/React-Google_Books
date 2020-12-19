import { Form, Button } from "react-bootstrap";

const BookText = ({ handleChange, searchInput, handleSubmit }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Book Search</Form.Label>
        <Form.Control
          value={searchInput}
          onChange={handleChange}
          type="text"
          placeholder="Enter the name of a book here..."
        />
      </Form.Group>
      <Button
        className="float-right"
        variant="info"
        type="submit"
      >
        Search for Books
      </Button>
    </Form>
  );
};

export default BookText;
