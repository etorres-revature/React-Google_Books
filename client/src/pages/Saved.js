import React from "react";
import BookJumbotron from "../components/BookJumbotron";

const Saved = (props) => {
  return (
    <div>
      <BookJumbotron title={props.title} />
      <div>This is saved</div>
    </div>
  );
};

export default Saved;
