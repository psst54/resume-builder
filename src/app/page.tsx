import SignInPage from "./SignInPage";
import MainPage from "./MainPage";

export interface InputData {
  email: string;
  password: string;
  confirmPassword: string;
}

export default function Home() {
  const isSignedIn = "true";
  // const isSignedIn =
  //   useAppSelector((state) => state.userReducer.is_signed_in_resume_builder) ===
  //   "true";
  // const dispatch = useAppDispatch();

  // react.useEffect(() => {
  //   refreshSession(supabase, dispatch, setSignOut);
  // }, []);

  return (
    <>
      {isSignedIn && <MainPage />}
      {!isSignedIn && <SignInPage />}
    </>
  );
}
