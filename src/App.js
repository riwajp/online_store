import logo from "./logo.svg";
import "./App.css";
import { ThemeProvider } from "styled-components";

import Home from "./Components/Home";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";

import { BrowserRouter, Routes, Route } from "react-router-dom";

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
          <Home />
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
