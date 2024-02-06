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
  const allSongs = [...MusicList, ...storderArr];
  const lastPlayedSong = allSongs?.find((song) => song?.isPlaying);

  return lastPlayedSong ? lastPlayedSong : allSongs?.[0];
};

const initialState = {
  value: initalValue(),
};

const list = createSlice({
  name: "song",
  initialState,
  reducers: {
    changeSong: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeSong } = list.actions;
export default list.reducer;
