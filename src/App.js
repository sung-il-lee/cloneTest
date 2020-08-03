import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import { Route } from 'react-router-dom';
import ListBooks from './ListBooks';
import Search from './Search';

class BooksApp extends React.Component {
  state = {
    books: [],
  };

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState(() => ({
        books,
      }));
    });
  }

  render() {
    return (
      <div>
        <Route
          exact
          path='/'
          render={() => <ListBooks books={this.state.books} />}
        />
        <Route path='/search' render={() => <Search />} />
      </div>
    );
  }
}

export default BooksApp;
