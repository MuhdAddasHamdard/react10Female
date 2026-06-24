import React from "react";
import { useForm } from "react-hook-form";

const HookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg"
      >
        <h1 className="text-3xl font-bold text-center text-slate-800 mb-6">
          React Hook Form
        </h1>

        {/* Name Field */}
        <div className="mb-5">
          <input
            type="text"
            placeholder="Enter your name"
            className={`w-full px-4 py-3 border rounded-lg outline-none transition ${
              errors.name
                ? "border-red-500 focus:ring-2 focus:ring-red-300"
                : "border-gray-300 focus:ring-2 focus:ring-blue-500"
            }`}
            {...register("name", {
              required: "Username is required",
              maxLength: {
                value: 15,
                message: "Your name should not exceed 15 characters",
              },
            })}
          />

          {errors.name && (
            <p className="text-red-600 text-sm font-medium mt-2">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Password Field */}
        <div className="mb-6">
          <input
            type="password"
            placeholder="Enter your password"
            className={`w-full px-4 py-3 border rounded-lg outline-none transition ${
              errors.password
                ? "border-red-500 focus:ring-2 focus:ring-red-300"
                : "border-gray-300 focus:ring-2 focus:ring-blue-500"
            }`}
            {...register("password", {
              required: "Password is required",
              maxLength: {
                value: 20,
                message: "Your password should not exceed 20 characters",
              },
            })}
          />

          {errors.password && (
            <p className="text-red-600 text-sm font-medium mt-2">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <input
          type="submit"
          value="Send"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold cursor-pointer hover:bg-blue-700 active:scale-95 transition duration-200"
        />
      </form>
    </div>
  );
};

export default HookForm;
