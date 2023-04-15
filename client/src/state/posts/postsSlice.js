import { createSlice } from "@reduxjs/toolkit";
import {
  getAllPosts,
  getUserPosts,
  addPost,
  likePost,
  addCommentPost,
} from "./operations";

const initialState = {
  items: [],
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
    setPosts: (state, action) => {
      state.items = action.payload;
    },
  },

  extraReducers: {
    [getAllPosts.pending]: handlePending,
    [getUserPosts.pending]: handlePending,
    [addPost.pending]: handlePending,
    [likePost.pending]: handlePending,
    [addCommentPost.pending]: handlePending,

    [getAllPosts.rejected]: handleRejected,
    [getUserPosts.rejected]: handleRejected,
    [addPost.rejected]: handleRejected,
    [likePost.rejected]: handleRejected,
    [addCommentPost.rejected]: handleRejected,

    [getAllPosts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = [...state.items, ...action.payload];
    },
    [getUserPosts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = [...state.items, ...action.payload];
    },
    [addPost.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [likePost.fulfilled](state, action) {
      const commentIndex = state.items.findIndex(
        (post) => post._id === action.payload._id
      );
      if (commentIndex !== -1) {
        state.items.splice(commentIndex, 1, action.payload);
      }
      state.isLoading = false;
      state.error = null;
    },
    [addCommentPost.fulfilled](state, action) {
      const commentIndex = state.items.findIndex(
        (post) => post._id === action.payload._id
      );
      if (commentIndex !== -1) {
        state.items.splice(commentIndex, 1, action.payload);
      }
      state.isLoading = false;
      state.error = null;
    },
  },
});

export const { setPosts } = postsSlice.actions;
export default postsSlice.reducer;
