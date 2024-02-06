import { createSlice } from "@reduxjs/toolkit";
import { MusicList } from "../../data";

const initialState = {
  value: MusicList,
};

export const list = createSlice({
  name: "list",
  initialState,
  reducers: {
    changeList: (state, action) => {
      state.value = action.payload;
    },
    add: (state, action) => {
      state.value.push({ ...action.payload });
    },
  },
});

export const { changeList, add } = list.actions;

export default list.reducer;
