import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  currentId: "",
};

export const currentIdSlice = createSlice({
  name: "noteActions",
  initialState,
  reducers: {
    setCurrentId: (state, actions) => {
      state.currentId = actions.payload;
    },
  },
});

export const { setCurrentId } = currentIdSlice.actions;

export default currentIdSlice.reducer;
