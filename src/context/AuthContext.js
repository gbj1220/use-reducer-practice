import React, { useReducer } from "react";
import { LOGIN, LOGOUT } from "./config/config";

export const AuthContext = React.createContext({});

const initialState = {
  isAuth: false,
  user: null,
};

function reducer(state, action) {
  switch (action.type) {
    case LOGIN:
      return {
        isAuth: true,
        user: {
          email: action.user.email,
        },
      };
    case LOGOUT:
      return {
        isAuth: false,
        user: null,
      };
    default:
      return state;
  }
}

function AuthContextComponent({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextComponent;
