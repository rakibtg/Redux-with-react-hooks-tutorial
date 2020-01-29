import React from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import { incrementCounter } from "./store/actions";

export default () => {
  const count = useSelector(state => state.counter, shallowEqual);
  const dispatch = useDispatch();
  return (
    <div>
      <h3>Count: {count}</h3>
      <button
        onClick={() => {
          dispatch(incrementCounter());
        }}
      >
        Increment!
      </button>
    </div>
  );
};
