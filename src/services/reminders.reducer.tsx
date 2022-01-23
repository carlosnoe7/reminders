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
    },
    editReminders: (state, action:PayloadAction<TodoProps>)=>{
      const indexChange=state.list.findIndex(i=>i.id===action.payload.id);
      state.list.splice(indexChange,1,action.payload);
    },
    changeCompleted:(state,action:PayloadAction<TodoProps>) => {
      const indexChange=state.list.findIndex(i=>i.id===action.payload.id);
      if (action.payload.completed) {
        let top=state.list.filter(r=>r.completed===true).length;
        state.list.splice(indexChange,1,{...action.payload,id:`RC - ${top+1}`});
      }
      else{
        let top=state.list.filter(r=>r.completed===false).length;
        state.list.splice(indexChange,1,{...action.payload,id:`Reminder - ${top+1}`});
        
      }
    },
    deleteReminders: (state, action:PayloadAction<string>)=>{
      const indexDelete=state.list.findIndex(i=>i.id===action.payload);
      
      state.list.splice(indexDelete,1);
      state.list.map((i,pos)=>{
        if (i.completed) {
          
          return i.id=`RC - ${pos + 1}`
        }
        else{
          return i.id=`Reminder - ${pos + 1}`
        }
      });
    }
  },
});

export const { setReminders,editReminders,deleteReminders,changeCompleted } = slice.actions;

export default slice.reducer;

// Selector
export const getReminders = (store:RootState) => store.reminders.list;