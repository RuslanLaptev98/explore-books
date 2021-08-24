import { combineReducers } from 'redux'
import modeReducer from './mode/modeReducer'
import bookListModeReducer from './bookListMode/bookListModeReducer'
import inputReducer from './input/inputReducer'
import orderReducer from './order/orderReducer'
import categoryReducer from './category/categoryReducer'
import startIndexReducer from './startIndex/startIndexReducer'
import totalReducer from './total/totalReducer'
import bookDataReducer from './bookData/bookDataReducer'
import selectedBookReducer from './selectedBook/selectedBookReducer'

const rootReducer = combineReducers({
    mode: modeReducer,
    bookListMode: bookListModeReducer,
    input: inputReducer,
    order: orderReducer,
    category: categoryReducer,
    startIndex: startIndexReducer,
    total: totalReducer,
    bookData: bookDataReducer,
    selectedBook: selectedBookReducer,
})

export default rootReducer
