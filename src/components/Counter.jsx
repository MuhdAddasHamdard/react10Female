import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleMinus = () => {
    setCounter(counter - 1);
  };

  const handlePlus = () => {
    setCounter(counter + 1);
  };
  return (
    <div>
      <h1>counter</h1>
      <hr />
      <h2 className="bg-red-200">{counter}</h2>

      <div className="flex justify-center gap-4">
        <button onClick={handlePlus}>Plus</button>
        <button onClick={handleMinus}>Minus</button>
      </div>
    </div>
  );
};

export default Counter;
