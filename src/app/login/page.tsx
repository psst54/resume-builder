import { login } from "./actions";

export default function Page() {
  return (
    <form>
      <input type="email" name="email" placeholder="Email" required />
      <input type="password" name="password" placeholder="Password" required />
      <button formAction={login}>Log in</button>
    </form>
  );
}
