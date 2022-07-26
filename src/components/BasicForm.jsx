import useInputAssignment from "../hooks/use-input-assignment";

const BasicForm = () => {
  const {
    value: firstname,
    reset: resetFirstname,
    inputChangeHandler: firstnameInputChangeHandler,
    hasError: hasFirstnameError,
    isFirstnameValid,
  } = useInputAssignment("", (value) => value.trim());

  const {
    value: secondname,
    reset: resetSecondname,
    inputChangeHandler: secondnameInputChangeHandler,
    hasError: hasSecondnameError,
    isSecondnameValid,
  } = useInputAssignment("", (value) => value.trim());

  const {
    value: email,
    reset: resetEmail,
    inputChangeHandler: emailInputChangeHandler,
    hasError: hasEmailError,
    isEmailValid,
  } = useInputAssignment("", (value) => value.includes("@"));

  const firstnameInputClasses = hasFirstnameError
    ? "form-control invalid"
    : "form-control";

  const secondnameInputClasses = hasSecondnameError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = hasEmailError
    ? "form-control invalid"
    : "form-control";

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!(isFirstnameValid && isSecondnameValid && isEmailValid)) return;

    resetFirstname();
    resetSecondname();
    resetEmail();
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="control-group">
        <div className={firstnameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={firstname}
            onChange={firstnameInputChangeHandler}
          />
          {hasFirstnameError && (
            <p className="error-text">
              &nbsp; <em>Empty input!</em>
            </p>
          )}
        </div>
        <div className={secondnameInputClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={secondname}
            onChange={secondnameInputChangeHandler}
          />
          {hasSecondnameError && (
            <p className="error-text">
              &nbsp; <em>Empty input!</em>
            </p>
          )}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          value={email}
          onChange={emailInputChangeHandler}
        />
        {hasEmailError && (
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

export default BasicForm;
