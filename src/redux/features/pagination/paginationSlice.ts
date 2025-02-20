import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PaginationState {
  pageIndex: number;
  pageSize: number;
}

const initialState: PaginationState = {
  pageIndex: 0,
  pageSize: 1,
};

const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setPageIndex(state, action: PayloadAction<number>) {
      state.pageIndex = action.payload;
    },
    setNextPageIndex(state) {
      state.pageIndex = state.pageIndex + 1;
    },
    setPageSize(state, action: PayloadAction<number>) {
      state.pageSize = action.payload;
    },
  },
});

// Export actions and reducer
export const { setPageIndex, setNextPageIndex, setPageSize } = paginationSlice.actions;
export default paginationSlice.reducer;
