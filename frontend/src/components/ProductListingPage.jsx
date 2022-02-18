import React from "react";
import { PureComponent } from "react/cjs/react.production.min";
import ProductItem from "./ProductItem";
import { GET_ALL_ITEMS } from "../query/items";
import { client } from "..";
import CartContext from "../store/cart-context";
import classes from "./ProductListingPage.module.css";

class ProductListingPage extends PureComponent {
  constructor(props) {
    super(props);
    this.getItems = this.getItems.bind(this);
    this.state = {
      products: [],
    };
  }

  getItems = () => {
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
  };

  static contextType = CartContext;
  componentDidMount() {
    this.getItems();
  }
  componentDidUpdate() {
    this.getItems();
  }

  render() {
    const { products } = this.state;
    return (
      <div>
        <p className={classes.categoryName}>{this.props.route}</p>
        <div>
          {products.map((product, index) => (
            <ProductItem
              key={product.id}
              keys={product.id}
              img={product.gallery[0]}
              title={product.name}
              prices={product.prices}
              attributes={product.attributes}
              inStock={product.inStock}
            ></ProductItem>
          ))}
        </div>
      </div>
    );
  }
}

export default ProductListingPage;
