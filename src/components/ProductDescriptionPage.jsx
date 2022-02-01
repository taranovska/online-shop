import React, { useContext } from "react";
import { Component, useEffect } from "react/cjs/react.development";
import { PureComponent, useState } from "react/cjs/react.production.min";
import CartContext, { state } from "../store/cart-context";
import AvailableSizes from "./AvailableSizes";
import classes from "./ProductDescriptionPage.module.css";
import { useParams } from "react-router-dom";
import { Routes, Route } from "react-router";
import { client } from "..";
import { GET_ALL_ITEMS } from "../query/items";
import CartProvider from "../store/CartProvider";

const ProductDescriptionPage = (props) => {
  const params = useParams();
  console.log(params.productId);
  const context = useContext(CartContext);
  const currentProduct = props.allItems.find(
    (product) => product.id === params.productId
  );
  // console.log(props.allItems[2].prices[2].currency.label);
  // const defaultCurrency = props.allItems.map((item) =>
  //   item.prices.find((curSymbol) => curSymbol.currency.symbol === "$")
  // );
  const defaultCurrency = currentProduct.prices.find(
    (curSymbol) => curSymbol.currency.symbol === "$"
  );
  console.log(defaultCurrency);
  const amountInputRef = 1;
  const addToCartButtonHandler = (e) => {
    const enteredAmountNumber = +amountInputRef;
    context.addItem({
      id: params.productId,
      name: currentProduct.name,
      amount: enteredAmountNumber,
      price: defaultCurrency.currency.symbol + defaultCurrency.amount,
      attributes: currentProduct.attributes,
      img: currentProduct.gallery[0],
    });
    console.log(context);
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
          {currentProduct.attributes.map(
            (attribute, index) =>
              attribute.name === "Color" && (
                <div>
                  <div>{attribute.name}</div>
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
          {currentProduct.attributes.map(
            (attribute, index) =>
              attribute.name === "Size" && (
                <div>
                  <div>{attribute.name}</div>
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
          {currentProduct.attributes.map(
            (attribute, index) =>
              attribute.name === "Capacity" && (
                <div>
                  <div>{attribute.name}</div>
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
          {currentProduct.attributes.map(
            (attribute, index) =>
              attribute.name === "With USB 3 ports" && (
                <div>
                  <div>{attribute.name}</div>
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

export default ProductDescriptionPage;
