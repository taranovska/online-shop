import React from "react";
import { Component, useEffect } from "react/cjs/react.development";
import { PureComponent, useState } from "react/cjs/react.production.min";
import { state } from "../store/store";
import AvailableSizes from "./AvailableSizes";
import classes from "./ProductDescriptionPage.module.css";
import { useParams } from "react-router-dom";
import { Routes, Route } from "react-router";
import { client } from "..";
import { GET_ALL_ITEMS } from "../query/items";

const ProductDescriptionPage = (props) => {
  const params = useParams();
  console.log(params.productId);

  const currentProduct = props.allItems.find(
    (product) => product.id === params.productId
  );
  console.log(currentProduct);
  console.log(currentProduct.attributes[0]);
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
          {currentProduct.attributes.map((attribute, index) => attribute.name)}
        </div>

        <div>
          <div className={classes.allBoxesSize}>
            {currentProduct.attributes.map(
              (checkAttribute, index) =>
                checkAttribute.name === "Color" &&
                checkAttribute.items.map((attribute, index) => (
                  <div
                    className={classes.sizeBox}
                    style={{
                      backgroundColor: attribute.id,
                    }}
                  ></div>
                ))
            )}
          </div>
        </div>
        <div>
          Price:
          <p>$50.00</p>
        </div>
        <div>
          <button className={classes.addToCartButton}>ADD TO CART</button>
        </div>

        <div dangerouslySetInnerHTML={{ __html: currentProduct.description }} />
      </div>
    </div>
  );
};

export default ProductDescriptionPage;
