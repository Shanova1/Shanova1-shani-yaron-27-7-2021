import "./App.css";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import NavBar from "./Components/NavBar/NavBar";
import MainView from "./Components/MainView/MainView";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router basename="/Shanova1-shani-yaron-27-7-2021">
          <NavBar />
          <MainView />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
