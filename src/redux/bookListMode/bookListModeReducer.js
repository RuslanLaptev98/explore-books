import {
    SET_TO_INITIAL,
    SET_TO_LOADING,
    SET_TO_RESULT,
    SET_TO_NOTFOUND,
} from './bookListModeTypes'

const initialState = {
    bookListMode: 0,
}

const bookListModeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TO_INITIAL:
            return {
                ...state,
                bookListMode: 0,
            }
        case SET_TO_LOADING:
            return {
                ...state,
                bookListMode: 1,
            }
        case SET_TO_RESULT:
            return {
                ...state,
                bookListMode: 2,
            }
        case SET_TO_NOTFOUND:
            return {
                ...state,
                bookListMode: 3,
            }
        default:
            return state
    }
}

export default bookListModeReducer
