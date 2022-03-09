import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
  currency: "$",
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const price = action.item.prices.find((pr) =>
      state.currency !== undefined
        ? String(pr.currency.symbol) === String(state.currency)
        : String(pr.currency.symbol) === "$"
    ).amount;
    const updatedTotalAmount = +(
      state.totalAmount +
      price * action.item.amount
    );
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];

    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingCartItemIndex];

    const price = existingItem.prices.find((pr) =>
      state.currency !== undefined
        ? pr.currency.symbol === String(state.currency)
        : pr.currency.symbol === "$"
    ).amount;

    const updatedTotalAmount = state.totalAmount - price;
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "CHANGE_CURRENCY") {
    const updatedCurrency = action.currency.currency;
    const newTotal =
      state.items.length > 0 &&
      state.items
        .map((element) => {
          const price = element.prices.find(
            (price) => price.currency.symbol === updatedCurrency
          ).amount;
          const amount = element.amount;
          return price * amount;
        })
        .reduce((previousValue, currentValue) => {
          return previousValue + currentValue;
        });

    return {
      ...state,
      currency: String(updatedCurrency),
      totalAmount: newTotal,
    };
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };
  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };
  const changingCurrencyHandler = (currency) => {
    dispatchCartAction({ type: "CHANGE_CURRENCY", currency: currency });
  };

  const cartContext = {
    items: cartState.items,
    currency: cartState.currency,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    changingCurrency: changingCurrencyHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
