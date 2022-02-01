import React from "react";
import { Component } from "react/cjs/react.development";
import { PureComponent } from "react/cjs/react.production.min";
import CartContext from "../store/cart-context";
import CartProvider from "../store/CartProvider";
import CartItem from "./CartItem";
import classes from "./MyBag.module.css";

class MyBag extends PureComponent {
  constructor(props) {
    super(props);
    this.cartItemPlusHandler = this.cartItemPlusHandler.bind(this);
    this.cartItemMinusHandler = this.cartItemMinusHandler.bind(this);
  }

  static contextType = CartContext;

  cartItemPlusHandler() {
    console.log(this.context.items);
  }
  cartItemMinusHandler() {}

  render() {
    const numberOfCartItems = this.context.items.reduce((curNumber, item) => {
      return curNumber + item.amount;
    }, 0);

    return (
      <div className={classes.backdrop} onClick={this.props.change}>
        <div className={classes.myBagWrapper}>
          <p className={classes.bagTitle}>My Bag, {numberOfCartItems} items</p>

          {this.context.items.map((item, index) => (
            <CartItem item={item} key={index++}></CartItem>
          ))}

          <div className={classes.total}>
            <div>Total</div>
            <div>{this.context.totalAmount}</div>
          </div>
          <div className={classes.detailButton}>
            <button className={classes.viewBagButton}>View Bag</button>
            <button className={classes.checkOutButton}>Check out</button>
          </div>
        </div>
      </div>
    );
  }
}

export default MyBag;
