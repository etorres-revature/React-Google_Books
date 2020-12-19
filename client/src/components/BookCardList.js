import React from "react";
import Card from "./BookCard";

const BookCardList = (props) => {
  return (
    <div>
      <Card books={props.books} />
    </div>
  );
};

export default BookCardList;
