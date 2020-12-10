import { SET_MESSAGE, CLEAR_MESSAGE } from "../actions/types";

const initialState = {
    items: [],
  };
  
  export default (state = initialState, { type, payload }) => {
    switch (type) {
      case 'MESSAGES:ADD_MESSAGE':
        return {
          ...state,
          items: [...state.items, payload],
        };
      case 'MESSAGES:SET_ITEMS':
        return {
          ...state,
          items: payload,
        };
      default:
        return state;
    }
};