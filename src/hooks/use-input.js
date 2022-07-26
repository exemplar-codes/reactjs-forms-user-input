import { useState } from "react";

function useInput(initValue, validationLogic) {
  const [isTouched, setIsTouched] = useState(false);
  const [enteredValue, setEnteredValue] = useState(initValue);

  const valueIsValid = validationLogic(enteredValue) && setIsTouched;
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue(initValue);
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    valueIsValid,
    hasError,
    valueChangeHandler,
    reset,
  };
}

export default useInput;
