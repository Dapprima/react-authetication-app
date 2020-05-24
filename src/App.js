import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Grid } from "@material-ui/core";

import "./App.css";
import { PrivateRoute } from "./hoc/privateRoute";
import NavbarContainer from "./containers/NavbarContainer";
import Home from "./pages/Home";
import Registry from "./pages/Registry";
import Login from "./pages/Login";

const App = () => {
  return (
    <Router>
      <NavbarContainer />
      <Grid container justify="center" alignItems="center">
        <Switch>
          <Route path="/registry" component={Registry} exact />
          <Route path="/login" component={Login} exact />
          <PrivateRoute path="/" exact>
            <Home />
          </PrivateRoute>
        </Switch>
      </Grid>
    </Router>
  );
};

export default App;
