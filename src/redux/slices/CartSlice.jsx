//how does state.cart.find works?
//we call each element as item and for each item in arr we check this condition
//if the condition meets, it stops

//how does map work?
//it iterate over every items and automatically stores it in assigned arr

//whats ...item?
//spread operator, makes a new copy of object(in this case arr)

//why not directly update the value of qty?
//its a redux principle not to modify the element directly
//so make a copy and then do

//difference between map and find?
//map will traverse whole array, find may/may not

//why export actions & reducer seprately
//so the actions can be accessed from anywhere
//reducer will be used in Store.js

import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cart.find((item) => item.id === action.payload.id);
      if (existingItem) {
        state.cart = state.cart.map((item) =>
          item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      else state.cart.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
    incrementQty: (state, action) => {
      state.cart = state.cart.map((item) =>
        item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
      );
    },
    decrementQty: (state, action) => {
      state.cart = state.cart.map((item) =>
        item.id === action.payload.id ? { ...item, qty: item.qty - 1 } : item
      );
    },
  },
});

export const { addToCart, removeFromCart, incrementQty, decrementQty }=CartSlice.actions;
export default CartSlice.reducer;
