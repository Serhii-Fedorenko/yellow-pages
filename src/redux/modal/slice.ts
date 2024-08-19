import { createSlice } from "@reduxjs/toolkit";

interface ModalState {
  isModalOpen: boolean;
}

const initialState: ModalState = {
  isModalOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleModal: (state) => {
      state.isModalOpen = !state.isModalOpen;
    },
  },
});

export const { toggleModal } = modalSlice.actions;

export const modalReducer = modalSlice.reducer;
