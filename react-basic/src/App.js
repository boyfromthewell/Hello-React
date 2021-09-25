import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { __RouterContext } from "react-router";
import routers from "./routers";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Switch>
            {routers.map((route) => {
              return (
                <Route key={route.path} path={route.path} exact>
                  <route.component />
                </Route>
              );
            })}
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
