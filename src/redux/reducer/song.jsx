import { createSlice } from "@reduxjs/toolkit";
import { MusicList } from "../../data";
const initialState = {
    value:MusicList[0]
}

const list = createSlice({
    name:'song',
    initialState,
    reducers:{
        changeSong:(state,action) =>{
            state.value = action.payload
        }
    }
})

export const {changeSong} =list.actions;
export default list.reducer