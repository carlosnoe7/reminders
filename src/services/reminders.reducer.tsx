import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { TodoProps } from '../interfaces/index';

interface initialStateProps{
  list:TodoProps[]
}
const initialState:initialStateProps={
  list:[]
}

export const slice = createSlice({
  name: "reminders",

  initialState,

  reducers: {
    setReminders: (state, action:PayloadAction<TodoProps>) => {
      state.list.push(action.payload)
    }
  },
});

export const { setReminders } = slice.actions;

export default slice.reducer;

// Selector
export const getReminders = (store:RootState) => store.reminders.list;