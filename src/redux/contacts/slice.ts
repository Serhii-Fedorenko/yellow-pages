import { createSlice } from "@reduxjs/toolkit";

interface Contact {
  name: string;
  email: string;
  phone: string;
  favorite: boolean;
}

const initialState: Contact = {
  name: "",
  email: "",
  phone: "",
  favorite: false,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {},
});

export const contactsReducer = contactsSlice.reducer;
