import {combineReducers} from 'redux'
import AuthReducer from './Authentication'
import CartReducer from './Reducer'

const rootReducer = combineReducers({
    cart: CartReducer,
    auth: AuthReducer
})

export default rootReducer