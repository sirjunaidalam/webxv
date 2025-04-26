import React from "react";
import { RegistrationForm } from "./registrationForm";

const Registration = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="flex items-center flex-row">
        {/* Image Section */}
        <div className="md:w-6/10 hidden md:block">
          <img
            src="../public/images/Registration.png"
            alt="Users illustration"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Form Section */}
        <div className="md:w-4/10 w-100 bg-[#0f1117] px-10 py-10 rounded-3xl">
          <h2 className="text-2xl font-semibold mb-6 text-center text-white">
            Registration
          </h2>
          <RegistrationForm />
        </div>
      </div>
    </div>
  );
};

export default Registration;
