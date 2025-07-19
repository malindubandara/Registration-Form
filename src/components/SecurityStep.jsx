import React, { useState } from "react";
import InputField from "./InputField";
import Button from "./Button";
import { useRegistration } from "../context/RegistrationContext";
import { validateStepTwo } from "../utils/validation";
import { registerUser } from "../services/api";

const SecurityStep = () => {
  const { formData, setFormData, setStep, setLoading, setSuccess } =
    useRegistration();
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    const validationErrors = validateStepTwo(formData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setLoading(true);
      try {
        await registerUser({
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          password: formData.password,
        });
        setSuccess(true);
      } catch (error) {
        console.error("Registration failed:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="w-full max-w-md bg-white p-6 rounded shadow">
      <InputField
        label="Password"
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        error={errors.password}
      />
      <InputField
        label="Confirm Password"
        name="confirmPassword"
        type="password"
        value={formData.confirmPassword}
        onChange={handleChange}
        error={errors.confirmPassword}
      />
      <div className="flex justify-between mt-4 space-x-2">
        <button
          onClick={() => setStep(1)}
          className="w-full bg-gray-200 text-black py-2 px-4 rounded hover:bg-gray-400 transition duration-200"
        >
          Back
        </button>
        <Button text="Submit" onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default SecurityStep;
