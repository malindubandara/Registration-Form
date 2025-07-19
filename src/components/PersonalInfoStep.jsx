import React, { useState } from "react";
import InputField from "./InputField";
import Button from "./Button";
import { useRegistration } from "../context/RegistrationContext";
import { validateStepOne } from "../utils/validation";

const PersonalInfoStep = () => {
  const { formData, setFormData, setStep } = useRegistration();
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    const validationErrors = validateStepOne(formData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setStep(2);
    }
  };

  return (
    <div className="w-full max-w-md bg-white p-6 rounded shadow">
      <InputField
        label="Full Name"
        name="fullName"
        type="text"
        value={formData.fullName}
        onChange={handleChange}
        error={errors.fullName}
      />
      <InputField
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
      />
      <InputField
        label="Phone Number"
        name="phone"
        type="tel"
        value={formData.phone}
        onChange={handleChange}
        error={errors.phone}
      />
      <Button text="Next" onClick={handleNext} />
    </div>
  );
};

export default PersonalInfoStep;
