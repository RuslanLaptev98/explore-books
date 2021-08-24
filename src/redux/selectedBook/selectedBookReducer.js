import { SET_SELECTED_BOOK } from './selectedBookTypes'

const initialState = {
    selectedBook: null,
}

const selectedBookReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SELECTED_BOOK:
            return {
                ...state,
                selectedBook: action.selectedBook,
            }
        default:
            return state
    }
}

export default selectedBookReducer
