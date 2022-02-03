import React, { useContext, useState } from "react";
import CartContext from "../store/cart-context";
import classes from "./ProductDescriptionPage.module.css";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

const ProductDescriptionPage = (props) => {
  const params = useParams();
  const context = useContext(CartContext);
  const currentProduct = props.allItems.find(
    (product) => product.id === params.productId
  );
  const defaultCurrency = currentProduct.prices.find(
    (curSymbol) => curSymbol.currency.symbol === props.currency
  );
  let defaultAttributes = [];
  currentProduct.attributes.map((attribute) =>
    defaultAttributes.push({
      title: attribute.name,
      value: attribute.items[0].displayValue,
    })
  );
  let allAttributes = [...defaultAttributes];
  const [attribute, setAttribute] = useState(defaultAttributes);

  const handleChange = (e) => {
    setAttribute({
      title: e.target.dataset.label,
      value: e.target.value,
    });
  };

  const addToCartButtonHandler = (e) => {
    const enteredAmountNumber = 1;
    context.addItem({
      id: params.productId,
      name: currentProduct.name,
      amount: enteredAmountNumber,
      price: defaultCurrency.currency.symbol + defaultCurrency.amount,
      priceWithOutSymbol: defaultCurrency.amount,
      attributes: attribute,
      img: currentProduct.gallery[0],
    });
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.smallImages}>
        {currentProduct.gallery.map((productImg, index) => (
          <img src={productImg} key={index++}></img>
        ))}
      </div>
      <div className={classes.mainImage}>
        <img src={currentProduct.gallery[0]}></img>
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
                        className={classes.sizeBox}
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
                        className={classes.sizeBox}
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
          >
            ADD TO CART
          </button>
        </div>

        <div
          dangerouslySetInnerHTML={{ __html: currentProduct.description }}
          className={classes.description}
        />
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
