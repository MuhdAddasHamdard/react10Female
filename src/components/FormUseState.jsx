import React, { useState } from "react";

const FormUseState = () => {
  const [form, setForm] = useState({
    name: "",
    pass: "",
  });

  const formValues = (event) => {
    event.preventDefault();
    console.log(form);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
      <form
        onSubmit={formValues}
        className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg"
      >
        <h2 className="text-3xl font-bold text-center text-slate-800 mb-6">
          Login Form
        </h2>

        <div className="mb-4">
          <label className="block mb-2 text-slate-700 font-medium">Name</label>
          <input
            onChange={(obj) => {
              setForm({ ...form, name: obj.target.value });
            }}
            value={form.name}
            type="text"
            placeholder="Enter your name"
            className="w-full px-4 py-3 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-slate-700 font-medium">
            Password
          </label>
          <input
            onChange={(obj) => {
              setForm({ ...form, pass: obj.target.value });
            }}
            value={form.pass}
            type="password"
            placeholder="Enter your password"
            className="w-full px-4 py-3 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 active:scale-95 transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormUseState;
