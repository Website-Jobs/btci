import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface userState {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

const initialState: userState = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setFn: (state, action: PayloadAction<string>) => {
      state.firstname = action.payload;
    },
    setLn: (state, action: PayloadAction<string>) => {
      state.lastname = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPw: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    updateUser: (state, action: PayloadAction<userState>) => {
      state = action.payload;
    },
  },
});

export const { setFn,setLn,setEmail,setPw } = userSlice.actions;
export default userSlice.reducer;
