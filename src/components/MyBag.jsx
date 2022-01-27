import React from "react";
import { Component } from "react/cjs/react.development";
import classes from "./MyBag.module.css";

class MyBag extends Component {
  render() {
    return (
      <div className={classes.backdrop}>
        <div className={classes.myBagWrapper}>
          <p className={classes.bagTitle}>My Bag, 2 items</p>
          <div className={classes.cardItem}>
            <div className={classes.cardItemDetail}>
              <div>Apollo Running Short</div>
              <div>$50.00</div>
              <div className={classes.sizesBox}>
                <div className={classes.sizes}>S</div>
                <div className={classes.sizes}>M</div>
              </div>
            </div>
            <div>
              <button className={classes.changeQuantityButton}>+</button>
              <div>1</div>
              <button className={classes.changeQuantityButton}>-</button>
            </div>
            <div>
              <div className={classes.itemImg}>
                <img
                  src="https://img3.st.kloomba.com/img/used/2018/01/18/11/b/35890843_2.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className={classes.total}>
            <div>Total</div>
            <div>$100.00</div>
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
