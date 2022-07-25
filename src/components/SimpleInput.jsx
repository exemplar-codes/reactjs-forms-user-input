import { useRef } from "react";

const SimpleInput = () => {
  const nameInputRef = useRef();

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (nameInputRef.current.value.trim().length === 0) {
      // reject empty input only
      return;
    }

    console.log(nameInputRef.current.value);
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
