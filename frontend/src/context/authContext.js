import { useContext, createContext, useReducer } from "react";
import { authReducer } from "../reducer/authReducer";
import axios from "axios";
axios.defaults.withCredentials = true;

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, {
    userId: "",
    cart: [],
    wishlist: [],
    productList: [],
  });

  return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
