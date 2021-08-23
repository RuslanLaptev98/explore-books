import { combineReducers } from 'redux'
import modeReducer from './mode/modeReducer'
import bookListModeReducer from './bookListMode/bookListModeReducer'
import inputReducer from './input/inputReducer'
import orderReducer from './order/orderReducer'
import categoryReducer from './category/categoryReducer'

const rootReducer = combineReducers({
    mode: modeReducer,
    bookListMode: bookListModeReducer,
    input: inputReducer,
    order: orderReducer,
    category: categoryReducer,
})

export default rootReducer
