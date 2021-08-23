import { SET_TO_BOOK_LIST, SET_TO_BOOK_DESCRIPTION } from './modeTypes'

const initialState = {
    mode: 0,
}

const modeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TO_BOOK_LIST:
            return {
                ...state,
                mode: 0,
            }
        case SET_TO_BOOK_DESCRIPTION:
            return {
                ...state,
                mode: 1,
            }
        default:
            return state
    }
}

export default modeReducer
