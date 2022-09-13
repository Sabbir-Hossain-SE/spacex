/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import { FilterInitialState } from "../../../@interface/slice";

const initialState: FilterInitialState = {
    searchKey: "",
    otherFiltration: []
};

// create slice
const filterSlice = createSlice({
    name: "filtration",
    initialState,
    reducers: {
        setSearchKey: (state, action) => {
            state.searchKey = action.payload;
        },
        setFiltration: (state, action) => {
            state.otherFiltration = action.payload;
        },

        resetAllFiltration: (state) => {
            state.searchKey = "";
            state.otherFiltration = [];
        }
    }
});

export default filterSlice.reducer;
export const { setSearchKey, setFiltration, resetAllFiltration } = filterSlice.actions;
