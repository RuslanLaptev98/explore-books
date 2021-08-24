import { SET_TOTAL } from './totalTypes'

const initialState = {
    total: null,
}

const totalReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TOTAL:
            return {
                ...state,
                total: action.totalValue,
            }
        default:
            return state
    }
}

export default totalReducer
