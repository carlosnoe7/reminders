import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ModalState {
  value: boolean;
  type:'add' | 'edit';
}

const initialState: ModalState = {
  value: false,
  type:'add'
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    open: (state,action:PayloadAction<'add' | 'edit'>) => {
      state.value=true;
      state.type=action.payload;
    },
    close: (state) => {
        state.value=false;
    }
  },
})

// Action creators are generated for each case reducer function
export const { open,close } = modalSlice.actions

export default modalSlice.reducer