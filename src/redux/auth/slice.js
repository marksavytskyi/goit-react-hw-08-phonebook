import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout, refresh } from './operations';
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: builder =>
    builder
      //   REGISTER
      .addCase(register.pending, state => state)
      .addCase(register.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.user = action.payload.user;
      })
      .addCase(register.rejected, state => state)
      //   LOGIN
      .addCase(login.pending, state => state)
      .addCase(login.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.user = action.payload.user;
      })
      .addCase(login.rejected, state => state)
      //   LOGOUT
      .addCase(logout.pending, state => state)
      .addCase(logout.fulfilled, state => {
        state.token = null;
        state.isLoggedIn = false;
        state.user = { name: null, email: null };
      })
      .addCase(logout.rejected, state => state)
      //   REFRESH
      .addCase(refresh.pending, state => state)
      .addCase(refresh.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload;
      })
      .addCase(refresh.rejected, state => state),
});

export const authReducer = authSlice.reducer;
