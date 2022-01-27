import React from "react";
import { Component } from "react/cjs/react.production.min";
import ProductItem from "./ProductItem";

import { GET_ALL_ITEMS } from "../query/items";
import { client } from "..";

class ProductListingPageClothes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    client
      .query({
        query: GET_ALL_ITEMS,
      })
      .then((result) => {
        this.setState({
          products: result.data.categories.find(
            (category) => category.name === "clothes"
          ).products,
        });
      });
  }
  render() {
    const { products } = this.state;

    return products.map((product, index) => (
      <ProductItem
        keys={Math.random()}
        img={product.gallery[0]}
        title={product.name}
        // price={product.price}
      ></ProductItem>
    ));
  }
}

export default ProductListingPageClothes;
