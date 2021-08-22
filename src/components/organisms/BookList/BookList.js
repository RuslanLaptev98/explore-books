import React from 'react'
import './BookList.css'
import BookCard from '../../atoms/BookCard/BookCard'
import uuid from 'react-uuid'

export default function BookList({
    startIndex,
    setStartIndex,
    booksData,
    setSelectedBook,
    bookListMode,
    setHelper,
    setMode,
    total,
}) {
    return (
        <div className="BookList">
            <div className="container">
                {bookListMode === 0 ? (
                    <div className="BookList__initial BookList__text">
                        Start searching to find the book you need
                    </div>
                ) : bookListMode === 1 ? (
                    <div className="BookList__loading BookList__text">
                        Loading...
                    </div>
                ) : bookListMode === 2 ? (
                    <>
                        <div className="BookList__total">
                            Total items: {total}
                        </div>
                        <div className="BookList__main">
                            {booksData.map((book) => (
                                <BookCard
                                    key={uuid()}
                                    book={book}
                                    setSelectedBook={setSelectedBook}
                                    setMode={setMode}
                                />
                            ))}
                        </div>
                        <button
                            className="BookList__loadmore"
                            onClick={() => {
                                setStartIndex(startIndex + 30)
                                setHelper(0)
                            }}
                        >
                            Load more
                        </button>
                    </>
                ) : (
                    <div className="BookList__notFound BookList__text">
                        No relevant results for your input
                    </div>
                )}
            </div>
        </div>
    )
}
