import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import ProductListingPage from "./components/ProductListingPageClothes";
import { Route, Routes } from "react-router-dom";
import { Component } from "react/cjs/react.development";
import ProductDescriptionPage from "./components/ProductDescriptionPage";
import ProductItem from "./components/ProductItem";
import { client } from ".";
import { GET_ALL_CATEGORIES, GET_ALL_ITEMS } from "./query/items";
import ProductListingPageAll from "./components/ProductListingPageAll";
import ProductListingPageClothes from "./components/ProductListingPageClothes";
import ProductListingPageTech from "./components/ProductListingPageTech";
import MyBag from "./components/MyBag";

class App extends Component {
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

    return (
      <div className="App">
        <Header categories={categories}></Header>
        {/* <ProductListingPageAll path="all"></ProductListingPageAll> */}
        <Routes>
          {/* {categories.map((category, index) => (
            <Route
              key={index++}
              path="/{category.name}"
              element={
                <ProductListingPage
                  category={category.name}
                ></ProductListingPage>
              }
            ></Route>
            
          ))} */}

          <Route
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
        </Routes>
        {/* <Route
            path="/clothes"
            element={<ProductListingPage path={"clothes"}></ProductListingPage>}
          ></Route>
          <Route
            path="/tech"
            element={<ProductListingPage path={"tech"}></ProductListingPage>}
          ></Route>
        </Routes> */}
        {/* <ProductListingPage></ProductListingPage> */}
      </div>
    );
  }
}

export default App;
