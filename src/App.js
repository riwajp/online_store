import logo from "./logo.svg";
import "./App.css";
import { ThemeProvider } from "styled-components";

import Home from "./Components/Home";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import ProductPage from "./Components/ProductPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

const theme = {
  colors: {
    body: "grey",
    nav: "white",
  },
};
function App() {
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
