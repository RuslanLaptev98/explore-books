import { SET_BOOKS_DATA, CLEAR_BOOKS_DATA } from './bookDataTypes'

const initialState = {
    bookData: [],
}

const bookDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_BOOKS_DATA:
            return {
                ...state,
                bookData: action.bookData,
            }
        case CLEAR_BOOKS_DATA:
            return {
                ...state,
                bookData: [],
            }
        default:
            return state
    }
}

export default bookDataReducer
