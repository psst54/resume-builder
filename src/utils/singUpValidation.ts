export const checkEmail = ({ email }: { email: string }) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
};

export const checkPasswordLength = ({ password }: { password: string }) => {
  return password !== "" && password.length >= 6;
};

export const checkConfirmPassword = ({
  password,
  confirmPassword,
}: {
  password: string;
  confirmPassword: string;
}) => {
  return (
    password !== "" && confirmPassword !== "" && password === confirmPassword
  );
};
