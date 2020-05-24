import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { useAuth, useRegistry } from "../customHooks/auth";

import LoginForm from "../components/Login/LoginForm";
import { loginUser } from "../redux/actions/authActions";

const LoginContainer = () => {
  const [email, password] = useRegistry();
  const [user, setUser] = useState({
    email,
    password,
  });

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    if (user.email && user.password) {
      dispatch(loginUser(user));
    }
  };
  const onChangeHandler = (e) => {
    const newUser = { [e.target.id]: e.target.value };
    setUser({ ...user, ...newUser });
  };

  // Check if already login, if yes redirect to home
  if (useAuth()) {
    return <Redirect to="/" />;
  }
  return (
    <LoginForm
      submitHandler={submitHandler}
      onChangeHandler={onChangeHandler}
      user={user}
    />
  );
};
export default LoginContainer;
