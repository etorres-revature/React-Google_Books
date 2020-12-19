import { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BookNavbar from "./layout/BookNavbar";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Saved from "./pages/Saved";

import API from "./utils/API"

class App extends Component {
  constructor() {
    super();
    this.state = {
      home: {
        title: "Search and Save Books from the Google API",
      },
      search: {
        title: "Search books from the Google Books API",
      },
      saved: {
        title: "Saved books from the Google Books API",
      },
      searchInput: "",
      books: [],
      title: "",
      authors: [],
      description: [],
      synopsis: "",
      image: "",
      link: "",
    };
  }

  handleChange = (e) => {
    this.setState({ searchInput: e.target.value });
  };

  handleSubmit =(e) => {
    e.preventDefault();
    API.getBook(this.state.search)
    .then(res => {
      console.log(res.data.items)
      this.setState({books: [res.data.items]})
    })
    
  }

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
              />
            )}
          />
          <Route
            exact
            path="/saved"
            render={() => <Saved title={this.state.saved.title} />}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
