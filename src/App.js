import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import ProductListingPage from "./components/ProductListingPage";
import { Route, Routes } from "react-router-dom";
import { Component } from "react/cjs/react.development";
import ProductDescriptionPage from "./components/ProductDescriptionPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>

        <Routes>
          <Route
            path="/women"
            element={<ProductListingPage></ProductListingPage>}
          ></Route>
          <Route
            path="/women/pdp"
            element={<ProductDescriptionPage></ProductDescriptionPage>}
          ></Route>
        </Routes>

        {/* <ProductListingPage></ProductListingPage> */}
      </div>
    );
  }
}

export default App;
