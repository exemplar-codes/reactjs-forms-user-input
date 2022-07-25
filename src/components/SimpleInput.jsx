import { useState } from "react";

const SimpleInput = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");

  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredEmailIsValid, setEnteredEmailIsValid] = useState(false);

  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
    if (event.target.value.trim()) setEnteredNameIsValid(true);
    else setEnteredNameIsValid(false);
    setEnteredNameTouched(true);
  };

  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
    if ([...event.target.value].includes("@")) setEnteredEmailIsValid(true);
    else setEnteredEmailIsValid(false);
    setEnteredEmailTouched(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    if (enteredNameTouched === false) setEnteredNameTouched(true);

    if (!(enteredNameIsValid && enteredEmailIsValid)) return;

    setEnteredName(""); // clear input on successful submision
    setEnteredEmail(""); // clear input on successful submision
  };

  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputIsInvalid
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
      <br />
      <br />
      <div className={emailInputClasses}>
        <label htmlFor="name">Your Email</label>
        <input
          type="text"
          id="email"
          onChange={emailInputChangeHandler}
          value={enteredEmail}
        />
        {emailInputIsInvalid && (
          <p className="error-text">
            &nbsp; <em>Invalid email</em>
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
