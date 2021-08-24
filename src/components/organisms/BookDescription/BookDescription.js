import React from 'react'
import { connect } from 'react-redux'
import './BookDescription.css'
import { BsBoxArrowInLeft } from 'react-icons/bs'

// Redux
import { setToBookList } from '../../../redux/index'

function BookDescription(props) {
    return (
        <div className="BookDescription">
            <div className="container">
                <div
                    className="BookDescription__backbtn"
                    onClick={() => props.setToBookList()}
                >
                    <BsBoxArrowInLeft size="1.5rem" fill="#4A596C" />
                    <div className="BookDescription__backbtntext">Back</div>
                </div>
                <div className="BookDescription__main">
                    <div className="BookDescription__image">
                        <img
                            src={
                                props.selectedBook.volumeInfo &&
                                props.selectedBook.volumeInfo.imageLinks &&
                                props.selectedBook.volumeInfo.imageLinks
                                    .thumbnail
                            }
                            alt="book cover"
                        />
                    </div>
                    <div className="BookDescription__content">
                        <div className="BookDescription__categories">
                            <em>
                                {props.selectedBook.categories &&
                                    props.selectedBook.volumeInfo.categories &&
                                    props.selectedBook.volumeInfo.categories
                                        .map((cat) => cat)
                                        .join(', ')}
                            </em>
                        </div>
                        <div className="BookDescription__title">
                            {props.selectedBook.volumeInfo &&
                                props.selectedBook.volumeInfo.title}
                        </div>
                        <div className="BookDescription__authors">
                            {props.selectedBook.volumeInfo &&
                                props.selectedBook.volumeInfo.authors &&
                                props.selectedBook.volumeInfo.authors
                                    .map((author) => author)
                                    .join(', ')}
                        </div>
                        <div className="BookDescription__description">
                            {props.selectedBook.volumeInfo &&
                                props.selectedBook.volumeInfo.description}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

// Redux

const mapStateToProps = (state) => {
    return {
        selectedBook: state.selectedBook.selectedBook,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setToBookList: () => dispatch(setToBookList()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookDescription)
