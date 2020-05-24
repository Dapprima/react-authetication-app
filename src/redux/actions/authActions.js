import {
  REGISTRY_USER,
  LOGIN_USER,
  ERROR,
  LOGOUT_USER,
  UPDATE_USER,
} from "../types";
import * as api from "../../api/api";

const error = (message) => ({
  type: ERROR,
  payload: message,
});

export const logout = () => ({
  type: LOGOUT_USER,
});

const registry = (user) => ({
  type: REGISTRY_USER,
  payload: user,
});

export const registryUser = (user) => {
  return (dispatch) => {
    api.registryUser(user).then((resp) => {
      if (resp.error) {
        dispatch(error(resp.error));
      } else {
        dispatch(registry(resp.data));
      }
    });
  };
};

const login = (user) => ({
  type: LOGIN_USER,
  payload: user,
});
export const loginUser = (user) => {
  return (dispatch) => {
    api.loginUser(user).then((resp) => {
      if (resp.error) {
        dispatch(error(resp.error));
      } else {
        dispatch(login(resp.data));
      }
    });
  };
};

const update = (user) => ({
  type: UPDATE_USER,
  payload: user,
});
export const updateUser = (user) => {
  return (dispatch) => {
    api.updateUser(user).then((resp) => {
      if (resp.error) {
        dispatch(error(resp.error));
      } else {
        dispatch(update(resp.data));
      }
    });
  };
};
