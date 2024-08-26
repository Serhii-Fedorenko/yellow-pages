import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface ContactCredentials {
  name: string;
  email: string;
  phone: string;
}

interface EditCredentials {
  contactId: string;
  credentials: ContactCredentials;
}

interface EditFavoriteContact {
  contactId: string;
  currentFavorite: boolean;
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
      return { id: response.data._id };
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const editContact = createAsyncThunk(
  "contacts/editContact",
  async ({ contactId, credentials }: EditCredentials, thunkAPI) => {
    try {
      const response = await axios.put(`/contacts/${contactId}`, credentials);
      return response.data;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateFavoriteContact = createAsyncThunk(
  "contacts/updateFavorite",
  async ({ contactId, currentFavorite }: EditFavoriteContact, thunkAPI) => {
    try {
      const response = await axios.patch(`/contacts/${contactId}/favorite`, {
        favorite: currentFavorite,
      });
      return response.data;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
