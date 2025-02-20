import { configureStore } from "@reduxjs/toolkit";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import dogBreedReducer from "./features/dogBreed/dogBreedSlice";
import paginationsReducer from "./features/pagination/paginationSlice";
import globalLoadingReducer from "./features/loading/globalLoadingSlice";

const persistConfig = {
  key: "root",
  storage,
};

const persistedPaginationsReducer = persistReducer(persistConfig, paginationsReducer);

const store = configureStore({
  reducer: {
    dogBreed: dogBreedReducer,
    pagination: persistedPaginationsReducer,
    loading: globalLoadingReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store); // Create the persistor

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
