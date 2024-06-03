import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserComment } from "interfaces";


interface CommentsState {
  [filmId: string]: UserComment[];
}

const initialState: CommentsState = {};

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    addComment(state, action: PayloadAction<{ filmId: string; comment: UserComment }>) {
      const { filmId, comment } = action.payload;

      if (!state[filmId]) {
        state[filmId] = [];
      }

      state[filmId].push(comment);
    },
  },
});

export const { addComment } = commentsSlice.actions;

export default commentsSlice.reducer;
