import { signin } from "../actions";
import { signInForm } from "./fieldData";
import Form from "./Form";

export default function SignInForm() {
  return <Form data={signInForm} onSubmit={signin} buttonText="로그인" />;
}
