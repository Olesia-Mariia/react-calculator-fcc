import React from "react";

import { ACTIONS } from "../reducer/actions";

const DigitButton = ({ id, digit, dispatch }) => {
  return (
    <button
      id={id}
      className={digit === "0" ? "wide-btn number" : "number"}
      onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
    >
      {digit}
    </button>
  );
};

export default DigitButton;
