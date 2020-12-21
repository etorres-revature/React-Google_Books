import { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BookNavbar from "./layout/BookNavbar";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
import BookFooter from "./layout/BookFooter";

import API from "./utils/API";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      home: {
        title: "Search and Save Books from the Google API",
      },
      search: {
        title: "Search books from the Google Books API",
        as: "input",
        type: "button",
        value: "Input",
        variant: "success",
        classes: "float-right mb-2",
        size: "sm",
      },
      saved: {
        title: "Saved books from the Google Books API",
      },
      searchInput: "",
      books: [],
      title: "",
      authors: [],
      description: "",
      image: "",
      link: "",
      publisher: "",
      publishedDate: "",
    };
  }

  handleChange = (e) => {
    this.setState({ searchInput: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    API.getBook(this.state.searchInput).then((res) => {
      this.setState({ books: [res.data.items] });
    });
  };

  handleSaveBook = (e) => {
    e.preventDefault();
    let newBook = this.state.books[0].filter((book) => {
      return book.id === e.target.parentNode.dataset.id;
    });

    let title = newBook[0].volumeInfo.title;
    let authors = newBook[0].volumeInfo.authors;
    let description = newBook[0].volumeInfo.description;
    let image = newBook[0].volumeInfo.imageLinks.thumbnail;
    let link = newBook[0].volumeInfo.infoLink;
    let publisher = newBook[0].volumeInfo.publisher;
    let publishedDate = newBook[0].volumeInfo.publishedDate;

    this.setState(
      {
        title: title,
        authors: authors,
        description: description,
        image: image,
        link: link,
        publisher: publisher,
        publishedDate: publishedDate,
      },
      () =>
        API.saveBook({
          title: this.state.title,
          authors: this.state.authors,
          description: this.state.description,
          image: this.state.image,
          link: this.state.link,
          publisher: this.state.publisher,
          publishedDate: this.state.publishedDate,
        })
    );
  };

  render() {
    return (
      <Router>
        <BookNavbar />
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Home title={this.state.home.title} />}
          />
          <Route
            exact
            path="/search"
            render={() => (
              <Search
                title={this.state.search.title}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                books={this.state.books}
                id={this.state.books}
                handleSaveBook={this.handleSaveBook}
                type={this.state.search.type}
                variant={this.state.search.variant}
                className={this.state.search.classes}
                size={this.state.search.size}
              />
            )}
          />
          <Route
            exact
            path="/saved"
            render={() => <Saved title={this.state.saved.title} />}
          />
          <Route render={() => <NoMatch />} />
        </Switch>
        <BookFooter />
      </Router>
    );
  }
}

export default App;
