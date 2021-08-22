import React from 'react'
import './Header.css'
import SearchBar from '../../atoms/SearchBar/SearchBar'
import Select from '../../atoms/Select/Select'

export default function Header({
    input,
    setInput,
    fetchBooks,
    setBookListMode,
    order,
    setOrder,
    category,
    setCategory,
    setBooksData,
    setStartIndex,
    helper,
    setHelper,
    setMode,
}) {
    const orderOptions = ['relevance', 'newest']
    const categoryOptions = [
        'all',
        'art',
        'biography',
        'computers',
        'history',
        'medical',
        'poetry',
    ]
    return (
        <div className="Header">
            <div className="container">
                <div
                    className="Header__title"
                    onClick={() => {
                        setInput('')
                        setMode(0)
                    }}
                >
                    explore books
                </div>
                <div className="Header__search">
                    <SearchBar
                        input={input}
                        setInput={setInput}
                        fetchBooks={fetchBooks}
                        setBookListMode={setBookListMode}
                    />
                    <div className="Header__selectItems">
                        <Select
                            label="Categories"
                            options={categoryOptions}
                            initialValue={category}
                            setFilter={setCategory}
                            setBooksData={setBooksData}
                            fetchBooks={fetchBooks}
                            setBookListMode={setBookListMode}
                            input={input}
                            setStartIndex={setStartIndex}
                            helper={helper}
                            setHelper={setHelper}
                        />
                        <Select
                            label="Sorting by"
                            options={orderOptions}
                            initialValue={order}
                            setFilter={setOrder}
                            setBooksData={setBooksData}
                            fetchBooks={fetchBooks}
                            setBookListMode={setBookListMode}
                            input={input}
                            setStartIndex={setStartIndex}
                            helper={helper}
                            setHelper={setHelper}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
