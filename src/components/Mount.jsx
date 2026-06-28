import React, { useEffect, useState } from "react";

const Mount = () => {
  const [color, setColor] = useState("black");
  const [count, setCount] = useState(0);

  // Change color after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setColor("red");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Update document title
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
        <h1 className="mb-6 text-center text-3xl font-bold text-gray-800">
          useEffect Demo
        </h1>

        <div className="space-y-4">
          <div className="rounded-lg border bg-gray-50 p-4">
            <p className="text-lg font-medium text-gray-700">
              My favorite color is{" "}
              <span
                className={`font-bold ${
                  color === "red" ? "text-red-600" : "text-black"
                }`}
              >
                {color}
              </span>
            </p>
          </div>

          <div className="rounded-lg border bg-gray-50 p-4">
            <p className="text-lg font-medium text-gray-700">
              You clicked{" "}
              <span className="font-bold text-blue-600">{count}</span>{" "}
              {count === 1 ? "time" : "times"}
            </p>
          </div>

          <div className="flex gap-4 pt-2">
            <button
              onClick={() => setCount((prev) => prev + 1)}
              className="flex-1 rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition duration-300 hover:bg-blue-700 active:scale-95"
            >
              Click Me
            </button>

            <button
              onClick={() => setCount(0)}
              className="flex-1 rounded-lg bg-red-600 px-5 py-3 font-semibold text-white transition duration-300 hover:bg-red-700 active:scale-95"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mount;
