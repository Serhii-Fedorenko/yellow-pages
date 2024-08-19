import { createSlice } from "@reduxjs/toolkit";

interface ModalState {
  isModalOpen: boolean;
  modalContent: string;
}

const initialState: ModalState = {
  isModalOpen: false,
  modalContent: "",
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleModal: (state) => {
      state.isModalOpen = !state.isModalOpen;
    },
    setModalContent: (state, action) => {
      state.modalContent = action.payload;
    },
  },
});

export const { toggleModal, setModalContent } = modalSlice.actions;

export const modalReducer = modalSlice.reducer;
