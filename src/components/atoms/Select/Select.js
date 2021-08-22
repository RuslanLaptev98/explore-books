import React, { useEffect } from 'react'
import './Select.css'

export default function Select({
    label,
    options,
    initialValue,
    setFilter,
    setBooksData,
    fetchBooks,
    setBookListMode,
    input,
    setStartIndex,
    helper,
    setHelper,
}) {
    useEffect(() => {
        helper !== 0 && fetchBooks()
    })
    return (
        <div className="Select">
            <div className="Select__label">{label}</div>
            <select
                className="Select__select"
                value={initialValue}
                onChange={(e) => {
                    setFilter(e.target.value)
                    setBooksData([])
                    if (input) {
                        setBookListMode(1)
                        setStartIndex(0)
                        setHelper(1)
                    }
                }}
            >
                {options.map((option, i) => (
                    <option className="Select__option" value={option} key={i}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    )
}
