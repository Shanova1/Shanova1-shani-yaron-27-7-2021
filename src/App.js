import "./App.css";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import NavBar from "./Components/NavBar";
import MainView from "./Components/MainView";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <NavBar />
          <MainView />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
