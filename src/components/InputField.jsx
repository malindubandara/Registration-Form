// components/InputField.jsx
import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

const InputField = ({ label, name, value, onChange, error, type }) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPasswordField = type === "password";

  return (
    <div className="mb-4 w-full relative">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        type={isPasswordField && showPassword ? "text" : type}
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full border rounded px-3 py-2 focus:outline-none ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      />
      {isPasswordField && (
        <span
          className="absolute right-3 top-9 cursor-pointer text-sm text-gray-600"
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? <FiEyeOff /> : <FiEye />}
        </span>
      )}
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

export default InputField;
