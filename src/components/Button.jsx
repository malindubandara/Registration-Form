import React from "react";

const Button = ({ text, onClick }) => (
  <button
    onClick={onClick}
    className="w-full bg-emerald-500 text-white py-2 px-4 rounded hover:bg-emerald-700 transition duration-200"
  >
    {text}
  </button>
);

export default Button;
