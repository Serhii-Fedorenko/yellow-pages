import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchContacts } from "./operations";

interface Contact {
  name: string;
  email: string;
  phone: string;
  favorite: boolean;
}

interface ContactsState {
  items: Contact[];
  isLoading: boolean;
  error: string | null;
}

const initialState: ContactsState = {
  items: [],
  isLoading: false,
  error: "",
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        fetchContacts.fulfilled,
        (state, action: PayloadAction<Contact[]>) => {
          state.isLoading = false;
          state.error = "";
          state.items = action.payload
        }
      )
      .addCase(
        fetchContacts.rejected,
        (state, action: any) => {
          state.isLoading = false;
          state.error = action.payload || "Something went wrong";
        }
      );
  },
});

export const contactsReducer = contactsSlice.reducer;
