import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  isLoading: false,
  error: null,
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.posts = action.payload.posts;
    },
    addPost: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.posts.push(action.payload.post);
    },
    setPost: (state, action) => {
      const updatedPosts = state.posts.map((post) => {
        if (post._id === action.payload.post._id) return action.payload.post;
        return post;
      });
      state.isLoading = false;
      state.error = null;
      state.posts = updatedPosts;
    },
  },
});

export const { setPosts, setPost, addPost } = postsSlice.actions;
export default postsSlice.reducer;
