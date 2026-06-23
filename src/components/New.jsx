import React, { useState } from "react";

const New = () => {
  const [message, setMessage] = useState("hello reactjs");
  const updateMessage = () => {
    setMessage("hello react from useState");
  };

  //   useState for the counter
  const [counter, setCounter] = useState(0);

  // handling the minus state

  const [error, setError] = useState(null);

  //   plus function
  const plus = () => {
    setCounter(counter + 1);
    setError(null);
  };

  //   creating minus function for the counter
  const minus = () => {
    if (counter < 1) {
      setError("the counter should be greater than 0");
    } else {
      setCounter(counter - 1);
    }
  };
  return (
    <div>
      <h1>using useState</h1>
      <h1>{message}</h1>

      <button onClick={updateMessage}>change text</button>

      {/* Counter */}
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-xl shadow-lg text-center w-80">
          <h1 className="text-6xl font-bold text-blue-600 mb-6">{counter}</h1>
          {error && <h2 className="text-red-800 font-semibold"> {error}</h2>}
          <div className="flex justify-center gap-4">
            <button
              onClick={minus}
              className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300"
            >
              Minus
            </button>

            <button
              onClick={plus}
              className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300"
            >
              Plus
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
