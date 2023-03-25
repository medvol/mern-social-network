import { createSlice } from "@reduxjs/toolkit";
import {
  register,
  logIn,
  refreshUser,
  logOut,
  addFriend,
  deleteFriend,
} from "./operations";

const initialState = {
  mode: "light",
  user: null,
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const handlePending = (state) => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logOut.fulfilled](state) {
      state.user = null;
      state.token = null;
      state.isLoggedIn = false;
    },
    [refreshUser.pending](state) {
      state.isRefreshing = true;
    },
    [refreshUser.fulfilled](state, action) {
      state.user = action.payload.user;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [refreshUser.rejected](state) {
      state.isRefreshing = false;
    },

    [addFriend.pending]: handlePending,
    [deleteFriend.pending]: handlePending,

    [addFriend.rejected]: handleRejected,
    [deleteFriend.pending]: handleRejected,

    [addFriend.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.user = action.payload;
    },
    [deleteFriend.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.user = action.payload;
    },
  },
});

export const { setMode } = authSlice.actions;
export default authSlice.reducer;
