import * as ActionTypes from './Types'

export const addtocart = (itemId) => {
    return {
        type: ActionTypes.ADD_TO_CART,
        payload: {
            id: itemId,
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

export const adjustqty = (itemId, value) => {
    return {
        type: ActionTypes.REMOVE_FROM_CART,
        payload: {
            id: itemId,
            qty: value
        }
    }
}

export const favourites = (item) => {
    return {
        type: ActionTypes.FAVOURITES,
        payload: {
            id: item
        }
    }
}

export const removefromfavourites = (item) => {
    return {
        type: ActionTypes.REMOVE_FROM_FAVOURITES,
        payload: {
            id: item
        }
    }
}