import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface ContactCredentials {
  name: string;
  email: string;
  phone: string;
}

export const fetchContacts = createAsyncThunk(
  "contacts/getAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts");
      return response.data;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (credentials: ContactCredentials, thunkAPI) => {
    try {
      const response = await axios.post("/contacts", credentials);
      return response.data;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId: string, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return {id: contactId}
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
