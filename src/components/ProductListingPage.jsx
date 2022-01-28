import React from "react";
import { Component, PureComponent } from "react/cjs/react.production.min";
import ProductItem from "./ProductItem";

import { GET_ALL_ITEMS } from "../query/items";
import { client } from "..";
import { Routes, Route } from "react-router";
import ProductDescriptionPage from "./ProductDescriptionPage";

class ProductListingPage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidUpdate() {
    client
      .query({
        query: GET_ALL_ITEMS,
      })
      .then((result) => {
        this.setState({
          products: result.data.categories.find(
            (category) => category.name === this.props.route
          ).products,
        });
      });
  }
  render() {
    const { products } = this.state;

    return products.map((product, index) => (
      <ProductItem
        key={product.id}
        keys={product.id}
        img={product.gallery[0]}
        title={product.name}
      ></ProductItem>
    ));
  }
}

export default ProductListingPage;
