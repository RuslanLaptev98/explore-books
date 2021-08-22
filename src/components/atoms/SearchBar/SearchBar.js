import React from 'react'
import './SearchBar.css'
import { BsSearch } from 'react-icons/bs'

export default function SearchBar({
    input,
    setInput,
    fetchBooks,
    setBookListMode,
}) {
    return (
        <form
            className="SearchBar"
            onSubmit={(e) => {
                e.preventDefault()
                setBookListMode(1)
                fetchBooks()
            }}
        >
            <input
                type="text"
                value={input}
                className="SearchBar__input"
                onChange={(e) => setInput(e.target.value)}
            />
            <button className="SearchBar__button" type="submit">
                <BsSearch fill="#4A596C" size="1.3rem" />
            </button>
        </form>
    )
}
