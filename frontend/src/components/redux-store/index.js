import { createStore } from "redux";

const currencyReducer = (state = { currency: "$" }, action) => {
  if (action.type === "changeCurrency") {
    return { currency: action.payload };
  }
  return state;
};

const store = createStore(currencyReducer);

export default store;
