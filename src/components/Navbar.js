import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { LOGOUT } from "../context/config/config";

function Navbar() {
  const {
    state: { isAuth, user },
    dispatch,
  } = useContext(AuthContext);

  return (
    <div>
      <ul>
        <li>
          {isAuth && user ? (
            <span onClick={() => dispatch({ type: LOGOUT })}>Logout</span>
          ) : (
            <span>Please Login</span>
          )}
        </li>
        <li>
          {isAuth && user ? (
            <span>Email: {user.email}</span>
          ) : (
            <span>Login</span>
          )}
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
