import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "../features/launch/filterSlice";
import { launchSlice } from "../features/launch/launchSlice";
import paginationReducer from "../features/launch/paginationSlice";

export const store = configureStore({
    reducer: {
        [launchSlice.reducerPath]: launchSlice.reducer,
        pagination: paginationReducer,
        filter: filterReducer
    },
    middleware: (getDefaultMiddleWares) => getDefaultMiddleWares().concat(launchSlice.middleware)
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
