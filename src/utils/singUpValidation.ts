export const checkEmail = ({ email }: { email: string }) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
};

export const MIN_PASSWORD_LENGTH = 6;

export const checkPasswordLength = (password: string) => {
  return password.length >= MIN_PASSWORD_LENGTH;
};

export const checkConfirmPassword = (
  password: string,
  confirmPassword: string
) => {
  return password === confirmPassword;
};
