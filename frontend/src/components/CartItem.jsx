import React from "react";
import { connect } from "react-redux";
import { Component } from "react/cjs/react.development";
import classes from "./CartItem.module.css";

class CartItem extends Component {
  constructor(props) {
    super();
    this.isSelected = this.isSelected.bind(this);
  }
  isSelected(el, el2) {
    const currentAttr = this.props.item.attributes.find(
      (attr) => attr.id === el2 || attr.title === el2
    );
    if (currentAttr.value === el) return true;
    else return false;
  }
  defaultAttributes = [];
  currentAttr(el, el2) {
    this.props.item.attributes.find(
      (attr) => attr?.id === el2 || attr?.title === el2
    );
  }

  render() {
    const defaultCurrency = this.props.currency;
    const pricesOfItem = this.props.item.prices;
    const currentPrice = pricesOfItem.find(
      (curr) => curr.currency.symbol === defaultCurrency
    );

    return (
      <div className={classes.cardItem}>
        <div className={classes.cardItemDetail}>
          <div>{this.props.item.name}</div>
          <div>
            {defaultCurrency} {currentPrice.amount.toFixed(2)}
          </div>
          <div className={classes.sizesBox}>
            <div className={classes.sizes}>
              <div>
                {
                  <div>
                    {this.props.item.allAttributes.map(
                      (attr, index) =>
                        attr.name !== "Color" && (
                          <div key={index} className={classes.flex}>
                            {attr.items.map((el, index) => {
                              return (
                                <div>
                                  <div
                                    key={index}
                                    className={
                                      this.isSelected(el.displayValue, attr.id)
                                        ? `${classes.options} ${classes.active}`
                                        : `${classes.options}`
                                    }
                                  >
                                    {el.displayValue}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        )
                    )}
                    {this.props.item.allAttributes.map(
                      (attr, index) =>
                        attr.name === "Color" && (
                          <div key={index} className={classes.flex}>
                            {attr.items.map((el, index) => {
                              return (
                                <div>
                                  <div
                                    key={index}
                                    className={
                                      this.isSelected(el.displayValue, attr.id)
                                        ? `${classes.options} ${classes.border}`
                                        : `${classes.options}`
                                    }
                                    style={{ background: `${el.displayValue}` }}
                                  ></div>
                                </div>
                              );
                            })}
                          </div>
                        )
                    )}
                  </div>
                }
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
