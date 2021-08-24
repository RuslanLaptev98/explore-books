import { SET_BOOKS_DATA, CLEAR_BOOKS_DATA } from './bookDataTypes'

export const setBooksData = (bookData) => {
    return {
        type: SET_BOOKS_DATA,
        bookData: bookData,
    }
}

export const clearBooksData = () => {
    return {
        type: CLEAR_BOOKS_DATA,
    }
}
