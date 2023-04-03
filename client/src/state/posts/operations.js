import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

export const getAllPosts = createAsyncThunk(
  "posts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get("/posts");
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getUserPosts = createAsyncThunk(
  "posts/userPosts",
  async (id, thunkAPI) => {
    try {
      const res = await axios.get(`/posts/${id}/posts`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addPost = createAsyncThunk(
  "posts/addPost",
  async (post, thunkAPI) => {
    try {
      const response = await axios.post("/posts", post);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const likePost = createAsyncThunk(
  "posts/like",
  async (ownerId, thunkAPI) => {
    try {
      const response = await axios.patch(`/posts/${ownerId}/like`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addCommentPost = createAsyncThunk(
  "posts/comment",
  async ({ comment, postId }, thunkAPI) => {
    try {
      const response = await axios.post(`/posts/${postId}/comment`, comment);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

