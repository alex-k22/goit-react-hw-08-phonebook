import {
  currentUserThunk,
  loginThunk,
  logoutThunk,
  registeringThunk,
} from './operations';
import { createSlice } from '@reduxjs/toolkit';

const handleRegisterFulfilled = (state, { payload }) => {
  state.isLoggedIn = true;
  state.token = payload.token;
  state.user = payload.user;
  state.isLoding = false;
};

const handlePending = (state, { payload }) => {
  state.isLoding = true;
};

const handleLogoutFulfilled = state => {
  state.isLoggedIn = false;
  state.token = null;
  state.user = { name: null, email: null };
  state.isLoding = false;
};

const handleCurrentUserFulfilled = (state, { payload }) => {
  state.user = payload;
  state.isLoggedIn = true;
  state.isLoding = false;
};

const initialeState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isLoding: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialeState,
  extraReducers: builder => {
    builder
      .addCase(loginThunk.fulfilled, handleRegisterFulfilled)
      .addCase(registeringThunk.fulfilled, handleRegisterFulfilled)
      .addCase(logoutThunk.fulfilled, handleLogoutFulfilled)
      .addCase(currentUserThunk.fulfilled, handleCurrentUserFulfilled)
      .addMatcher(action => {
        action.type.endsWith('/pending');
      }, handlePending);
  },
});

export const authReduser = authSlice.reducer;
