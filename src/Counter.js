import React, { useContext } from "react";
import { CountContext } from "./context/CountContext";
import { INCREMENT, DECREMENT } from "./context/config/config";

function Counter() {
  const {
    state: { count },
    dispatch,
  } = useContext(CountContext);

  return (
    <div>
      <div>Counter: {count}</div>
      <button onClick={() => dispatch({ type: INCREMENT })}>+</button>
      <button onClick={() => dispatch({ type: DECREMENT })}>-</button>
    </div>
  );
}

export default Counter;
