import { createSlice } from "@reduxjs/toolkit";

const initialUiState = { cartIsVisible: false };

export const uiSlice = createSlice({
  name: "ui",
  initialState: initialUiState,
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
  },
});

export const uiActions = uiSlice.actions;
