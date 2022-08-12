import { configureStore } from "@reduxjs/toolkit";
import { api } from "../services/cryptoApi";

export default configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },
});
