import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  profile: [],
  error: "",
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setFetchLoading: (state) => {
      state.loading = true;
      state.profile = [];
      state.error = "";
    },
    setFetchProfile: (state, action) => {
      state.loading = false;
      state.profile = action.payload;
      state.error = "";
    },
    setFetchError: (state, action) => {
      state.loading = false;
      state.profile = [];
      state.error = action.payload;
    },
  },
});

export const { setFetchProfile, setFetchError, setFetchLoading } =
  profileSlice.actions;

export const fetchProfile = () => async (dispatch) => {
  try {
    dispatch(setFetchLoading());
    const { data } = await axios.get("http://localhost:3000/myprofile", {
      headers: {
        Authorization: `Bearer ${localStorage.access_token}`,
      },
    });
    dispatch(setFetchProfile(data));
  } catch (error) {
    dispatch(setFetchError(error.message));
  }
};

export default profileSlice.reducer;
