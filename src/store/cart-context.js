import React from "react";
const CartContext = React.createContext({
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  // eslint-disable-next-line no-array-constructor
  products: new Array(),
});

export default CartContext;
