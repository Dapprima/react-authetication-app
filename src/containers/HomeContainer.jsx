import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useUserData } from "../customHooks/auth";

import UpdateForm from "../components/Home/UpdateForm";
import { updateUser } from "../redux/actions/authActions";

const RegistryContainer = () => {
  const { id, firstName, lastName, email, password } = useUserData();
  const [user, setUser] = useState({
    id,
    firstName,
    lastName,
    email,
    password,
  });
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    if (user.firstName && user.lastName && user.email && user.password) {
      dispatch(updateUser(user));
    }
  };
  const onChangeHandler = (e) => {
    const newUser = { [e.target.id]: e.target.value };
    setUser({ ...user, ...newUser });
  };

  return (
    <UpdateForm
      submitHandler={submitHandler}
      onChangeHandler={onChangeHandler}
      user={user}
    />
  );
};

export default RegistryContainer;
