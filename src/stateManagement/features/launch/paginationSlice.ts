/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import { PaginationState } from "../../../@interface/Interface";

const initialState: PaginationState = {
    currentPage: 1,
    pageLimit: 12,
    totalItem: 0
};

// create slice
const paginationSlice = createSlice({
    name: "pagination",
    initialState,
    reducers: {
        setPagination: (state, action) => {
            state.currentPage = action.payload.page;
            state.pageLimit = action.payload.limit;
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
export const { setTotalItem, resetPaginationParams, setPagination } = paginationSlice.actions;
