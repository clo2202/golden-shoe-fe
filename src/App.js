import React from "react";
import "./App.css";
import Home from "./components/Home";
import { Router } from "@reach/router";
import ProductPage from "./components/ProductPage";

function App() {
  return (
    <div className="App">
      <Router className='container'>
        <Home path='/shoes'/>
        <ProductPage path='/shoes/:shoe_id'/>
      </Router>
    </div>
  );
}

export default App;
