import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "./Slices/authSlice";
import { apiSlice } from "./Slices/apiSlice";

export const store = configureStore({
  reducer: {
    auth: authSliceReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),

  devTools: true,
});
