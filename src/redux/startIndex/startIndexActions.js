import {
    SET_START_INDEX_TO_ZERO,
    INCREMENT_START_INDEX,
} from './startIndexTypes'

export const setStartIndexToZero = () => {
    return {
        type: SET_START_INDEX_TO_ZERO,
    }
}

export const incrementStartIndex = () => {
    return {
        type: INCREMENT_START_INDEX,
    }
}
