import * as ActionTypes from './Types'

export const addtocart = (itemId) => {
    return {
        type: ActionTypes.ADD_TO_CART,
        payload: {
            id: itemId
        }
    }
}

export const removefromcart = (itemId) => {
    return {
        type: ActionTypes.REMOVE_FROM_CART,
        payload: {
            id: itemId
        }
    }
}