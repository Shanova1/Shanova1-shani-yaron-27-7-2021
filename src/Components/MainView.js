import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../Pages/Home";
import Favourites from "../Pages/Favourites";

function MainView() {
  return (
    <>
      <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/favourites" component={Favourites} />
        </Switch>
    </>
  );
}

export default MainView;
