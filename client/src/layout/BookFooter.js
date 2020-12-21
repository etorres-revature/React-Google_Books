import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./BookFooter.css";

const MyFooter = () => {
  return (
    <footer className="footer  mt-5 border-top text-center" fluid={true}>
      <Container>
        <Row className="mb-2">
          <Col>Visit me on social media: </Col>
        </Row>
        <Row className="mb-2">
          <Col>
            <a
              href="https://www.linkedin.com/in/ericdtorres/"
              className="fa fa-linkedin"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
            <a
              href="https://github.com/etorres-revature"
              className="fa fa-github"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
          </Col>
        </Row>
        <Row>
          <Col>
            <p id="e_mail">
              E-mail:{" "}
              <a href="mailto:etorresnotary@gmail.com">
                etorresnotary@gmail.com
              </a>
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>&copy; 2020 Eric D. Torres Productions</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default MyFooter;
