import { SET_INPUT } from './inputTypes'

const initialState = {
    input: '',
}

const inputReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INPUT:
            return {
                ...state,
                input: action.input,
            }
        default:
            return state
    }
}

export default inputReducer
