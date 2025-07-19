import React from "react";
import RegistrationForm from "./pages/RegistrationForm";
import { RegistrationProvider } from "./context/RegistrationContext";

function App() {
  return (
    <RegistrationProvider>
      <div className="min-h-screen bg-gradient-to-b from-neutral-900 to-neutral-700 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <RegistrationForm />
      </div>
    </RegistrationProvider>
  );
}

export default App;
