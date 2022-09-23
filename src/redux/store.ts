import { configureStore } from "@reduxjs/toolkit";
import noteActionsReducer from "./noteActionsSlice";
import modalValuesReducer from "./modalValuesSlice";
import currentIdReducer from "./currentIdSlice";

export const store = configureStore({
  reducer: {
    noteActions: noteActionsReducer,
    modalValues: modalValuesReducer,
    currentId: currentIdReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
