import { RootState } from "../store";
export const selectIsLoading = (state: RootState) => state.contacts.isLoading;
