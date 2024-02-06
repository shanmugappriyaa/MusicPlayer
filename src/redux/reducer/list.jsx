import { createSlice } from "@reduxjs/toolkit";
import { MusicList } from "../../data";

const initalValue = () => {
  const storedItem = { ...localStorage };
  let storderArr = [];

  for (let i in storedItem) {
    if (i) {
      storderArr.push(JSON.parse(storedItem[i]));
    }
  }
  
  return [...MusicList, ...storderArr];
};

const initialState = {
  value: initalValue(),
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
