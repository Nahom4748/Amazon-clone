import { Type } from "./Action.type";
export const Initial = {
  basket: [],
  user: null,
};
export const Reduser = (state, action) => {
  switch (action.type) {
    case Type.ADD_TO_BASKET:
      if (state.basket.some((item) => item.id === action.payload.id)) {
        const updatedBasket = state.basket.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        return {
          ...state,
          basket: updatedBasket,
        };
      } else {
        return {
          ...state,
          basket: [...state.basket, { ...action.payload, quantity: 1 }],
        };
      }

    case Type.DELETE_ITEM:
      return {
        ...state,
        basket: state.basket.filter((item) => item.id !== action.payload),
      };

    case Type.UPDATE_QTY:
      if (state.basket.some((item) => item.id === action.payload.id)) {
        const updatedBasket = state.basket.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
        return {
          ...state,
          basket: updatedBasket.filter((item) => item.quantity > 0),
        };
      }
    case Type.USER_AUTH: {
      return {
        ...state,
        user: action.user,
      };
    }
    case Type.DELETE_ALL:
      return {
        ...state,
        basket: [],
      };
    default:
      return state;
  }
};
