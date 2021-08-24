import React from 'react'
import { connect } from 'react-redux'
import './BookList.css'
import BookCard from '../../atoms/BookCard/BookCard'
import uuid from 'react-uuid'

// Redux
import { incrementStartIndex } from '../../../redux/index'

function BookList(props) {
    return (
        <div className="BookList">
            <div className="container">
                {props.bookListMode === 0 ? (
                    <div className="BookList__initial BookList__text">
                        Start searching to find the book you need
                    </div>
                ) : props.bookListMode === 1 ? (
                    <div className="BookList__loading BookList__text">
                        Loading...
                    </div>
                ) : props.bookListMode === 2 ? (
                    <>
                        <div className="BookList__total">
                            Total items: {props.total}
                        </div>
                        <div className="BookList__main">
                            {props.bookData &&
                                props.bookData.map((book) => (
                                    <BookCard key={uuid()} book={book} />
                                ))}
                        </div>
                        <button
                            className="BookList__loadmore"
                            onClick={() => {
                                props.incrementStartIndex()
                                props.setHelper(0)
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

// Redux

const mapStateToProps = (state) => {
    return {
        bookListMode: state.bookListMode.bookListMode,
        startIndex: state.startIndex.startIndex,
        total: state.total.total,
        bookData: state.bookData.bookData,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        incrementStartIndex: () => dispatch(incrementStartIndex()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList)
