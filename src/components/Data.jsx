import React, { useEffect, useState } from "react";
import axios from "axios";
import UseData from "./customHooks/UseState";

const Data = () => {
  const { users, error, loading } = UseData();

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-8">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-center text-slate-800 mb-8">
          Users List
        </h1>

        {loading ? (
          <div className="text-center text-lg font-medium text-blue-600">
            Loading...
          </div>
        ) : error ? (
          <div className="bg-red-100 border border-red-300 text-red-700 rounded-lg p-4 text-center">
            <p className="font-semibold">❌ Error</p>
            <p>{error.message}</p>
          </div>
        ) : (
          <ul className="space-y-4">
            {users.map((user) => (
              <li
                key={user.id}
                className="flex justify-between items-center bg-slate-50 hover:bg-blue-50 border border-slate-200 rounded-xl p-5 transition duration-300"
              >
                <div>
                  <h2 className="text-lg font-semibold text-slate-800">
                    {user.name}
                  </h2>
                  <p className="text-sm text-slate-500">{user.email}</p>
                </div>

                <span className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium">
                  {user.username}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Data;
