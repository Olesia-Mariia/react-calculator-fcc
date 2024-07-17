import React from "react";

import { ACTIONS } from "../reducer/actions";

const OperatorButton = ({ id, operator, dispatch }) => {
  return (
    <button
      id={id}
      className="operator"
      onClick={() =>
        dispatch({ type: ACTIONS.ADD_OPERATION, payload: { operator } })
      }
    >
      {operator === "*" ? "x" : operator}
    </button>
  );
};

export default OperatorButton;
