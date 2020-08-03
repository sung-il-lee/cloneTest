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

  searchBooks = (searchQuery) => {
    BooksAPI.search(searchQuery).then((books) => {
      console.log('searchBooks', books);
      this.setState(() => ({
        books,
      }));
    });
  };

  render() {
    return (
      <div>
        <Route
          exact
          path='/'
          render={() => <ListBooks books={this.state.books} />}
        />
        <Route
          path='/search'
          render={() => (
            <Search
              books={this.state.books}
              onSearchBooks={(query) => {
                this.searchBooks(query);
              }}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
