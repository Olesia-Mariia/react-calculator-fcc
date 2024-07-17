import React from "react";

import { ACTIONS } from "../reducer/actions";

const DigitButton = ({ id, digit, dispatch }) => {
  return (
    <button
      id={id}
      className="number"
      onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
      style={digit === "0" ? { width: "160px" } : {}}
    >
      {digit}
    </button>
  );
};

export default DigitButton;
