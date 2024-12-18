import { createSlice } from "@reduxjs/toolkit";

const initialCartState = { items: [], totalQuantity: 0 };

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          quantity: 1,
          price: newItem.price,
          totalPrice: newItem.price,
          title: newItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      }
    },
    removeItem(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      if (existingItem.quantity > 1) {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      } else if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      }
    },
  },
});

export const cartActions = cartSlice.actions;
