import { createStore } from "redux";

const currencyReducer = (state = { currency: "$" }, action) => {
  if (action.type === "changeCurrency") {
    return { currency: action.currency /*state.currency*/ };
  }
  return state;
};

const store = createStore(currencyReducer);

export default store;
