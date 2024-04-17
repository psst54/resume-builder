export const checkEmail = ({ email }: { email: string }) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
};

export const MIN_PASSWORD_LENGTH = 6;

export function checkPasswordLength({ password }: { password?: string }) {
  if (!password) {
    return false;
  }

  return password.length >= MIN_PASSWORD_LENGTH;
}

export function checkConfirmPassword({
  password,
  confirmPassword,
}: {
  password?: string;
  confirmPassword?: string;
}) {
  if (!password || !confirmPassword) {
    return false;
  }

  return password === confirmPassword;
}
