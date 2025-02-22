import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { CartItem } from "@/types/cart-item";
import { RootState } from "..";

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItem>) {
      const { payload } = action;
      const existingItem = state.items.find((item) => item.id === payload.id);
      if (existingItem) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === existingItem.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    },
    removeItem(state, action: PayloadAction<CartItem>) {
      const { payload } = action;
      const existingItem = state.items.find((item) => item.id === payload.id);
      if (existingItem) {
        const reducedQuantity = existingItem.quantity - 1;
        if (reducedQuantity === 0) {
          return {
            ...state,
            items: state.items.filter((item) => item.id !== existingItem.id),
          };
        }
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === existingItem.id
              ? { ...item, quantity: reducedQuantity }
              : item
          ),
        };
      }
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export const selectItems = (state: RootState) => state.cart.items;

export default cartSlice.reducer;
