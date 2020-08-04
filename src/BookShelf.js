import React, { Component } from 'react';
import Book from './Book';

class BookShelf extends Component {
  extractBookShelfName(shelfValue) {
    if (shelfValue === 'currentlyReading') {
      return 'Currently Reading';
    } else if (shelfValue === 'wantToRead') {
      return 'Want To Read';
    } else if (shelfValue === 'read') {
      return 'Read';
    }
  }
  render() {
    const { bookShelfBooks, bookShelfNameKey, onSelectShelf } = this.props;
    const bookShelfName = this.extractBookShelfName(bookShelfNameKey);
    return (
      <div className='bookshelf'>
        <h2 className='bookshelf-title'>{bookShelfName}</h2>
        <div className='bookshelf-books'>
          <ol className='books-grid'>
            {bookShelfBooks.map((book) => {
              return (
                <Book book={book} onSelectShelf={onSelectShelf} key={book.id} />
              );
            })}
          </ol>
        </div>
      </div>
    );
  }
}

export default BookShelf;
