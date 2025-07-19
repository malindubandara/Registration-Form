export const validateStepOne = ({ fullName, email }) => {
  const errors = {};
  if (!fullName) errors.fullName = 'Full name is required';
  if (!email) errors.email = 'Email is required';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'Email is not valid';
  return errors;
};

export const validateStepTwo = ({ password, confirmPassword }) => {
  const errors = {};
  if (!password || password.length < 6) errors.password = 'Password must be at least 6 characters';
  if (confirmPassword !== password) errors.confirmPassword = 'Passwords must match';
  return errors;
};