import {
  REGISTRY_USER,
  LOGIN_USER,
  ERROR,
  LOGOUT_USER,
  UPDATE_USER,
} from "../types";

const initialState = {
  id: "",
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  isAuth: false,
  errorMessage: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTRY_USER:
      return {
        ...state,
        ...action.payload,
      };
    case LOGIN_USER:
      return {
        ...state,
        ...action.payload,
        isAuth: true,
      };
    case ERROR:
      return {
        ...state,
        errorMessage: action.payload,
      };
    case LOGOUT_USER:
      return {
        ...state,
        isAuth: false,
      };
    case UPDATE_USER:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
export default authReducer;
