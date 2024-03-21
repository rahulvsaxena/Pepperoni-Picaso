//what are we trying to do?
//set the value of search to whatever we have typed in search in search bar

//state: means current state of search
//action.payload: new thing 

import { createSlice } from "@reduxjs/toolkit";

const SearchSlice = createSlice({
  name: "search", //you can name it anything, it just for readiability
  initialState: {
    search: "",
  },
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { setSearch } = SearchSlice.actions;
export default SearchSlice.reducer;
