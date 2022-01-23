import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TodoProps } from '../interfaces/index';

export interface ItemState {
    valueChange:TodoProps;
    valueDelete:TodoProps;
}

const initialState: ItemState = {
  valueChange:{
      id:'',
      userId:'',
      completed:false,
      title:'',
      deadline:new Date()
  },
  valueDelete:{
    id:'',
    userId:'',
    completed:false,
    title:'',
    deadline:new Date()
  },
}

export const itemSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    setItemToChange: (state,action:PayloadAction<TodoProps>) => {
      state.valueChange={...action.payload};
    },
    setItemToDelete: (state,action:PayloadAction<TodoProps>) => {
        state.valueDelete={...action.payload};
    }
  },
})

// Action creators are generated for each case reducer function
export const { setItemToChange,setItemToDelete } = itemSlice.actions

export default itemSlice.reducer