import { SET_ORDER } from './orderTypes'

const initialState = {
    order: 'relevance',
}

const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ORDER:
            return {
                ...state,
                order: action.order,
            }
        default:
            return state
    }
}

export default orderReducer
