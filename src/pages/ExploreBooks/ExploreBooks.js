import React, { useState, useEffect } from 'react'
import './ExploreBooks.css'
import Header from '../../components/organisms/Header/Header'
import BookList from '../../components/organisms/BookList/BookList'
import BookDescription from '../../components/organisms/BookDescription/BookDescription'

export default function ExploreBooks() {
    // mode 0 - BookList renders, mode 1 - BookDescription renders
    const [mode, setMode] = useState(0)

    // 0 - initial text, 1 - loading, 2 - search result render, 3 - no result found
    const [bookListMode, setBookListMode] = useState(0)

    const [input, setInput] = useState('')
    const [startIndex, setStartIndex] = useState(0)
    const [order, setOrder] = useState('relevance')
    const [category, setCategory] = useState('all')
    const [booksData, setBooksData] = useState([])
    const [total, setTotal] = useState(null)
    const [selectedBook, setSelectedBook] = useState(null)

    const fetchBooks = () => {
        fetch(
            `https://www.googleapis.com/books/v1/volumes?q=${input}${
                input && (category === 'all' ? '' : `+subject:${category}`)
            }&startIndex=${startIndex}&orderBy=${order}&maxResults=30&key=AIzaSyCO80BgD6Gz2kTu79mnUSg-V7Cub0hJrMs`
        )
            .then((res) => res.json())
            .then((data) => {
                if (data.error && data.error.message === 'Missing query.') {
                    setBookListMode(3)
                    return
                } else if (data.totalItems === 0) {
                    setBookListMode(3)
                    return
                } else if (
                    booksData.length > 0 &&
                    data.items &&
                    data.items[0].id === booksData[0].id
                ) {
                    setBookListMode(2)
                    return
                }
                setBooksData(booksData.concat(data.items))
                setTotal(data.totalItems)
                setBookListMode(2)
            })
    }

    const [helper, setHelper] = useState(0)

    useEffect(() => {
        if (startIndex) fetchBooks()
    }, [startIndex])
    useEffect(() => {
        setBookListMode(0)
        setBooksData([])
    }, [input])
    return (
        <div className="ExploreBooks">
            <Header
                setMode={setMode}
                input={input}
                setInput={setInput}
                fetchBooks={fetchBooks}
                setBookListMode={setBookListMode}
                order={order}
                setOrder={setOrder}
                category={category}
                setCategory={setCategory}
                setBooksData={setBooksData}
                setStartIndex={setStartIndex}
                helper={helper}
                setHelper={setHelper}
            />
            {mode === 0 ? (
                <BookList
                    setMode={setMode}
                    startIndex={startIndex}
                    setStartIndex={setStartIndex}
                    booksData={booksData}
                    setSelectedBook={setSelectedBook}
                    bookListMode={bookListMode}
                    total={total}
                    setHelper={setHelper}
                />
            ) : (
                <BookDescription
                    setMode={setMode}
                    selectedBook={selectedBook}
                />
            )}
        </div>
    )
}
