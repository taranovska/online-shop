import React from "react";
import { PureComponent } from "react/cjs/react.development";
import classes from "./CartItem.module.css";

class CartItem extends PureComponent {
  constructor(props) {
    super();
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

export default CartItem;
