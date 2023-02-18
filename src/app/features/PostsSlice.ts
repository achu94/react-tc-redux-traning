import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export type PostsState = {
  posts: {
      id: number;
      val: string;
    }[]
}

type PostsStateObj = {
    id: number;
    val: string;
}

const initialState: PostsState = {
  posts: []
}

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<PostsStateObj>) => {
      state.posts.push(action.payload);
    }
  }
})

export const { addPost } = postsSlice.actions;

export default postsSlice.reducer;