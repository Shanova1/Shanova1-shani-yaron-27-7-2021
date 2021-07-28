import "./App.css";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";


import NavBar from "./Components/NavBar";
import MainView from "./Components/MainView";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <MainView />
      </Router>
    </div>
  );
}

export default App;
