import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { login, logout, register } from "./operations";

interface User {
  email: string;
  subscription: string;
  avatarURL: string;
}

interface UserState {
  user: User;
  token: string;
  isLoggedIn: boolean;
  isRefreshing: boolean;
}

interface RegisterPayload {
  user: User;
  token: string;
}

const initialState: UserState = {
  user: { email: "", subscription: "", avatarURL: "" },
  token: "",
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        register.fulfilled,
        (state, action: PayloadAction<RegisterPayload>) => {
          console.log(action.payload);
          state.user = action.payload.user;
        }
      )
      .addCase(
        login.fulfilled,
        (state, action: PayloadAction<RegisterPayload>) => {
          state.user = action.payload.user;
          state.token = action.payload.token;
          state.isLoggedIn = true;
        }
      )
      .addCase(logout.fulfilled, (state) => {
        state.user = { email: "", subscription: "", avatarURL: "" };
        state.token = "";
        state.isLoggedIn = false;
      });
  },
});

export const authReducer = authSlice.reducer;
