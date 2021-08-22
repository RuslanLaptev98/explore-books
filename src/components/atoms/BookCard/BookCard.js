import React from 'react'
import './BookCard.css'

export default function BookCard({ book, setSelectedBook, setMode }) {
    return (
        <div
            className="BookCard"
            onClick={() => {
                setSelectedBook(book)
                setMode(1)
            }}
        >
            {book && book.volumeInfo && book.volumeInfo.imageLinks ? (
                <div
                    className="BookCard__image"
                    style={{
                        backgroundImage: `url(${
                            book.volumeInfo.imageLinks.smallThumbnail
                                ? book.volumeInfo.imageLinks.smallThumbnail
                                : book.volumeInfo.imageLinks.thumbnail
                        })`,
                    }}
                ></div>
            ) : null}

            <div className="BookCard__category">
                {book &&
                    book.volumeInfo &&
                    book.volumeInfo.categories &&
                    book.volumeInfo.categories.map((cat) => `${cat} `)}
            </div>
            <div className="BookCard__title">
                {book && book.volumeInfo && book.volumeInfo.title
                    ? book.volumeInfo.title
                    : ' '}
            </div>
            <div className="BookCard__authors">
                {book && book.volumeInfo && !book.volumeInfo.authors
                    ? ' '
                    : book.volumeInfo.authors.length === 1
                    ? book.volumeInfo.authors[0]
                    : `${book.volumeInfo.authors[0]} and ${
                          book.volumeInfo.authors.length - 1
                      } more`}
            </div>
        </div>
    )
}
