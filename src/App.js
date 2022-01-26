import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import ProductListingPage from "./components/ProductListingPage";
import { Route, Routes } from "react-router-dom";
import { Component } from "react/cjs/react.development";
import ProductDescriptionPage from "./components/ProductDescriptionPage";
import ProductItem from "./components/ProductItem";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Routes>
          <Route
            path="/all"
            element={<ProductListingPage path={"all"}></ProductListingPage>}
          ></Route>
          <Route
            path="/clothes"
            element={<ProductListingPage path={"clothes"}></ProductListingPage>}
          ></Route>
          <Route
            path="/tech"
            element={<ProductListingPage path={"tech"}></ProductListingPage>}
          ></Route>
        </Routes>

        {/* <ProductListingPage></ProductListingPage> */}
      </div>
    );
  }
}

export default App;
