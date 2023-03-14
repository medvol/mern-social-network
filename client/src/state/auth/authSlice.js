import { createSlice } from "@reduxjs/toolkit";
import { register, logIn, refreshUser, logOut } from "./operations";

const initialState = {
  mode: "light",
  user: null,
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },

    setFriends: (state, action) => {
      if (state.user) {
        state.user.friends = action.payload.friends;
      } else {
        console.error("user friends non-existent :(");
      }
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
  },
});

// export const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     setMode: (state) => {
//       state.mode = state.mode === "light" ? "dark" : "light";
//     },
//     setLogin: (state, action) => {
//       state.user = action.payload.user;
//       state.token = action.payload.token;
//       state.isLoggedIn = true;
//     },
//     setLogout: (state) => {
//       state.user = null;
//       state.token = null;
//       state.isLoggedIn = false;
//     },
//     setFriends: (state, action) => {
//       if (state.user) {
//         state.user.friends = action.payload.friends;
//       } else {
//         console.error("user friends non-existent :(");
//       }
//     },
//   },
// });

export const { setMode, setFriends } = authSlice.actions;
export default authSlice.reducer;
