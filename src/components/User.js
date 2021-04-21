import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { LOGOUT } from "../context/config/config";

function User() {
  const {
    state: { isAuth, user },
    dispatch,
  } = useContext(AuthContext);

  return (
    <div>
      <div>
        {isAuth && user ? (
          <span>Email: {user.email}</span>
        ) : (
          <span>No user</span>
        )}
      </div>
      <br />
      <div>
        {isAuth && user ? (
          <span onClick={() => dispatch({ type: LOGOUT })}></span>
        ) : (
          <span>Please Login</span>
        )}
      </div>
    </div>
  );
}

export default User;
