import { SET_SELECTED_BOOK } from './selectedBookTypes'

export const setSelectedBook = (book) => {
    return {
        type: SET_SELECTED_BOOK,
        selectedBook: book,
    }
}
