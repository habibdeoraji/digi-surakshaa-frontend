import { createSlice } from '@reduxjs/toolkit';

// Load state from localStorage if available
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('auth');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error('Error loading state from localStorage:', err);
    return undefined;
  }
};

const initialState = loadState() || {
  user: null,
  token: null,
  refreshToken: null,
  is2FAEnabled: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, { payload: { user, token, refreshToken } }) => {
      state.user = user;
      state.token = token;
      state.refreshToken = refreshToken;
      // Save to localStorage
      localStorage.setItem('auth', JSON.stringify(state));
    },
    setUser: (state, { payload }) => {
      state.user = payload;
      localStorage.setItem('auth', JSON.stringify(state));
    },
    set2FAStatus: (state, { payload }) => {
      state.is2FAEnabled = payload;
      localStorage.setItem('auth', JSON.stringify(state));
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.refreshToken = null;
      state.is2FAEnabled = false;
      localStorage.removeItem('auth');
    },
  },
});

export const { setCredentials, setUser, set2FAStatus, logout } = authSlice.actions;
export default authSlice.reducer;

export const selectCurrentUser = (state) => state.auth.user;
export const selectCurrentToken = (state) => state.auth.token;
export const select2FAStatus = (state) => state.auth.is2FAEnabled; 