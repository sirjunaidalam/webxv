import React from "react";
import { LoginForm } from "./loginForm";

const Community = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-6">
      <div className="flex w-full max-w-6xl items-center md:flex-row flex-col">
        {/* Image Section */}
        <div className="md:w-2/3 hidden md:block">
          <img
            src="../public/images/Users.png"
            alt="Users illustration"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Form Section */}
        <div className="md:w-1/3 bg-[#0f1117] px-10 py-20 rounded-3xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-center text-white">
            Login
          </h2>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Community;
