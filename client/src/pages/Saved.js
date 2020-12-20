import React from "react";
import BookJumbotron from "../components/BookJumbotron";
import SavedBookList from "../components/SavedBookList";

const Saved = (props) => {
  return (
    <div>
      <BookJumbotron title={props.title} />
      <SavedBookList />
    </div>
  );
};

export default Saved;
