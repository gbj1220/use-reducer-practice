import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { LOGIN } from "../context/config/config";

function Login() {
  const [user, setUser] = useState(null);
  const [value, setValue] = useState("");

  const { dispatch } = useContext(AuthContext);

  function handleLogin() {
    setUser({
      email: value,
    });
  }

  useEffect(() => {
    if (user) {
      dispatch({ type: LOGIN, user: user });
    }
  });

  return (
    <div>
      Login
      <div>
        <input
          type='text'
          name='email'
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default Login;
