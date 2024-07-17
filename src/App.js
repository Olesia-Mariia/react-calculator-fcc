import React, { useReducer } from "react";
import "./styles/index.css";

import reducer from "./reducer/reducer";
import { ACTIONS } from "./reducer/actions";

import OperatorButton from "./components/OperatorButton";
import DigitButton from "./components/DigitButton";

const App = () => {
  const [{ currentNumber, formula, lastOperator }, dispatch] = useReducer(
    reducer,
    {
      currentNumber: "0",
      formula: undefined,
      lastOperator: undefined,
    }
  );

  return (
    <div id="app">
      <div className="calculator">
        <div className="display">
          <div className="formula">
            {formula} {lastOperator}
          </div>
          <div className="input-output" id="display">
            {currentNumber}
          </div>
        </div>
        <div className="keyboard">
          <button
            id="clear"
            className="wide-btn clear"
            onClick={() => dispatch({ type: ACTIONS.CLEAR })}
          >
            C
          </button>
          <OperatorButton id="divide" operator="/" dispatch={dispatch} />
          <OperatorButton id="multiply" operator="*" dispatch={dispatch} />

          <DigitButton id="seven" digit="7" dispatch={dispatch} />
          <DigitButton id="eight" digit="8" dispatch={dispatch} />
          <DigitButton id="nine" digit="9" dispatch={dispatch} />
          <OperatorButton id="subtract" operator="-" dispatch={dispatch} />

          <DigitButton id="four" digit="4" dispatch={dispatch} />
          <DigitButton id="five" digit="5" dispatch={dispatch} />
          <DigitButton id="six" digit="6" dispatch={dispatch} />
          <OperatorButton id="add" operator="+" dispatch={dispatch} />

          <DigitButton id="one" digit="1" dispatch={dispatch} />
          <DigitButton id="two" digit="2" dispatch={dispatch} />
          <DigitButton id="three" digit="3" dispatch={dispatch} />

          <DigitButton id="zero" digit="0" dispatch={dispatch} />
          <DigitButton id="decimal" digit="." dispatch={dispatch} />
          <button
            id="equals"
            className="equal-btn"
            onClick={() => dispatch({ type: ACTIONS.EVALUATE })}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
