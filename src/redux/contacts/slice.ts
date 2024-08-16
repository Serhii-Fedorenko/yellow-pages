import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  addContact,
  deleteContact,
  editContact,
  fetchContacts,
  updateFavoriteContact,
} from "./operations";

interface Contact {
  name: string;
  email: string;
  phone: string;
  favorite?: boolean;
  _id: string;
}

type FavoriteContact = Pick<Contact, "favorite" | "_id">;

interface ContactsState {
  items: Contact[];
  isLoading: boolean;
  error: string | null;
}

interface DeleteContactPayload {
  id: string;
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
          state.items = action.payload;
        }
      )
      .addCase(fetchContacts.rejected, (state, action: any) => {
        state.isLoading = false;
        state.error = action.payload || "Something went wrong";
      })
      .addCase(addContact.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        addContact.fulfilled,
        (state, action: PayloadAction<Contact>) => {
          state.isLoading = false;
          state.error = "";
          state.items.push(action.payload);
        }
      )
      .addCase(addContact.rejected, (state, action: any) => {
        state.isLoading = false;
        state.error = action.payload || "Something went wrong";
      })
      .addCase(deleteContact.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        deleteContact.fulfilled,
        (state, action: PayloadAction<DeleteContactPayload>) => {
          state.isLoading = false;
          state.error = "";
          state.items = state.items.filter(
            (item) => item._id !== action.payload.id
          );
        }
      )
      .addCase(deleteContact.rejected, (state, action: any) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(editContact.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        editContact.fulfilled,
        (state, action: PayloadAction<Contact>) => {
          state.isLoading = false;
          state.error = "";
          const index = state.items.findIndex(
            (item) => item._id === action.payload._id
          );
          state.items.splice(index, 1, action.payload);
        }
      )
      .addCase(editContact.rejected, (state, action: any) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(updateFavoriteContact.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        updateFavoriteContact.fulfilled,
        (state, action: PayloadAction<FavoriteContact>) => {
          state.isLoading = false;
          state.error = "";
          const contact = state.items.find(
            (item) => item._id === action.payload._id
          );
          if (contact) {
            contact.favorite = action.payload.favorite
          }
        }
      )
      .addCase(updateFavoriteContact.rejected, (state, action: any) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
