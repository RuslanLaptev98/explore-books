import React from 'react'
import { connect } from 'react-redux'
import './BookCard.css'

//Redux
import { setToBookDescription, setSelectedBook } from '../../../redux/index'

function BookCard(props) {
    return (
        <div
            className="BookCard"
            onClick={() => {
                props.setSelectedBook(props.book)
                props.setToBookDescription()
            }}
        >
            {props.book &&
            props.book.volumeInfo &&
            props.book.volumeInfo.imageLinks ? (
                <div
                    className="BookCard__image"
                    style={{
                        backgroundImage: `url(${
                            props.book.volumeInfo.imageLinks.smallThumbnail
                                ? props.book.volumeInfo.imageLinks
                                      .smallThumbnail
                                : props.book.volumeInfo.imageLinks.thumbnail
                        })`,
                    }}
                ></div>
            ) : null}

            <div className="BookCard__category">
                {props.book &&
                    props.book.volumeInfo &&
                    props.book.volumeInfo.categories &&
                    props.book.volumeInfo.categories.map((cat) => `${cat} `)}
            </div>
            <div className="BookCard__title">
                {props.book &&
                props.book.volumeInfo &&
                props.book.volumeInfo.title
                    ? props.book.volumeInfo.title
                    : ' '}
            </div>
            <div className="BookCard__authors">
                {props.book &&
                props.book.volumeInfo &&
                !props.book.volumeInfo.authors
                    ? ' '
                    : props.book.volumeInfo.authors.length === 1
                    ? props.book.volumeInfo.authors[0]
                    : `${props.book.volumeInfo.authors[0]} and ${
                          props.book.volumeInfo.authors.length - 1
                      } more`}
            </div>
        </div>
    )
}

// Redux

const mapDispatchToProps = (dispatch) => {
    return {
        setToBookDescription: () => dispatch(setToBookDescription()),
        setSelectedBook: (selectedBook) =>
            dispatch(setSelectedBook(selectedBook)),
    }
}

export default connect(null, mapDispatchToProps)(BookCard)
