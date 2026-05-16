import { client } from "@/utils/helper";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  originalTotal: 0,
  finalTotal: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      console.log(payload)

      const exisItem = state.items.find(
        (item) => item._id === payload._id
      );
    
      if (exisItem) {
    
        exisItem.qty++;
    
      } else {
    
        state.items.push({
          ...payload,
          qty: 1,
        });
      }
    
      state.originalTotal = state.items.reduce(
        (acc, item) =>
          acc + item.original_price * item.qty,
        0
      );
    
      state.finalTotal = state.items.reduce(
        (acc, item) =>
          acc + item.final_price * item.qty,
        0
      );
    
      localStorage.setItem(
        "cart",
        JSON.stringify(state)
      );
    },

    emptyCart: (state) => {
      state.originalTotal = 0;
      state.finalTotal = 0;
      state.items = [];
      localStorage.removeItem("cart");
    },

    qtyChanges:  (state, { payload }) => {

      const cartItem = state.items.find(
        (item) => item._id === payload._id
      );
    
  
      if (!cartItem) return;
      if (payload.flag === "inc") {
    
        cartItem.qty++;
    
      } else {
    
        if (cartItem.qty > 1) {
    
          cartItem.qty--;
    
        } else {
    
          state.items = state.items.filter(
            (item) => item._id !== payload._id
          );
        }
      }
    
      state.originalTotal = state.items.reduce(
        (acc, item) =>
          acc + item.original_price * item.qty,
        0
      );
    
      state.finalTotal = state.items.reduce(
        (acc, item) =>
          acc + item.final_price * item.qty,
        0
      );
    
      localStorage.setItem(
        "cart",
        JSON.stringify(state)
      );
    },

    lsToCart: (state) => {
      const cart = JSON.parse(localStorage.getItem("cart"));
      if (cart) {
        ((state.items = cart.items),
          (state.originalTotal = cart.originalTotal));
        state.finalTotal = cart.finalTotal;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, emptyCart, qtyChanges, lsToCart } = cartSlice.actions;

export default cartSlice.reducer;
