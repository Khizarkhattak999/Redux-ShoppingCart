import {combineReducers} from 'redux'
import CartReducer from './Reducer'

const rootReducer = combineReducers({
    cart: CartReducer,
})

export default rootReducer