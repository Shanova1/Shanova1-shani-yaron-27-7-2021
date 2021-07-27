import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import React from "react";

import Home from "./Pages/Home";
import Favourites from "./Pages/Favourites";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/favourites" component={Favourites} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
