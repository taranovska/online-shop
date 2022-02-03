import { useReducer } from "react";

import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
  selectedAttributes: [],
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount = +(
      state.totalAmount +
      action.item.priceWithOutSymbol * action.item.amount
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
  // if (action.type === "CHANGE_ATTRIBUTES") {
  //   const existingItemIndex = state.selectedAttributes.findIndex(
  //     (selectedAttribute) =>
  //       selectedAttribute.title === action.selectedAttribute.title
  //   );
  //   const existingItem = state.selectedAttributes[existingItemIndex];

  //   let updatedItems;

  //   if (existingItem) {
  //     const updatedItem = {
  //       ...existingItem,
  //       value: action.selectedAttribute.value,
  //     };
  //     updatedItems = [...state.selectedAttributes];
  //     updatedItems[existingItemIndex] = updatedItem;
  //   }
  //   // } else {
  //   //   updatedItems = state.selectedAttributes.concat(action.selectedAttribute);
  //   // }
  //   return {
  //     selectedAttributes: updatedItems,
  //   };
  // }
  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount =
      state.totalAmount - existingItem.priceWithOutSymbol;
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
  // const changeAttributesHandler = (selectedAttribute) => {
  //   dispatchCartAction({
  //     type: "CHANGE_ATTRIBUTES",
  //     selectedAttribute: selectedAttribute,
  //   });
  // };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    // changeAttribute: changeAttributesHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
