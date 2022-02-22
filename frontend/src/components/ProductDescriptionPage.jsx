import React, { useContext, useState } from "react";
import CartContext from "../store/cart-context";
import classes from "./ProductDescriptionPage.module.css";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import parse from "html-react-parser";

const ProductDescriptionPage = (props) => {
  const params = useParams();
  const context = useContext(CartContext);

  const currentProduct = props.allItems.find(
    (product) => product.id === params.productId
  );
  const defaultCurrency = currentProduct.prices.find(
    (curSymbol) => curSymbol.currency.symbol === props.currency
  );
  const inStock = currentProduct.inStock;
  let defaultAttributes = [];
  currentProduct.attributes.map((attribute) =>
    defaultAttributes.push({
      title: attribute.name,
      value: attribute.items[0].displayValue,
    })
  );
  const [attribute, setAttribute] = useState(defaultAttributes);

  const handleChange = (e) => {
    setAttribute({
      title: e.target.dataset.label,
      value: e.target.value,
    });
  };
  const price = currentProduct.prices;

  const addToCartButtonHandler = (e) => {
    const enteredAmountNumber = 1;
    context.addItem({
      id: params.productId,
      name: currentProduct.name,
      amount: enteredAmountNumber,
      prices: price,
      attributes: attribute,
      img: currentProduct.gallery[0],
      currency: defaultCurrency.currency.symbol,
    });
  };
  const image = currentProduct.gallery[0];

  const mainImage = inStock
    ? `${classes.mainImage}`
    : `${classes.mainImage} ${classes.opacity}`;
  const smallImages = inStock
    ? `${classes.smallImages}`
    : `${classes.smallImages} ${classes.opacity}`;

  return (
    <div className={classes.wrapper}>
      <div>
        {currentProduct.gallery.map((productImg, index) => (
          <img
            className={smallImages}
            src={productImg}
            key={index++}
            alt=""
          ></img>
        ))}
      </div>
      <div
        className={mainImage}
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        {" "}
        {inStock === false ? <div>Out of Stock</div> : null}
      </div>
      <div className={classes.productDetails}>
        <p className={classes.productName}>{currentProduct.name}</p>
        <div>
          {currentProduct.attributes.map(
            (attribute, index) =>
              attribute.name !== "Color" && (
                <div>
                  <div className={classes.titleDescription}>
                    Select {attribute.name}:{" "}
                  </div>
                  <select
                    data-label={attribute.name}
                    className={classes.allBoxesSize}
                    onChange={handleChange}
                  >
                    {attribute.items.map((attribute, index) => (
                      <option
                        className={classes.options}
                        value={attribute.displayValue}
                      >
                        {attribute.displayValue}
                      </option>
                    ))}
                  </select>
                </div>
              )
          )}
          {currentProduct.attributes.map(
            (attribute, index) =>
              attribute.name === "Color" && (
                <div>
                  <div className={classes.titleDescription}>
                    Select {attribute.name}:{" "}
                  </div>
                  <select
                    data-label={attribute.name}
                    className={classes.allBoxesSize}
                    onChange={handleChange}
                  >
                    {attribute.items.map((attribute, index) => (
                      <option
                        className={classes.options}
                        value={attribute.displayValue}
                        style={{
                          backgroundColor: attribute.id,
                        }}
                      >
                        {attribute.displayValue}
                      </option>
                    ))}
                  </select>
                </div>
              )
          )}
        </div>
        <div className={classes.titleDescription}>
          Price:
          <p className={classes.price}>
            {defaultCurrency.currency.symbol + defaultCurrency.amount}
          </p>
        </div>
        <div>
          <button
            className={classes.addToCartButton}
            onClick={addToCartButtonHandler}
            disabled={!inStock}
          >
            ADD TO CART
          </button>
        </div>

        <div className={classes.description} />
        {parse(currentProduct.description)}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currency: state.currency,
  };
};

export default connect(mapStateToProps)(ProductDescriptionPage);
