import products from "../data";
import * as ActionTypes from "./Types";

const initialState = {
  products: products,
  cart: [],
  favourites: [],
};

const CartReducer = (state = initialState, action) => {

  

  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
      const item = state.products.find((itm) => itm.id == action.payload.id);

      const inCart = state.cart.find((item) =>
        item.id == action.payload.id ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((curitm) =>
              curitm.id == action.payload.id
                ? { ...item, qty: curitm.qty + 1 }
                : item ): [...state.cart, { ...item, qty: 1 }],
      };
    case ActionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case ActionTypes.ADJUST_QUANTITY:
      return {
          ...state,
          cart : state.cart.map((item) => item.id == action.payload.id ? {...item, qty: +action.payload.id } : item )
      };

    case ActionTypes.FAVOURITES:
      const itemm = state.products.find(item => item.id == action.payload.id)

      
      return {
        ...state,
        favourites: [...state.favourites, itemm],

      }
    case ActionTypes.REMOVE_FROM_FAVOURITES:
      return {
        ...state,
        favourites: state.favourites.filter(item => item.id !== action.payload.id)
      }
    default:
      return state;
  }            
};

export default CartReducer;
