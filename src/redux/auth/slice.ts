import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { register } from "./operations";

interface User {
  password: string;
  email: string;
}

interface UserState {
  user: User;
  token: string;
  isLoggedIn: boolean;
  isRefreshing: boolean;
}

interface RegisterPayload {
    user: User;
    token: string
}

const initialState: UserState = {
  user: { password: "", email: "" },
  token: "",
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(register.fulfilled, (state, action: PayloadAction<RegisterPayload>) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
    })
  },
});

export const authReducer = authSlice.reducer
