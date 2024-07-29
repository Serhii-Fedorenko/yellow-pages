import { createSlice } from "@reduxjs/toolkit";

interface Contact {
  name: string;
  email: string;
  phone: string;
  favorite: boolean;
}

interface Contacts {
    items: Contact[]
}

const initialState: Contacts = {
  items: []
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {},
});

export const contactsReducer = contactsSlice.reducer;
