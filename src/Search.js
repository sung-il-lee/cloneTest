import React, { Component } from 'react';
import Book from './Book';

class Search extends Component {
  onInputChange = (e) => {
    if (this.props.onSearchBooks) {
      this.props.onSearchBooks(e.target.value);
    }
  };
  render() {
    const { books } = this.props;
    return (
      <div className='search-books'>
        <div className='search-books-bar'>
          <button className='close-search' onClick={() => {}}>
            Close
          </button>
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
