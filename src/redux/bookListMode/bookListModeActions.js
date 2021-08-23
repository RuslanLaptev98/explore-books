import {
    SET_TO_INITIAL,
    SET_TO_LOADING,
    SET_TO_RESULT,
    SET_TO_NOTFOUND,
} from './bookListModeTypes'

export const setToInitial = () => {
    return {
        type: SET_TO_INITIAL,
    }
}
export const setToLoading = () => {
    return {
        type: SET_TO_LOADING,
    }
}
export const setToResult = () => {
    return {
        type: SET_TO_RESULT,
    }
}
export const setToNotfound = () => {
    return {
        type: SET_TO_NOTFOUND,
    }
}
