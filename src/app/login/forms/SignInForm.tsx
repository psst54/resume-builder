import { signin } from "../actions";
import { signInFieldList } from "./fieldData";
import Form from "./Form";

export default function SignInForm() {
  return <Form data={signInFieldList} onSubmit={signin} buttonText="로그인" />;
}
