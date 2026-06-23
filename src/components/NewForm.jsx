import React, { useRef } from "react";

const NewForm = () => {
  const name = useRef(null);
  // const =useRef(null);

  const handleForm = (obj) => {
    obj.preventDefault();
    console.log(name.current.value);
  };

  return (
    <div>
      <form onSubmit={handleForm}>
        <input
          ref={name}
          type="text"
          name=""
          id=""
          placeholder="enter your name"
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default NewForm;
