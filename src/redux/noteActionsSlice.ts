import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { MyNote } from "../models";
import { icon } from "../helper";
import { nanoid } from "nanoid";
import { extractDates } from "../helper";
import { editProps } from "../helper";

const initialState: MyNote[] = [
  {
    id: nanoid(),
    created: "March 25, 2022",
    title: "Note 1",
    category: "Random Thought",
    icon: icon("Random Thought"),
    content: "30/9/2022 - visiting doctor, 2/10/2022 - buy medicine",
    dates: extractDates(
      "30/9/2022 - visiting doctor, 2/10/2022 - buy medicine"
    ),
    archived: false,
  },
  {
    id: nanoid(),
    created: "June 2, 2022",
    title: "Buy Coffe",
    category: "Task",
    icon: icon("Task"),
    content: "Buy coffe!!!!",
    dates: extractDates("Buy coffe!!!!"),
    archived: false,
  },
  {
    id: nanoid(),
    created: "July 15, 2022",
    title: "Visit the theater",
    category: "Idea",
    icon: icon("Idea"),
    content: "Visit the theater in 14.9.2022",
    dates: extractDates("Visit the theater in 14.9.2022"),
    archived: true,
  },
  {
    id: nanoid(),
    created: "August 20, 2022",
    title: "Success is",
    category: "Quote",
    icon: icon("Quote"),
    content:
      "Success is the ability to go from one failure to another with no loss of enthusiasm. Winston Churchill",
    dates: extractDates(
      "Success is the ability to go from one failure to another with no loss of enthusiasm. Winston Churchill"
    ),
    archived: false,
  },
  {
    id: nanoid(),
    created: "September 17, 2022",
    title: "Notes App",
    category: "Task",
    icon: icon("Task"),
    content: "Finish this Notes App up to 29/09/2022",
    dates: extractDates("Finish this Notes App up to 29/09/2022"),
    archived: false,
  },

  {
    id: nanoid(),
    created: "September 17, 2022",
    title: "Going through hell",
    category: "Quote",
    icon: icon("Task"),
    content: "If you are going through hell, keep going. Winston Churchill",
    dates: extractDates(
      "If you are going through hell, keep going. Winston Churchill"
    ),
    archived: true,
  },
];

export const noteActionsSlice = createSlice({
  name: "noteActions",
  initialState,
  reducers: {
    editNote: (state, actions) => {
      state[actions.payload].title = editProps.valueTitle;
      state[actions.payload].category = editProps.valueCategory;
      state[actions.payload].content = editProps.valueContent;
      state[actions.payload].dates = extractDates(editProps.valueContent);
    },

    archiveNote: (state, actions) => {
      state[actions.payload].archived = !state[actions.payload].archived;
    },

    removeNote: (state, actions) => {
      state.splice(actions.payload, 1);
    },

    createNote: (state, actions) => {
      state.push(actions.payload);
    },
  },
});

export const { editNote, archiveNote, removeNote, createNote } =
  noteActionsSlice.actions;

export default noteActionsSlice.reducer;
