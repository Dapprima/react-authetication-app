import React from "react";
import { useAuth } from "../customHooks/auth";
import { Redirect, Route } from "react-router-dom";

export const PrivateRoute = ({ children, ...rest }) => {
  const isAuth = useAuth();
  return (
    <Route
      {...rest}
      render={() => (isAuth ? children : <Redirect to="/login" />)}
    />
  );
};
