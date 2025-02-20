import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { DogBreed } from "../../../types";

interface DogState {
  breed?: DogBreed | null;
}

const initialState: DogState = {
  breed: null,
};

const DogBreedSlice = createSlice({
  name: "DogBreed",
  initialState,
  reducers: {
    setDogBreeds(state, action: PayloadAction<DogBreed>) {
      state.breed = action.payload;
    },
  },
});

// Export actions and reducer
export const { setDogBreeds } = DogBreedSlice.actions;
export default DogBreedSlice.reducer;
