import { configureStore  } from "@reduxjs/toolkit";
import userSlice from "./user";
import { productSlice, relatedProductSlice } from "./productSlice";
import { userApi } from "../services/api";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { cartReducer } from "./cart";

// Create a persistConfig object
const persistConfig = {
  key: 'root',
  storage,
  // Add any specific configuration options here
};

const rootReducer = combineReducers({
  user: userSlice.reducer,
  cart: cartReducer,
  product: productSlice.reducer,
  relatedProduct: relatedProductSlice.reducer,
  [userApi.reducerPath]: userApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }).concat(userApi.middleware),
});

// Create a persistor using the persistStore function
export const persistor = persistStore(store);

export default store;
