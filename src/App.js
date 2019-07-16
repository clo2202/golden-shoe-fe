import React from "react";
import "./App.css";
import Home from "./components/Home";
import { Router } from "@reach/router";

function App() {
  return (
    <div className="App">
      <Router>
        <Home path='/shoes'/>
      </Router>
    </div>
  );
}

export default App;
