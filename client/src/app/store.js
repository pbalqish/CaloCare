import { configureStore } from "@reduxjs/toolkit";
import profileSlice from "../features/profile/profileSlicer";

export const store = configureStore({
  reducer: {
    profileSlice,
  },
});
