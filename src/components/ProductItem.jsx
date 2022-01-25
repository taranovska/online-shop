import React from "react";
import { Link } from "react-router-dom";
import { Component } from "react/cjs/react.production.min";
import ProductDescriptionPage from "./ProductDescriptionPage";

class ProductItem extends Component {
  render() {
    return (
      <Link to="/women/pdp">
        <div>
          <div>
            <img src={this.props.img} alt="" />
          </div>
          <p>{this.props.description}</p>
          <p>{this.props.price} </p>
        </div>
      </Link>
    );
  }
}

export default ProductItem;
