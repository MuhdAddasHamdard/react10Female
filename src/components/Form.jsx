import React, { useRef } from "react";

const Form = () => {
  const userName = useRef(null);
  const userPassword = useRef(null);

  const formData = {
    name: "",
    password: 0,
  };
  console.log(formData);
  const formInput = (event) => {
    event.preventDefault();

    // setting the properties of the fromData object
    formData.name = userName.current.value;
    formData.password = userPassword.current.value;
    console.log(formData);
  };

  return (
    <>
      <div>Form</div>

      <form>
        <div className="flex gap-4">
          <label htmlFor=""> name: </label>
          <input type="text" ref={userName} placeholder="enter your name" />
        </div>

        <div className="flex gap-4">
          <label htmlFor=""> password: </label>
          <input
            type="password"
            ref={userPassword}
            placeholder="enter your password"
          />
        </div>

        <div>
          <button type="submit" onClick={formInput}>
            submit
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
