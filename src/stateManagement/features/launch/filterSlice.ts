/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const initialState: { searchKey: string } = {
    searchKey: ""
};

// create slice
const filterSlice = createSlice({
    name: "filtration",
    initialState,
    reducers: {
        setSearchKey: (state, action) => {
            state.searchKey = action.payload;
        }
    }
});

export default filterSlice.reducer;
export const { setSearchKey } = filterSlice.actions;
