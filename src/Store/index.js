import { configureStore } from '@reduxjs/toolkit';
import listSlice from './Slice'

const store = configureStore({
  reducer: {
    listSlice
  },
});

export default store