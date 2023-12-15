import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user";
import { userApi } from "../services/api";

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
});

export default store;