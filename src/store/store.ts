import apiSlice from "@/services/baseApi";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import bookmarkReducer from "@/services/slices/bookmarkSlice"
export const store = () => {
  return configureStore({
    reducer: {
      [apiSlice.reducerPath]: apiSlice.reducer,
      bookmark:bookmarkReducer
    },
    middleware: (gdm) => gdm().concat(apiSlice.middleware),
  });
};

export type AppStore = ReturnType<typeof store>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
setupListeners(store().dispatch);
