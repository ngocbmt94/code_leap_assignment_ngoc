import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
};

const globalLoadingSlice = createSlice({
  name: "globalLoading",
  initialState,
  reducers: {
    showLoading(state) {
      state.isLoading = true;
    },
    hideLoading(state) {
      state.isLoading = false;
    },
    setIsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
  },
});

// Export actions
export const { showLoading, hideLoading, setIsLoading } = globalLoadingSlice.actions;

// Export the reducer
export default globalLoadingSlice.reducer;
