import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  login,
  logout,
  refreshUser,
  register,
  updateAvatar,
  updateSubscription,
} from "./operations";

interface User {
  email: string;
  subscription: string;
  avatarURL: string;
}

export interface UserState {
  user: User;
  token: string;
  isLoggedIn: boolean;
  isRefreshing: boolean;
  error: string;
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
  error: "",
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
      .addCase(login.pending, (state) => {
        state.error = "";
      })
      .addCase(
        login.fulfilled,
        (state, action: PayloadAction<RegisterPayload>) => {
          state.user = action.payload.user;
          state.token = action.payload.token;
          state.isLoggedIn = true;
          state.error = "";
        }
      )
      .addCase(login.rejected, (state, action: any) => {
        state.error = action.payload;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = { email: "", subscription: "", avatarURL: "" };
        state.token = "";
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(
        refreshUser.fulfilled,
        (state, action: PayloadAction<RegisterPayload>) => {
          state.user = action.payload.user;
          state.isLoggedIn = true;
          state.isRefreshing = false;
        }
      )
      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
      })
      .addCase(updateSubscription.fulfilled, (state, action) => {
        state.user.subscription = action.payload.user.subscription;
      })
      .addCase(updateAvatar.fulfilled, (state, action) => {
        state.user.avatarURL = action.payload.avatarURL;
      });
  },
});

export const authReducer = authSlice.reducer;
