import React from "react";
import { Component } from "react/cjs/react.production.min";
import ProductItem from "./ProductItem";
import { state } from "../store/store";

class ProductListingPage extends Component {
  constructor(props) {
    super(props);

    this.state = state;

    // this.productsList = () => {
    //   const product = DUMMY_DATA.map((product) => (
    //     <ProductItem
    //       key={product.id}
    //       img={product.img}
    //       description={product.description}
    //       price={product.price}
    //     ></ProductItem>
    //   ));
    // };
  }
  render() {
    return (
      <div>
        {this.state.map((product) => (
          <ProductItem
            key={product.id}
            img={product.img}
            description={product.description}
            price={product.price}
          ></ProductItem>
        ))}
      </div>
    );
  }
}

export default ProductListingPage;
