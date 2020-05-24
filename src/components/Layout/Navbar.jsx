import React from "react";
import { NavLink } from "react-router-dom";
import { AppBar, Button, Toolbar } from "@material-ui/core";

const Navbar = (props) => {
  return (
    <AppBar position="static" style={{ backgroundColor: "#ec407a" }}>
      <Toolbar>
        {props.isAuth === false ? (
          <>
            <Button
              color="inherit"
              component={NavLink}
              to="/login"
              activeClassName="active"
              exact
            >
              Login
            </Button>
            <Button
              color="inherit"
              component={NavLink}
              to="/registry"
              activeClassName="active"
            >
              Registry
            </Button>
          </>
        ) : (
          <>
            <Button
              color="inherit"
              component={NavLink}
              to="/"
              activeClassName="active"
              exact
            >
              Home
            </Button>
            <Button color="inherit" onClick={(e) => props.clickHandler(e)}>
              Logout
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
