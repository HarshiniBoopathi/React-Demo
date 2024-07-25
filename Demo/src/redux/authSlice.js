import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
  username: null,
  userDetails: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.token = action.payload.token;
      state.username = action.payload.username;
    },
    setUserDetails: (state, action) => {
      state.userDetails = action.payload;
    },
    logout: (state) => {
      state.token = null;
      state.username = null;
      state.userDetails = null;
    },
  },
});

export const { loginSuccess, setUserDetails, logout } = authSlice.actions;

export default authSlice.reducer;
