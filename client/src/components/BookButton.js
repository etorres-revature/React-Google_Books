import React from "react";
import { Button } from "react-bootstrap";

const BookButton = (props) => {
  return (<Button variant="info" >{props.children}</Button>)
};


export default BookButton;
