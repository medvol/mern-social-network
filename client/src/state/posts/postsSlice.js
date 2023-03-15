import { createSlice } from "@reduxjs/toolkit";
import { getAllPosts, getUserPosts, addPost } from "./operations";

const initialState = {
  posts: [],
  isLoading: false,
  error: null,
};

const handlePending = (state) => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
   
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

  extraReducers: {
    [getAllPosts.pending]: handlePending,
    [getUserPosts.pending]: handlePending,
    [addPost.pending]: handlePending,

    [getAllPosts.rejected]: handleRejected,
    [getUserPosts.pending]: handleRejected,
    [addPost.pending]: handleRejected,

    [getAllPosts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.posts = action.payload.posts;
    },
    [getUserPosts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.posts = action.payload;
    },
    [addPost.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.posts.push(action.payload);
    },
  },
});

export const { setPost } = postsSlice.actions;
export default postsSlice.reducer;
