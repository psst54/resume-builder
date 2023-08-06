import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  resume_builder_id: string;
  is_signed_in_resume_builder: string;
}

const initialState: UserState = {
  resume_builder_id: "",
  is_signed_in_resume_builder: "false",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setSignIn: (state, action: PayloadAction<string>) => {
      state.resume_builder_id = action.payload;
      state.is_signed_in_resume_builder = "true";
    },
    setSignOut: (state) => {
      (state.resume_builder_id = ""),
        (state.is_signed_in_resume_builder = "false");
    },
  },
});

export const { setSignIn, setSignOut } = userSlice.actions;

export default userSlice.reducer;
