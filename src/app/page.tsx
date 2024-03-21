/** @jsxImportSource @emotion/react */
"use client";
import react, { useState } from "react";

import SignInPage from "./SignInPage";
import MainPage from "./MainPage";

import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { setSignOut } from "@features/userSlice";

import { supabase } from "@libs/supabase";
import { refreshSession } from "@libs/refreshSession";

export default function Home() {
  const isSignedIn =
    useAppSelector((state) => state.userReducer.is_signed_in_resume_builder) ===
    "true";
  const dispatch = useAppDispatch();

  const [inputData, setInputData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  react.useEffect(() => {
    refreshSession(supabase, dispatch, setSignOut);
  }, []);

  return (
    <>
      {isSignedIn && <MainPage />}
      {!isSignedIn && (
        <SignInPage inputData={inputData} setInputData={setInputData} />
      )}
    </>
  );
}
