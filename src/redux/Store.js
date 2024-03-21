import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slices/CartSlice";
import CategorySlice from "./slices/CategorySlice";
import SearchSlice from "./slices/SearchSlice";

//kinda database that stores info about states
const Store = configureStore({
  //then we define departments in store in this case 3
  //reducers: take in the previous state and an action and return the newly updated state
  reducer: {
    cart: CartSlice, //each department has manager
    category: CategorySlice,
    search: SearchSlice,
  },
});
//to be used in main.jsx
export default Store;
