import products from '../data'
import * as ActionTypes from './Types'

const initialState = {
    products: products,
    cart: []
}

const CartReducer = (state = initialState, action) => {
    switch(action.type){
        case ActionTypes.ADD_TO_CART:

        const item = state.products.find((itm) =>  itm.id === action.payload.id )

            return {
                ...state,
                cart : [...state.cart, {...item}]
            }
        case ActionTypes.REMOVE_FROM_CART:
            return {
                cart: state.cart.filter(item => item.id !== action.payload.id)
            }
            default:
                return state
    }
}

export default CartReducer