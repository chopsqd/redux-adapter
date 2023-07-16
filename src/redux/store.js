import { configureStore } from '@reduxjs/toolkit';
import commentsReducer from '../components/Comments/commentsSlice'

export const store = configureStore({
  reducer: {
    comments: commentsReducer,
  },
});
