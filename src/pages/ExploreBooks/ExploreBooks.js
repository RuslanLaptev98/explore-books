import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import './ExploreBooks.css'
import Header from '../../components/organisms/Header/Header'
import BookList from '../../components/organisms/BookList/BookList'
import BookDescription from '../../components/organisms/BookDescription/BookDescription'
import { setToInitial, setToResult, setToNotfound } from '../../redux/index'

function ExploreBooks(props) {
    const [startIndex, setStartIndex] = useState(0)
    const [booksData, setBooksData] = useState([])
    const [total, setTotal] = useState(null)
    const [selectedBook, setSelectedBook] = useState(null)

    const fetchBooks = () => {
        fetch(
            `https://www.googleapis.com/books/v1/volumes?q=${props.input}${
                props.input &&
                (props.category === 'all' ? '' : `+subject:${props.category}`)
            }&startIndex=${startIndex}&orderBy=${
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
                    booksData.length > 0 &&
                    data.items &&
                    data.items[0].id === booksData[0].id
                ) {
                    props.setToResult()
                    return
                }
                setBooksData(booksData.concat(data.items))
                setTotal(data.totalItems)
                props.setToResult()
            })
    }

    const [helper, setHelper] = useState(0)

    useEffect(() => {
        if (startIndex) fetchBooks()
    }, [startIndex])
    useEffect(() => {
        props.setToInitial()
        setBooksData([])
    }, [props.input])
    return (
        <div className="ExploreBooks">
            <Header
                fetchBooks={fetchBooks}
                setBooksData={setBooksData}
                setStartIndex={setStartIndex}
                helper={helper}
                setHelper={setHelper}
            />
            {props.mode === 0 ? (
                <BookList
                    startIndex={startIndex}
                    setStartIndex={setStartIndex}
                    booksData={booksData}
                    setSelectedBook={setSelectedBook}
                    total={total}
                    setHelper={setHelper}
                />
            ) : (
                <BookDescription selectedBook={selectedBook} />
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
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setToInitial: () => dispatch(setToInitial()),
        setToResult: () => dispatch(setToResult()),
        setToNotfound: () => dispatch(setToNotfound()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExploreBooks)
