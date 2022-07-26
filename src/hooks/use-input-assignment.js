import { useState } from "react";

function useInputAssignment(initValue, validationLogic) {
  const [touched, setTouched] = useState(false);
  const [value, setValue] = useState(initValue);

  const isValid = validationLogic(value);
  const hasError = touched && !isValid; // to avoid blank warnings if not touched

  const reset = () => {
    setValue(initValue);
    setTouched(false);
  };

  const inputChangeHandler = (event) => {
    setTouched(true);
    setValue(event.target.value);
  };

  return { value, reset, inputChangeHandler, hasError, isValid };
}

export default useInputAssignment;
