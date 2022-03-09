import React from "react";
import { PureComponent } from "react/cjs/react.production.min";
import CartContext from "../store/cart-context";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";

class Cart extends PureComponent {
  constructor(props) {
    super(props);
    this.cartItemAddHandler = this.cartItemAddHandler.bind(this);
    this.cartItemRemoveHandler = this.cartItemRemoveHandler.bind(this);
  }

  static contextType = CartContext;

  cartItemAddHandler(item) {
    this.context.addItem({ ...item, amount: 1 });
  }
  
  cartItemRemoveHandler(id) {
    this.context.removeItem(id);
  }

  render() {
    return (
      <div className={classes.wrapper}>
        <p className={classes.title}>Cart</p>
        {this.context.items.map((item) => (
          <CartItem
            item={item}
            key={item.id}
            onAdd={this.cartItemAddHandler.bind(null, item)}
            onRemove={this.cartItemRemoveHandler.bind(null, item.id)}
          ></CartItem>
        ))}
      </div>
    );
  }
}

export default Cart;
