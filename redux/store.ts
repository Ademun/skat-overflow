import { configureStore } from '@reduxjs/toolkit'
import { guidelineSlice } from './guideline/guidelineSlice'
import { authSlice } from './auth/authSlice';

export const store = configureStore({
  reducer: {
    guidline: guidelineSlice.reducer,
    auth: authSlice.reducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch