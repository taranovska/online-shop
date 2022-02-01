import { useReducer } from "react";
import CurrencyContext from "./currency-context";

const defaultCurrencyState = {
  defaultCurrency: "$",
};

const currencyReducer = (state, action) => {
  if (action.type === "CHANGE") {
    state.defaultCurrency = "EUR";
  }
  return defaultCurrencyState;
};

const CurrencyProvider = (props) => {
  const [currencyState, dispatchCurrencyAction] = useReducer(
    currencyReducer,
    defaultCurrencyState
  );
  const changeCurrencyHandler = (currency) => {
    dispatchCurrencyAction({ type: "CHANGE", currency: currency });
  };

  const currencyContext = {
    currency: currencyState.currency,
  };

  return (
    <CurrencyContext.Provider value={currencyContext}>
      {props.children}
    </CurrencyContext.Provider>
  );
};

export default CurrencyProvider;
