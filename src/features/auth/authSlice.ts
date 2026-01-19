import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { AuthState, SetCredentialsPayload, User } from '@types/auth';
import type { RootState } from '@store/index';

const initialState: AuthState = {
  user: null,
  token: localStorage.getItem('token') || null,
  refreshToken: localStorage.getItem('refreshToken') || null,
  isAuthenticated: !!localStorage.getItem('token'),
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<SetCredentialsPayload>) => {
      const { user, accessToken, refreshToken } = action.payload;
      state.user = user;
      state.token = accessToken;
      state.refreshToken = refreshToken;
      state.isAuthenticated = true;
      
      // Store in localStorage
      localStorage.setItem('token', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
      localStorage.setItem('user', JSON.stringify(user));
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.refreshToken = null;
      state.isAuthenticated = false;
      
      // Clear localStorage
      localStorage.removeItem('token');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('user');
    },
    updateUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      localStorage.setItem('user', JSON.stringify(action.payload));
    },
  },
});

export const { setCredentials, logout, updateUser } = authSlice.actions;
export default authSlice.reducer;

// Selectors
export const selectCurrentUser = (state: RootState) => state.auth.user;
export const selectIsAuthenticated = (state: RootState) => state.auth.isAuthenticated;
export const selectToken = (state: RootState) => state.auth.token;
