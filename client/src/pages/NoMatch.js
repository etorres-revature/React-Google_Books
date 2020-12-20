import React from "react";
import { Link } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import "./NoMatch.css";

import vader from "../assets/img/404-vader.png";

const NoMatch = () => {
  return (
    <Container className="text-center">
      <h2>
        Oh,{" "}
        <span role="img" aria-label="poop">
          💩
        </span>
        !!{" "}
      </h2>
      <h2>Error Code: 404 - Page not found!!</h2>
      <img src={vader} className="vader mb-4 mt-4" alt="darth vader" />

      <h4>This path leads only to the dark side...</h4>

      <Link to="/">
        <Button variant="primary">Return to the Light</Button>
      </Link>
    </Container>
  );
};

export default NoMatch;
