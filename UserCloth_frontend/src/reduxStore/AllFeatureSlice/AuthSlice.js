import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

/* LOGIN */

export const LoginUser = createAsyncThunk(
  "auth/loginUser",
  async (userData, { rejectWithValue }) => {

    try {

      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        userData,
        { withCredentials: true }
      );

      return res.data;

    } catch (error) {

      return rejectWithValue(error.response.data);

    }

  }
);
/* SIGNUP */

export const SignupUser = createAsyncThunk(
  "auth/signupUser",
  async (userData) => {

    const res = await axios.post(
      "http://localhost:5000/api/auth/signup",
      userData,
      { withCredentials: true }
    );

    return res.data;

  }
);

/* LOGOUT */

export const LogoutUser = createAsyncThunk(
  "auth/logoutUser",
  async () => {

    await axios.post(
      "http://localhost:5000/api/auth/logout",
      {},
      { withCredentials: true }
    );

  }
);

export const getCurrentUser = createAsyncThunk(
  "auth/getCurrentUser",
  async () => {

    const res = await axios.get(
      "http://localhost:5000/api/auth/profile",
      { withCredentials: true }
    );

    return res.data;

  }
);

const AuthSlice = createSlice({
  name: "auth",

  initialState: {
    user: null,
    status: "idle"
  },

  reducers: {
    logout: (state) => {
      state.user = null;
    }
  },

  extraReducers: (builder) => {

    builder

      .addCase(LoginUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
      })

      .addCase(SignupUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
      })

      .addCase(LogoutUser.fulfilled, (state) => {
        state.user = null;
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
       state.user = action.payload.user;

});
  }

});

export const { logout } = AuthSlice.actions;

export default AuthSlice.reducer;