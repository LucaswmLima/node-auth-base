// Email Validation
export const validateEmail = (email: string) => {
  const regex = /^[^s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

// Password Validation
export const validatePassword = (password: string) => {
  //Minimum eight characters, at least one letter and one number
  const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  return regex.test(password);
};

