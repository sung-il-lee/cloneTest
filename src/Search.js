import React, { Component } from 'react';
import Book from './Book';
import { Link } from 'react-router-dom';

class Search extends Component {
  onInputChange = (e) => {
    if (this.props.onSearchBooks) {
      this.props.onSearchBooks(e.target.value);
    }
  };
  render() {
    const { books } = this.props;
    console.log(books);
    return (
      <div className='search-books'>
        <div className='search-books-bar'>
          <Link to='/'>
            <button className='close-search'>Close</button>
          </Link>
          <div className='search-books-input-wrapper'>
            <input
              type='text'
              onChange={this.onInputChange}
              placeholder='Search by title or author'
            />
          </div>
        </div>
        <div className='search-books-results'>
          <ol className='books-grid'>
            {books &&
              books.length &&
              books.map((book) => {
                return <Book book={book} key={book.id} />;
              })}
          </ol>
        </div>
      </div>
    );
  }
}

export default Search;
