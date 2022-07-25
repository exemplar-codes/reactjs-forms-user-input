import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const nameInputChangeHandler = (event) => {
    if (enteredNameTouched === false) setEnteredNameTouched(true);
    setEnteredName(event.target.value);
    if (event.target.value.trim())
      setEnteredNameIsValid(true);
    else
      setEnteredNameIsValid(false);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    if (enteredNameTouched === false) setEnteredNameTouched(true);

    if (enteredName.trim() === "") {
      // ignore empty input
      setEnteredNameIsValid(false);
      return;
    }

    setEnteredNameIsValid(true);
    console.log(enteredName);

    setEnteredName(""); // clear input on successful submision
  };

  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && (
          <p className="error-text">
            &nbsp; <em>Empty input!</em>
          </p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
