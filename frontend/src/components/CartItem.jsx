import React from "react";
import { connect } from "react-redux";
import { Component } from "react/cjs/react.development";
import classes from "./CartItem.module.css";

class CartItem extends Component {
  constructor(props) {
    super();
  }

  render() {
    const defaultCurrency = this.props.currency;
    // const price = this.props.item.price;
    // console.log(price);

    const pricesOfItem = this.props.item.price;
    console.log(pricesOfItem);
    const currentPrice = pricesOfItem.find(
      (curr) => curr.currency.symbol === defaultCurrency
    );
    console.log(currentPrice);

    return (
      <div className={classes.cardItem}>
        <div className={classes.cardItemDetail}>
          <div>{this.props.item.name}</div>
          <div>
            {defaultCurrency} {currentPrice.amount}
          </div>
          <div className={classes.sizesBox}>
            <div className={classes.sizes}>
              <div>
                {this.props.item.attributes.map(
                  (attribute, index) =>
                    attribute.title === "Color" && (
                      <div>
                        <div className={classes.allBoxesSize}>
                          <div className={classes.attributeTitle}>
                            {attribute.title}
                          </div>
                          <div
                            className={classes.sizeBox}
                            style={{ backgroundColor: attribute.value }}
                          >
                            {attribute.value}
                          </div>
                        </div>
                      </div>
                    )
                )}
                {this.props.item.attributes.map(
                  (attribute, index) =>
                    attribute.title !== "Color" && (
                      <div>
                        <div className={classes.allBoxesSize}>
                          <div className={classes.attributeTitle}>
                            {attribute.title}
                          </div>
                          <div className={classes.attributeTitle}>
                            {attribute.value}
                          </div>
                        </div>
                      </div>
                    )
                )}
              </div>
            </div>
          </div>
        </div>
        <div>
          <button
            className={classes.changeQuantityButton}
            onClick={this.props.onAdd}
          >
            +
          </button>
          <div className={classes.amount}>{this.props.item.amount}</div>
          <button
            className={classes.changeQuantityButton}
            onClick={this.props.onRemove}
          >
            -
          </button>
        </div>
        <div>
          <div className={classes.itemImg}>
            <img src={this.props.item.img} alt="" />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    currency: state.currency,
  };
};

export default connect(mapStateToProps)(CartItem);
