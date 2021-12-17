import logo from "./logo.svg";
import "./App.css";
import { ThemeProvider } from "styled-components";

import Home from "./Components/Home";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import ProductPage from "./Components/ProductPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "./Actions";

const theme = {
  colors: {
    body: "grey",
    nav: "white",
  },
};

function App() {
  const products = useSelector((state) => state.productsFetch);
  const dispatch = useDispatch();

  console.log(products);
  if (products === "") {
    fetch("https://electronic-ecommerce.herokuapp.com/api/v1/product")
      .then((data) => data.json())
      .then((data) => {
        dispatch(fetchProducts(data));
        console.log(products);
      });
  }

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<ProductPage />} />
          </Routes>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
