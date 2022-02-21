import React from "react";
import { Link } from "react-router-dom";
import { PureComponent } from "react/cjs/react.production.min";
import CartContext from "../store/cart-context";
import CartItem from "./CartItem";
import classes from "./MyBag.module.css";

class MyBag extends PureComponent {
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
    const numberOfCartItems = this.context.items.reduce((curNumber, item) => {
      return curNumber + item.amount;
    }, 0);

    const totalAmount =
      this.props.currency + "" + this.context.totalAmount.toFixed(2);

    return (
      <div className={classes.backdrop} onClick={this.props.change}>
        <div className={classes.myBagWrapper}>
          <p className={classes.bagTitle}>
            <span>My Bag,</span> {numberOfCartItems} items
          </p>
          {this.context.items.map((item) => (
            <CartItem
              item={item}
              key={item.id}
              onAdd={this.cartItemAddHandler.bind(null, item)}
              onRemove={this.cartItemRemoveHandler.bind(null, item.id)}
            ></CartItem>
          ))}
          <div className={classes.total}>
            <div>Total</div>
            <div>{totalAmount}</div>
          </div>
          <div className={classes.detailButton}>
            <Link to="/cart">
              <button className={classes.viewBagButton}>View Bag</button>
            </Link>
            <button className={classes.checkOutButton}>Check out</button>
          </div>
        </div>
      </div>
    );
  }
}

export default MyBag;
