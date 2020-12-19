import React from "react";
import BookJumbotron from "../components/BookJumbotron";

const Home = (props) => {
  return (
    <div>
      <BookJumbotron title={props.title} />
      <div>This is home</div>
    </div>
  );
};

export default Home;
