import React from "react";
import { PureComponent } from "react/cjs/react.development";
import classes from "./CartItem.module.css";

class CartItem extends PureComponent {
  constructor(props) {
    super();
    const amount = props.item.amount;
  }

  render() {
    return (
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
            onClick={this.props.onAdd}
          >
            +
          </button>
          <div>{this.props.item.amount}</div>
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
    // );
  }
}

export default CartItem;
