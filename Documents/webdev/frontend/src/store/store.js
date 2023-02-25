// This file exports a function that creates the Redux store and combines the reducers *
// from the agencySlice and studentSlice. It also sets up middleware such as Redux Thunk and logger.

import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {},
});

export default store;
