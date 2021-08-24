import {
    SET_START_INDEX_TO_ZERO,
    INCREMENT_START_INDEX,
} from './startIndexTypes'

const initialState = {
    startIndex: 0,
}

const startIndexReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_START_INDEX_TO_ZERO:
            return {
                ...state,
                startIndex: 0,
            }
        case INCREMENT_START_INDEX:
            return {
                ...state,
                startIndex: state.startIndex + 30,
            }
        default:
            return state
    }
}

export default startIndexReducer
