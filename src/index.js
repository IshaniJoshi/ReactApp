import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom";
import Component1 from "./Component1";
import notfound from "./notfound";

import "./styles.css";

const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/Component1" component={Component1} />
        <Route component={notfound} />
      </Switch>
    </div>
  </Router>
);

const rootElement = document.getElementById("root");
ReactDOM.render(routing, rootElement);
