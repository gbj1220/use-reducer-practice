import React, { useReducer } from "react";
import { INCREMENT, DECREMENT } from "./config/config";

export const CountContext = React.createContext({});

const initialState = {
  count: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        count: state.count - 1,
      };
    default:
      return initialState;
  }
}

function CountContextComponent({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CountContext.Provider value={{ state, dispatch }}>
      {children}
    </CountContext.Provider>
  );
}

export default CountContextComponent;

/* acting as the context from last assignment just with more stuff in it */
