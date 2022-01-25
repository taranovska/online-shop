import React from "react";
import { Component } from "react/cjs/react.development";
import { state } from "../store/store";
import AvailableSizes from "./AvailableSizes";
import classes from "./ProductDescriptionPage.module.css";

class ProductDescriptionPage extends Component {
  constructor(props) {
    super(props);
    this.state = state;
  }
  render() {
    return (
      <div className={classes.wrapper}>
        <div className={classes.smallImages}>
          <img src="https://img3.st.kloomba.com/img/used/2018/01/18/11/b/35890843_2.jpg"></img>
          <img src="https://img3.st.kloomba.com/img/used/2018/01/18/11/b/35890843_2.jpg"></img>
          <img src="https://img3.st.kloomba.com/img/used/2018/01/18/11/b/35890843_2.jpg"></img>
        </div>
        <div className="mainImage">
          <img src="https://img3.st.kloomba.com/img/used/2018/01/18/11/b/35890843_2.jpg"></img>
        </div>
        <div className={classes.productDetails}>
          <p>Apollo</p>
          <p>Running Short</p>
          <p>Size:</p>
          <div>
            <AvailableSizes />
          </div>
          <div>
            Price:
            <p>$50.00</p>
          </div>
          <div>
            <button className={classes.addToCartButton}>ADD TO CART</button>
          </div>
          <div>
            Find stunning women's cocktail dresses and party dresses. Stand out
            in lace and metallic cocktail dresses and party dresses from all
            your favorite brands.
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDescriptionPage;
