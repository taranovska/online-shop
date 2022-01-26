import React from "react";
import { Component } from "react/cjs/react.production.min";
import ProductItem from "./ProductItem";
import { state } from "../store/store";
import { GET_ALL_ITEMS, GET_ALL_ITEMS_ALL } from "../query/items";
import { client } from "..";

class ProductListingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }
  filterCategory() {
    return this.props.path;
  }
  componentDidMount() {
    client
      .query({
        query: GET_ALL_ITEMS,
      })
      .then((result) => {
        this.setState({
          products: result.data.categories.find(
            (category) => category.name === this.filterCategory()
          ).products,
        }); /*{props.path}*/
      });
  }
  // componentDidUpdate(prevProps) {
  //   if (this.path !== prevProps.path) {
  //     this.fetchData(this.path);
  //   }
  // }
  // render() {
  //   const { products } = this.state;

  //   return products.map((product, index) => (
  //     <div className={classes.productCard} key={index++}>
  //       <div className={classes.mainImg}>
  //         <img src={product.gallery[0]} alt="" />
  //       </div>
  //       <div>{product.name}</div>

  //       {/* <p>{product.prices[0].amount} </p> */}
  //     </div>
  //   ));
  // }
  render() {
    const { products } = this.state;

    return products.map((product, index) => (
      <ProductItem
        key={index++}
        img={product.gallery[0]}
        title={product.name}
        // price={product.price}
      ></ProductItem>
    ));
  }
}

//   constructor(props) {
//     super(props);

//     this.state = state;

//     // this.productsList = () => {
//     //   const product = DUMMY_DATA.map((product) => (
//     //     <ProductItem
//     //       key={product.id}
//     //       img={product.img}
//     //       description={product.description}
//     //       price={product.price}
//     //     ></ProductItem>
//     //   ));
//     // };
//   }
//   render() {
//     return (
//       <div>
//         {this.state.map((product) => (
//           <ProductItem
//             key={product.id}
//             img={product.img}
//             description={product.description}
//             price={product.price}
//           ></ProductItem>
//         ))}
//       </div>
//     );
//   }
// }

export default ProductListingPage;
