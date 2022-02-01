import React from "react";
import { PureComponent } from "react/cjs/react.development";
import classes from "./CartItem.module.css";

class CartItem extends PureComponent {
  constructor(props) {
    super();
    const amount = props.item.amount;

    this.state = {
      amount: amount,
    };

    this.cartItemPlusHandler = this.cartItemPlusHandler.bind(this);
    this.cartItemMinusHandler = this.cartItemMinusHandler.bind(this);
  }
  cartItemPlusHandler(e) {
    e.stopPropagation();
    const newAmount = this.state.amount + 1;
    this.setState({ amount: newAmount });
  }
  cartItemMinusHandler(e) {
    e.stopPropagation();
    const newAmount = this.state.amount - 1;
    this.setState({ amount: newAmount });
  }

  render() {
    const { amount } = this.state;
    return (
      amount >= 1 && (
        <div className={classes.cardItem}>
          <div className={classes.cardItemDetail}>
            <div>{this.props.item.name}</div>
            <div>{this.props.item.price}</div>
            <div className={classes.sizesBox}>
              <div className={classes.sizes}>
                <div>
                  {this.props.item.attributes.map(
                    (attribute, index) =>
                      attribute.name === "Color" && (
                        <div>
                          <div className={classes.allBoxesSize}>
                            {attribute.items.map((attribute, index) => (
                              <div
                                className={classes.sizeBox}
                                style={{
                                  backgroundColor: attribute.id,
                                }}
                              ></div>
                            ))}
                          </div>
                        </div>
                      )
                  )}
                  {this.props.item.attributes.map(
                    (attribute, index) =>
                      attribute.name === "Size" && (
                        <div>
                          <div className={classes.allBoxesSize}>
                            {attribute.items.map((attribute, index) => (
                              <div className={classes.sizeBox}>
                                {attribute.displayValue}
                              </div>
                            ))}
                          </div>
                        </div>
                      )
                  )}
                  {this.props.item.attributes.map(
                    (attribute, index) =>
                      attribute.name === "Capacity" && (
                        <div>
                          <div className={classes.allBoxesSize}>
                            {attribute.items.map((attribute, index) => (
                              <div className={classes.sizeBox}>
                                {attribute.displayValue}
                              </div>
                            ))}
                          </div>
                        </div>
                      )
                  )}
                  {this.props.item.attributes.map(
                    (attribute, index) =>
                      attribute.name === "With USB 3 ports" && (
                        <div>
                          <div className={classes.allBoxesSize}>
                            {attribute.items.map((attribute, index) => (
                              <div className={classes.sizeBox}>
                                {attribute.displayValue}
                              </div>
                            ))}
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
              onClick={this.cartItemPlusHandler}
            >
              +
            </button>
            <div>{amount}</div>
            <button
              className={classes.changeQuantityButton}
              onClick={this.cartItemMinusHandler}
            >
              -
            </button>
          </div>
          <div>
            <div className={classes.itemImg}>
              <img src={this.props.item.img} alt="" />
            </div>
          </div>
          <div>X</div>
        </div>
      )
    );
  }
}

export default CartItem;
