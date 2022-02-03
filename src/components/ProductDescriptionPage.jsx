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

  let selectedAttributes = [];
  console.log(typeof selectedAttributes);
  currentProduct.attributes.map((attribute) =>
    selectedAttributes.push({
      value: attribute.items[0].displayValue,
      title: attribute.name,
    })
  );

  const [selectedAttribute, setSelectedAttributes] =
    useState(selectedAttributes);

  const addToCartButtonHandler = (e) => {
    const enteredAmountNumber = 1;
    context.addItem({
      id: params.productId,
      name: currentProduct.name,
      amount: enteredAmountNumber,
      price: defaultCurrency.currency.symbol + defaultCurrency.amount,
      priceWithOutSymbol: defaultCurrency.amount,
      attributes: currentProduct.attributes,
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
        <p>{currentProduct.name}</p>

        <div>
          {/* {currentProduct.attributes.map(
            (attribute, index) =>
              attribute.name === "Color" && (
                <div>
                  <div>Select {attribute.name}: </div>
                  <div className={classes.allBoxesSize}>
                    {attribute.items.map((attribute, index) => (
                      <div
                        // onClick={() =>
                        //   setSelectedAttributes({
                        //     title: attribute.name,
                        //     value: attribute.displayValue,
                        //   })
                        // }
                        className={classes.sizeBox}
                        style={{
                          backgroundColor: attribute.id,
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
              )
          )} */}
          {currentProduct.attributes.map(
            (attribute, index) =>
              attribute.name === "Color" && (
                <div>
                  <div>Select {attribute.name}: </div>
                  <div className={classes.allBoxesSize}>
                    <select></select>
                    {attribute.items.map((attribute, index) => (
                      <div
                        // onClick={() =>
                        //   setSelectedAttributes({
                        //     title: attribute.name,
                        //     value: attribute.displayValue,
                        //   })
                        // }
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
          {currentProduct.attributes.map(
            (attribute, index) =>
              attribute.name === "Size" && (
                <div>
                  <div>Select {attribute.name}:</div>
                  <div className={classes.allBoxesSize}>
                    {attribute.items.map((attribute, index) => (
                      <div
                        className={classes.sizeBox}
                        // onClick={() =>
                        //   setSelectedAttributes({
                        //     title: attribute.name,
                        //     value: attribute.displayValue,
                        //   })
                        // }
                      >
                        {attribute.displayValue}
                      </div>
                    ))}
                  </div>
                </div>
              )
          )}
          {currentProduct.attributes.map(
            (attribute, index) =>
              attribute.name === "Capacity" && (
                <div>
                  <div>Select {attribute.name}:</div>
                  <div className={classes.allBoxesSize}>
                    {attribute.items.map((attribute, index) => (
                      <div
                        className={classes.sizeBox}
                        // onClick={() =>
                        //   setSelectedAttributes({
                        //     title: attribute.name,
                        //     value: attribute.displayValue,
                        //   })
                        // }
                      >
                        {attribute.displayValue}
                      </div>
                    ))}
                  </div>
                </div>
              )
          )}
          {currentProduct.attributes.map(
            (attribute, index) =>
              attribute.name === "With USB 3 ports" && (
                <div>
                  <div>Select {attribute.name}:</div>
                  <div className={classes.allBoxesSize}>
                    {attribute.items.map((attribute, index) => (
                      <div
                      // className={classes.sizeBox}
                      // onClick={() =>
                      //   setSelectedAttributes({
                      //     title: attribute.name,
                      //     value: attribute.displayValue,
                      //   })
                      // }
                      >
                        {attribute.displayValue}
                      </div>
                    ))}
                  </div>
                </div>
              )
          )}
        </div>
        <div>
          Price:
          <p>{defaultCurrency.currency.symbol + defaultCurrency.amount}</p>
        </div>
        <div>
          <button
            className={classes.addToCartButton}
            onClick={addToCartButtonHandler}
          >
            ADD TO CART
          </button>
        </div>

        <div dangerouslySetInnerHTML={{ __html: currentProduct.description }} />
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
