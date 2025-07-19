import React from "react";

const SuccessMessage = () => {
  return (
    <div className="bg-emerald-100 p-6 rounded shadow text-center">
      <h2 className="text-2xl text-emerald-500 font-bold mb-2">
        Registration Successful!
      </h2>
      <p>
        Thank you for registering. You may now proceed to log in or explore
        further.
      </p>
    </div>
  );
};

export default SuccessMessage;
