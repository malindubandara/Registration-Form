import React from "react";

const StepIndicator = ({ step }) => {
  return (
    <div className="flex items-center justify-center space-x-4 m-6">
      <div
        className={`w-8 h-8 rounded-full flex items-center justify-center ${
          step >= 1 ? "bg-emerald-500 text-white" : "bg-gray-300"
        }`}
      >
        1
      </div>
      <div className="w-10 h-1 bg-gray-300" />
      <div
        className={`w-8 h-8 rounded-full flex items-center justify-center ${
          step === 2 ? "bg-emerald-500 text-white" : "bg-gray-300"
        }`}
      >
        2
      </div>
    </div>
  );
};

export default StepIndicator;
