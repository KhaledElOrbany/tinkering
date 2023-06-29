import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  numOfCakes: 10,
}

const cakeSlice = createSlice({
  name: 'cake',
  initialState,
  reducers: {
    order: (state, { payload }) => {
      state.numOfCakes = state.numOfCakes - payload.quantity;
    },
    restock: (state, { payload }) => {
      state.numOfCakes += payload.quantity;
    }
  }
})

export default cakeSlice.reducer;
export const { order, restock } = cakeSlice.actions;