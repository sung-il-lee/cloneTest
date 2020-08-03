import React, { Component } from 'react';
import BookShelf from './BookShelf';
import { Link } from 'react-router-dom';

class ListBooks extends Component {
  mapBooksToShelves(books = []) {
    const bookShelvesMap = {};
    for (const book of books) {
      if (bookShelvesMap[book.shelf]) {
        bookShelvesMap[book.shelf].push(book);
      } else {
        bookShelvesMap[book.shelf] = [book];
      }
    }
    return bookShelvesMap;
  }

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
    const { books } = this.props;
    const bookShelvesMap = this.mapBooksToShelves(books);
    return (
      <div>
        <div className='list-books'>
          <div className='list-books-title'>
            <h1>MyReads</h1>
          </div>
          <div className='list-books-content'>
            {Object.keys(bookShelvesMap).map((key, i) => {
              const bookShelfName = this.extractBookShelfName(key);
              return (
                <BookShelf
                  bookShelfBooks={bookShelvesMap[key]}
                  bookShelfName={bookShelfName}
                  key={bookShelfName}
                />
              );
            })}
          </div>
        </div>
        <div className='open-search'>
          <Link to='/search'>
            <button>Add a book</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default ListBooks;
