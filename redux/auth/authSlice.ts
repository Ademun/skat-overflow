import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';
const getAuth = () => {
  if (typeof window !== 'undefined') {
    return JSON.parse(localStorage?.getItem('isAuth') || 'false');
  }
  return false;
};

interface AuthState {
  value: boolean;
}

const initialState: AuthState = {
  value: getAuth(),
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: state => {
      localStorage.setItem('isAuth', JSON.stringify(true));
      state.value = true;
    },
    error: state => {
      state.value = false;
    },
  },
});

export const { login, error } = authSlice.actions;
export const selectCount = (state: RootState) => state.guidline.value;
export default authSlice.reducer;
