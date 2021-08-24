import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import './ExploreBooks.css'
import Header from '../../components/organisms/Header/Header'
import BookList from '../../components/organisms/BookList/BookList'
import BookDescription from '../../components/organisms/BookDescription/BookDescription'
import {
    setToInitial,
    setToResult,
    setToNotfound,
    setTotal,
    setBooksData,
    clearBooksData,
} from '../../redux/index'

function ExploreBooks(props) {
    const [helper, setHelper] = useState(0)

    const fetchBooks = () => {
        fetch(
            `https://www.googleapis.com/books/v1/volumes?q=${props.input}${
                props.input &&
                (props.category === 'all' ? '' : `+subject:${props.category}`)
            }&startIndex=${props.startIndex}&orderBy=${
                props.order
            }&maxResults=30&key=AIzaSyCO80BgD6Gz2kTu79mnUSg-V7Cub0hJrMs`
        )
            .then((res) => res.json())
            .then((data) => {
                if (data.error && data.error.message === 'Missing query.') {
                    props.setToNotfound()
                    return
                } else if (data.totalItems === 0) {
                    props.setToNotfound()
                    return
                } else if (
                    props.bookData.length > 0 &&
                    data.items &&
                    data.items[0].id === props.bookData[0].id
                ) {
                    props.setToResult()
                    return
                }
                props.setBooksData(props.bookData.concat(data.items))
                props.setTotal(data.totalItems)
                props.setToResult()
            })
    }

    useEffect(() => {
        if (props.startIndex) fetchBooks()
    }, [props.startIndex])
    useEffect(() => {
        props.setToInitial()
        props.clearBooksData()
    }, [props.input])

    return (
        <div className="ExploreBooks">
            <Header
                fetchBooks={fetchBooks}
                helper={helper}
                setHelper={setHelper}
            />
            {props.mode === 0 ? (
                <BookList setHelper={setHelper} />
            ) : (
                <BookDescription />
            )}
        </div>
    )
}

// Redux

const mapStateToProps = (state) => {
    return {
        mode: state.mode.mode,
        input: state.input.input,
        order: state.order.order,
        category: state.category.category,
        startIndex: state.startIndex.startIndex,
        bookData: state.bookData.bookData,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setToInitial: () => dispatch(setToInitial()),
        setToResult: () => dispatch(setToResult()),
        setToNotfound: () => dispatch(setToNotfound()),
        setTotal: (value) => dispatch(setTotal(value)),
        setBooksData: (value) => dispatch(setBooksData(value)),
        clearBooksData: () => dispatch(clearBooksData()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExploreBooks)
