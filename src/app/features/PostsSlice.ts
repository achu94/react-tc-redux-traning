import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { setData, removeData } from "../utils/localStorage";
import { getUserId } from "../utils/user";

export type PostsState = {
  posts: {
    id: number;
    val: string;
    userId: string;
  }[];
};

type PostsStateObj = {
  id: number;
  val: string;
  userId: string;
};

const initialState: PostsState = {
  posts: [],
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPostX: (state, action: PayloadAction<PostsStateObj>) => {
      state.posts = [...state.posts, action.payload];
      setData(action.payload, "posts");
    },
    setInitialData: (state, action: PayloadAction<PostsStateObj[]>) => {
      if (!state.posts.length) {
        state.posts = [...action.payload];
      }
    },
    removePost: (state, action: PayloadAction<number>) => {
      removeData("posts", action.payload);

      const newPosts = state.posts.filter((post) => post.id !== action.payload);
      state.posts = newPosts;
    },
  },
});

export const addPost = (newPost: PostsStateObj) => async (dispatch: Function) => {
  const userId = await getUserId();
  
  setTimeout( () => {
    dispatch(addPostX({...newPost, userId: userId}))
  }, 1000)
};

export const { addPostX, setInitialData, removePost } = postsSlice.actions;

export default postsSlice.reducer;
