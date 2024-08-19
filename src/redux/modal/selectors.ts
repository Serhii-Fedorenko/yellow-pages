import { RootState } from "../store";

export const selectIsModalOpen = (state: RootState) => state.modal.isModalOpen;

export const selectModalContent = (state: RootState) => state.modal.modalContent;