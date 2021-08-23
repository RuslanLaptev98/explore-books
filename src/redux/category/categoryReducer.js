import { SET_CATEGORY } from './categoryTypes'

const initialState = {
    category: 'all',
}

const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CATEGORY:
            return {
                ...state,
                category: action.category,
            }
        default:
            return state
    }
}

export default categoryReducer
