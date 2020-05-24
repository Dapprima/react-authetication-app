import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { useAuth } from "../customHooks/auth";

import RegistryForm from "../components/Registry/RegistryForm";
import { registryUser } from "../redux/actions/authActions";

const RegistryContainer = (props) => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    if (user.firstName && user.lastName && user.email && user.password) {
      dispatch(registryUser(user));
    }
    setUser({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
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
    <RegistryForm
      submitHandler={submitHandler}
      onChangeHandler={onChangeHandler}
      user={user}
    />
  );
};

export default RegistryContainer;
