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

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
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
  }
  render() {
    const { categories } = this.state;
    console.log(categories);
    return (
      <div className="App">
        <Header categories={categories}></Header>
        {/* <ProductListingPageAll path="all"></ProductListingPageAll> */}

        <Routes>
          <Route
            path={"/pdp/:productId"}
            element={<ProductDescriptionPage></ProductDescriptionPage>}
          ></Route>{" "}
          {categories.map((category, index) => (
            <Route
              key={index++}
              path={category.name}
              element={
                <ProductListingPage route={category.name}></ProductListingPage>
              }
            ></Route>
          ))}
        </Routes>

        {/* <Route
            path="/clothes"
            element={
              <ProductListingPageClothes
                path={"clothes"}
              ></ProductListingPageClothes>
            }
          ></Route>

          <Route
            path="/all"
            element={
              <ProductListingPageAll path={"all"}></ProductListingPageAll>
            }
          ></Route>
          <Route
            path="/tech"
            element={
              <ProductListingPageTech path={"tech"}></ProductListingPageTech>
            }
          ></Route>
        </Routes> */}
        {/* <Route
            path="/clothes"
            element={<ProductListingPage path={"clothes"}></ProductListingPage>}
          ></Route>
          <Route
            path="/tech"
            element={<ProductListingPage path={"tech"}></ProductListingPage>}
          ></Route>*/}

        {/* <ProductListingPage></ProductListingPage> */}
      </div>
    );
  }
}

export default App;
