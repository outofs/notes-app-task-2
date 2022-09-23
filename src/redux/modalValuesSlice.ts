import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { MyModalValues } from "../models";

const initialState: MyModalValues = {
  valueTitle: "",
  valueCategory: "Random Thought",
  valueContent: "",
};

export const modalValuesSlice = createSlice({
  name: "noteActions",
  initialState,
  reducers: {
    titleChange: (state, actions) => {
      state.valueTitle = actions.payload;
    },

    categoryChange: (state, actions) => {
      state.valueCategory = actions.payload;
    },

    contentChange: (state, actions) => {
      state.valueContent = actions.payload;
    },
  },
});

export const { titleChange, categoryChange, contentChange } =
  modalValuesSlice.actions;

export default modalValuesSlice.reducer;
