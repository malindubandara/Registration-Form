import React from "react";
import PersonalInfoStep from "../components/PersonalInfoStep";
import SecurityStep from "../components/SecurityStep";
import StepIndicator from "../components/StepIndicator";
import SuccessMessage from "../components/SuccessMessage";
import { useRegistration } from "../context/RegistrationContext";
import { AnimatePresence, motion } from "framer-motion";

const RegistrationForm = () => {
  const { step, success, setSuccess, setStep, setFormData } = useRegistration();

  const stepComponent = () => {
    if (step === 1) return <PersonalInfoStep key="step1" />;
    return <SecurityStep key="step2" />;
  };

  const handleClosePopup = () => {
    setSuccess(false);
    setStep(1);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="max-w-md w-full bg-gray-50 p-8 rounded-lg shadow-md">
      <div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Create your account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Please fill in the information below
        </p>
      </div>
      {!success && <StepIndicator step={step} />}
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
          className="w-full"
        >
          {stepComponent()}
        </motion.div>
      </AnimatePresence>
      {/* Success Popup */}
      {success && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-8 rounded-lg shadow-lg relative"
          >
            <button
              onClick={handleClosePopup}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl font-bold"
            >
              &times;
            </button>
            <SuccessMessage />
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default RegistrationForm;
