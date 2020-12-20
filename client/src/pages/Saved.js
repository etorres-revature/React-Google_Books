import React from "react";
import BookJumbotron from "../components/BookJumbotron";
import SavedBookList from "../components/SavedBookList";
import "./Saved.css";

const Saved = (props) => {
  return (
    <div>
      <BookJumbotron title={props.title} />
      <span className="mb-3 p-0">
        Photo by{" "}
        <a href="https://unsplash.com/@anniespratt?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
          Annie Spratt
        </a>{" "}
        on{" "}
        <a href="https://unsplash.com/s/photos/home-library?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
          Unsplash
        </a>
      </span>
      <SavedBookList />
    </div>
  );
};

export default Saved;
