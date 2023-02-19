import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { setData, removeData } from "../utils/localStorage";

export type PostsState = {
  posts: {
    id: number;
    val: string;
  }[];
};

type PostsStateObj = {
  id: number;
  val: string;
};

const initialState: PostsState = {
  posts: [],
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<PostsStateObj>) => {
      state.posts.push(action.payload);
      setData(action.payload, "posts");
    },
    setInitialData: (state, action: PayloadAction<PostsStateObj[]>) => {
      if (!state.posts.length) {
        state.posts = [...action.payload];
      }
    },
    removePost: (state, action: PayloadAction<number>) => {
      removeData("posts", action.payload);
      
      const newPosts = state.posts.filter(post => post.id !== action.payload);
      state.posts = newPosts;
    },
  },
});

export const { addPost, setInitialData, removePost } = postsSlice.actions;

export default postsSlice.reducer;
