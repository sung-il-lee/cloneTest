import React, { Component } from 'react';
import Book from './Book';

class BookShelf extends Component {
  render() {
    const { bookShelfBooks, bookShelfName } = this.props;
    return (
      <div className='bookshelf'>
        <h2 className='bookshelf-title'>{bookShelfName}</h2>
        <div className='bookshelf-books'>
          <ol className='books-grid'>
            {bookShelfBooks.map((book) => {
              return <Book book={book} key={book.id} />;
            })}
          </ol>
        </div>
      </div>
    );
  }
}

export default BookShelf;
