import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import { Route } from 'react-router-dom';
import ListBooks from './ListBooks';
import Search from './Search';

class BooksApp extends React.Component {
  state = {
    books: [],
    searchedBooks: [],
  };

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState(() => ({
        books,
      }));
    });
  }

  searchBooks = (searchQuery) => {
    BooksAPI.search(searchQuery).then((searchedBooks) => {
      console.log('searchBooks', searchedBooks);
      this.setState(() => ({
        searchedBooks,
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
              searchedBooks={this.state.searchedBooks}
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
