import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import ProductListingPage from "./components/ProductListingPage";
import { Route, Routes } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { Component } from "react/cjs/react.development";
import ProductDescriptionPage from "./components/ProductDescriptionPage";
import ProductItem from "./components/ProductItem";
import { client } from ".";
import { GET_ALL_CATEGORIES, GET_ALL_ITEMS } from "./query/items";
import { PureComponent } from "react/cjs/react.production.min";
import CurrencySwitcher from "./components/CurrencySwitcher";
import CartProvider from "./store/CartProvider";
import AllProducts from "./components/AllProducts";
import Cart from "./components/Cart";

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      allItems: [],
    };
  }

  componentDidMount() {
    client
      .query({
        query: GET_ALL_CATEGORIES,
      })
      .then((result) => {
        this.setState({
          categories: result.data.categories,
        });
      });
    client
      .query({
        query: GET_ALL_ITEMS,
      })
      .then((result) => {
        this.setState({
          allItems: result.data.categories.find(
            (category) => category.name === "all"
          ).products,
        });
      });
  }
  render() {
    const { categories } = this.state;
    const { allItems } = this.state;

    return (
      <div className="App">
        <CartProvider>
          <Header categories={categories}></Header>

          <Routes>
            <Route
              path={"/pdp/:productId"}
              element={
                <ProductDescriptionPage
                  allItems={allItems}
                ></ProductDescriptionPage>
              }
            ></Route>
            {categories.map((category, index) => (
              <Route
                key={index++}
                path={category.name}
                element={
                  <ProductListingPage
                    route={category.name}
                  ></ProductListingPage>
                }
              ></Route>
            ))}
            <Route path="/cart" element={<Cart></Cart>}></Route>
            <Route path="/" element={<AllProducts></AllProducts>}></Route>
          </Routes>
        </CartProvider>
      </div>
    );
  }
}

export default App;
