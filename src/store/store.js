// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import profileReducer from '../reducers/profileReducer';
import educationReducer from '../reducers/educationReducer';

const store = configureStore({
  reducer: {
    profile: profileReducer,
    education: educationReducer,
  },
});

export default store;
