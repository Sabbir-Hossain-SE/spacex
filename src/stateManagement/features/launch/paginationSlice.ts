/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import { PaginationState } from "../../../@interface/Interface";

const initialState: PaginationState = {
    currentPage: 1,
    pageLimit: 10,
    totalItem: 0
};

// create slice
const paginationSlice = createSlice({
    name: "filtration",
    initialState,
    reducers: {
        pageSelected: (state, action) => {
            state.currentPage = action.payload;
        },

        setPageLimit: (state, action) => {
            state.pageLimit = action.payload;
        },

        setTotalItem: (state, action) => {
            state.totalItem = action.payload;
        },

        resetPaginationParams: (state, action) => {
            state.currentPage = 1;
            state.pageLimit = 10;
            state.totalItem = 0;
        }
    }
});

export default paginationSlice.reducer;
export const { setTotalItem, resetPaginationParams, pageSelected, setPageLimit } =
    paginationSlice.actions;
