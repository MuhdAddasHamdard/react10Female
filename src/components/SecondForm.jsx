import React, { useState } from "react";
import { useForm } from "react-hook-form";
const SecondForm = () => {
  const { register } = useForm();

  const [inputValue, setInputValue] = useState({
    name: "",
    password: "",
  });

  const show = (obj) => {
    obj.preventDefault();
    console.log(inputValue);
  };
  return (
    <>
      <h1>SecondForm</h1>
      <div>
        <form className="gap-x-5 flex flex-col md:flex-row" action="">
          <input
            className=""
            type="text"
            placeholder="your name"
            onChange={(event) => {
              setInputValue({ ...inputValue, name: event.target.value });
            }}
          />
          <input
            type="password"
            placeholder="your password"
            onChange={(event) => {
              setInputValue({ ...inputValue, password: event.target.value });
            }}
          />

          <button onClick={show}>submit</button>
        </form>
      </div>
    </>
  );
};

export default SecondForm;
