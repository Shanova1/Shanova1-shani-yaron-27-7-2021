import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../../Pages/Home/Home";
import Favorites from "../../Pages/Favorites/Favorites";

function MainView() {
  return (
    <>
      <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/favorites" component={Favorites} />
        </Switch>
    </>
  );
}

export default MainView;
