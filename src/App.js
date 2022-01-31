import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import ProductListingPage from "./components/ProductListingPage";
import { Route, Routes } from "react-router-dom";
import { Switch } from "react-router";
import { Component } from "react/cjs/react.development";
import ProductDescriptionPage from "./components/ProductDescriptionPage";
import ProductItem from "./components/ProductItem";
import { client } from ".";
import { GET_ALL_CATEGORIES, GET_ALL_ITEMS } from "./query/items";
import { PureComponent } from "react/cjs/react.production.min";
import CurrencySwitcher from "./components/CurrencySwitcher";
import CartProvider from "./store/CartProvider";

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
    console.log(categories);
    console.log(allItems);
    return (
      <div className="App">
        <CartProvider>
          {" "}
          <Header categories={categories}></Header>
          {/* <ProductListingPage path="/"></ProductListingPage> */}
          <Routes>
            <Route
              path={"/pdp/:productId"}
              element={
                <CartProvider>
                  {" "}
                  <ProductDescriptionPage
                    allItems={allItems}
                  ></ProductDescriptionPage>
                </CartProvider>
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
          </Routes>
        </CartProvider>
      </div>
    );
  }
}

export default App;
