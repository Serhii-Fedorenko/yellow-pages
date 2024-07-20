import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface RegisterCredentials {
    email: string;
    password: string
}

axios.defaults.baseURL = "https://node-contacts-rest-api.onrender.com/api";

const setAuthHeader = (token: string) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const register = createAsyncThunk(
  "auth/register",
  async (credentials: RegisterCredentials, thunkAPI) => {
    try {
      const response = await axios.post("/users/register", credentials);
      console.log(response.data);
      return response.data;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
