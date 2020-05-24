import React from "react";
import { useDispatch } from "react-redux";

import { useAuth } from "../customHooks/auth";
import { logout } from "../redux/actions/authActions";

import Navbar from "../components/Layout/Navbar";

const NavbarContainer = () => {
  const dispatch = useDispatch();
  const isAuth = useAuth();
  const clickHandler = (e) => {
    e.preventDefault();
    dispatch(logout());
  };
  return <Navbar isAuth={isAuth} clickHandler={clickHandler} />;
};
export default NavbarContainer;
