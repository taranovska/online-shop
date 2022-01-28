import React from "react";
import { Link } from "react-router-dom";
import { Component } from "react/cjs/react.production.min";
import { client } from "..";
import { GET_ALL_ITEMS } from "../query/items";
import ProductDescriptionPage from "./ProductDescriptionPage";
import classes from "./ProductItem.module.css";
import { Routes, Route } from "react-router";

class ProductItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Link to={`/pdp/${this.props.keys}`}>
        <div className={classes.productCard} key={this.props.keys}>
          <div className={classes.mainImg}>
            <img src={this.props.img} alt="" />
          </div>
          <div>{this.props.title}</div>
        </div>
      </Link>
    );
  }
}

export default ProductItem;
