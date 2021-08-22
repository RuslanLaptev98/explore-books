import React from 'react'
import './BookDescription.css'
import { BsBoxArrowInLeft } from 'react-icons/bs'

export default function BookDescription({ setMode, selectedBook }) {
    return (
        <div className="BookDescription">
            <div className="container">
                <div
                    className="BookDescription__backbtn"
                    onClick={() => setMode(0)}
                >
                    <BsBoxArrowInLeft size="1.5rem" fill="#4A596C" />
                    <div className="BookDescription__backbtntext">Back</div>
                </div>
                <div className="BookDescription__main">
                    <div className="BookDescription__image">
                        <img
                            src={
                                selectedBook.volumeInfo &&
                                selectedBook.volumeInfo.imageLinks &&
                                selectedBook.volumeInfo.imageLinks.thumbnail
                            }
                            alt="book cover"
                        />
                    </div>
                    <div className="BookDescription__content">
                        <div className="BookDescription__categories">
                            <em>
                                {selectedBook.categories &&
                                    selectedBook.volumeInfo.categories &&
                                    selectedBook.volumeInfo.categories
                                        .map((cat) => cat)
                                        .join(', ')}
                            </em>
                        </div>
                        <div className="BookDescription__title">
                            {selectedBook.volumeInfo &&
                                selectedBook.volumeInfo.title}
                        </div>
                        <div className="BookDescription__authors">
                            {selectedBook.volumeInfo &&
                                selectedBook.volumeInfo.authors &&
                                selectedBook.volumeInfo.authors
                                    .map((author) => author)
                                    .join(', ')}
                        </div>
                        <div className="BookDescription__description">
                            {selectedBook.volumeInfo &&
                                selectedBook.volumeInfo.description}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
