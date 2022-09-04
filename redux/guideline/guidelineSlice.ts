import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface GuidelineState {
  value: boolean;
}

const initialState: GuidelineState = {
  value: false,
};

export const guidelineSlice = createSlice({
  name: 'guideline',
  initialState,
  reducers: {
    open: state => {
      state.value = true;
    },
    close: state => {
      state.value = false;
    },
  },
});

export const { open, close } = guidelineSlice.actions;
export const selectCount = (state: RootState) => state.guidline.value;
export default guidelineSlice.reducer;
