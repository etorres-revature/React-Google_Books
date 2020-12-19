import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

const BookNavbar = () => {
  return (
    <Navbar className="border-bottom" bg="transparent" expand="md">
      <Navbar.Brand>
        <strong>Google Books</strong>
      </Navbar.Brand>
      <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
      <Navbar.Collapse id="navbar-toggle">
        <Nav className="ml-auto">
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/search">
            Search
          </Link>
          <Link className="nav-link" to="/saved">
            Saved
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default BookNavbar;
