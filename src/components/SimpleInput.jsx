import useInput from "../hooks/use-input";

const SimpleInput = () => {
  const {
    value: enteredName,
    hasError: hasNameError,
    valueIsValid: enteredNameIsValid,
    valueChangeHandler: nameInputChangeHandler,
    reset: resetName,
  } = useInput("", (value) => value.trim().length);

  const {
    value: enteredEmail,
    hasError: hasEmailError,
    valueIsValid: enteredEmailIsValid,
    valueChangeHandler: emailInputChangeHandler,
    reset: resetEmail,
  } = useInput("", (value) => value.includes("@"));

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    if (!(enteredNameIsValid && enteredEmailIsValid)) return;

    resetName(); // clear input on successful submision
    resetEmail(); // clear input on successful submision
  };

  const nameInputClasses = hasNameError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = hasEmailError
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
        {hasNameError && (
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
        {hasEmailError && (
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
