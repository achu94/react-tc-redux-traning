import { configureStore } from "@reduxjs/toolkit";
import PostsSlice from "./features/PostsSlice";

export const store = configureStore({
  reducer: PostsSlice,
});

export type RootStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
