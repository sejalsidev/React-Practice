import { ADD_TO_CART } from "../Constants";

const intialState = {
  cardData: [],
};
export default function (state=intialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cardData: action.data,
      }
      break
      default:
      return state
  }
}
