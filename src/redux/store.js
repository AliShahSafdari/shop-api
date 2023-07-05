import { configureStore } from '@reduxjs/toolkit';
import storeReducer from './storeReducer';

const store = configureStore({
  reducer: storeReducer,
});

export default store;
