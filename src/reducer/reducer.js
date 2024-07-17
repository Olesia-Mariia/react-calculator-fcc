import { evaluate, round } from "mathjs";
import { ACTIONS } from "./actions";

const reducer = (state, { type, payload }) => {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      if (payload.digit === "0" && state.currentNumber === "0") return state;
      if (payload.digit === "." && state.currentNumber.includes("."))
        return state;
      if (
        state.currentNumber === undefined ||
        (state.currentNumber === "0" && payload.digit !== ".")
      ) {
        return {
          ...state,
          currentNumber: payload.digit,
          formula: `${state.formula || ""}${state.lastOperator || ""}${
            payload.digit
          }`,
          lastOperator: undefined,
        };
      }
      return {
        ...state,
        currentNumber: `${state.currentNumber || ""}${payload.digit}`,
        formula: `${state.formula || state.currentNumber}${payload.digit}`,
      };
    case ACTIONS.ADD_OPERATION:
      if (state.currentNumber == undefined && state.formula == undefined)
        return state;
      if (state.lastOperator == undefined) {
        return {
          ...state,
          lastOperator: payload.operator,
          formula: `${state.formula || state.currentNumber}`,
          currentNumber: "0",
        };
      }
      if (payload.operator === "-") {
        return {
          ...state,
          lastOperator: `${state.lastOperator}${payload.operator}`,
        };
      }
      return {
        ...state,
        lastOperator: payload.operator,
      };
    case ACTIONS.CLEAR:
      return {
        currentNumber: "0",
        formula: undefined,
        lastOperator: undefined,
      };
    case ACTIONS.EVALUATE:
      return {
        ...state,
        currentNumber: state.formula
          ? round(evaluate(state.formula), 4).toString()
          : state.currentNumber,
        formula: undefined,
        lastOperator: undefined,
      };
  }
};

export default reducer;
