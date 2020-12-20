import React from "react";
import { Link } from "react-router-dom";
import BookJumbotron from "../components/BookJumbotron";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

const Home = (props) => {
  return (
    <div>
      <BookJumbotron title={props.title} />
      <Container className="mt-4">
        <Row>
          <Col>
            <Card>
              <Card.Header>
                <strong>
                  Search <span className="blue">G</span>
                  <span className="red">o</span>
                  <span className="yellow">o</span>
                  <span className="blue">g</span>
                  <span className="green">l</span>
                  <span className="red">e</span> Books
                </strong>
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  Follow this link to search the <span className="blue">G</span>
                  <span className="red">o</span>
                  <span className="yellow">o</span>
                  <span className="blue">g</span>
                  <span className="green">l</span>
                  <span className="red">e</span> Books API for your favorite
                  titles.
                </Card.Text>
                <div className="text-center">
                  <Link to="/search">
                    <Button variant="success">SEARCH</Button>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Header>
                {" "}
                <strong>
                  Saved <span className="blue">G</span>
                  <span className="red">o</span>
                  <span className="yellow">o</span>
                  <span className="blue">g</span>
                  <span className="green">l</span>
                  <span className="red">e</span> Books
                </strong>
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  Follow this link to view books saved as part of your{" "}
                  <span className="blue">G</span>
                  <span className="red">o</span>
                  <span className="yellow">o</span>
                  <span className="blue">g</span>
                  <span className="green">l</span>
                  <span className="red">e</span> collection.
                </Card.Text>
                <div className="text-center">
                  <Link to="/saved">
                    <Button variant="warning">SAVED </Button>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
