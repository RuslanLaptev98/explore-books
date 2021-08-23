import { SET_TO_BOOK_LIST, SET_TO_BOOK_DESCRIPTION } from './modeTypes'

export const setToBookList = () => {
    return {
        type: SET_TO_BOOK_LIST,
    }
}
export const setToBookDescription = () => {
    return {
        type: SET_TO_BOOK_DESCRIPTION,
    }
}
