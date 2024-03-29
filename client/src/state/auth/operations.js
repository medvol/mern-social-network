import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post("/auth/register", credentials);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post("/auth/login", credentials);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.post("/auth/logout");
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }

    try {
      setAuthHeader(persistedToken);
      const res = await axios.get("/users/current");
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addFriend = createAsyncThunk(
  "auth/addUserFriend",
  async ({ userId, friendId }, thunkAPI) => {
    try {
      const response = await axios.patch(`/users/${userId}/${friendId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteFriend = createAsyncThunk(
  "auth/deleteUserFriend",
  async ({ userId, friendId }, thunkAPI) => {
    try {
      const response = await axios.delete(`/users/${userId}/${friendId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
