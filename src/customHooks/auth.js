import { useSelector } from "react-redux";
export const useAuth = () => {
  return useSelector((state) => state.auth.isAuth);
};

export const useRegistry = () => {
  return useSelector((state) => [state.auth.email, state.auth.password]);
};
export const useUserData = () => {
  return useSelector((state) => ({ ...state.auth }));
};
