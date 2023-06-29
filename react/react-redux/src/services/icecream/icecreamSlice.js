import { createSlice } from '@reduxjs/toolkit';
// import { order as orderCake } from '../cake/cakeSlice';

const initialState = {
  numOfIcecreams: 30,
}

const icecreamSlice = createSlice({
  name: 'icecream',
  initialState,
  reducers: {
    order: (state, { payload }) => {
      if (state.numOfIcecreams > 0) {
        state.numOfIcecreams -= payload.quantity;
      }
    },
    restock: (state, { payload }) => {
      state.numOfIcecreams += payload.quantity;
    }
  },
  // extraReducers: (builder) => {
  //   builder.addCase(orderCake, (state) => {
  //     state.numOfIcecreams--;
  //   })
  // }
})

export default icecreamSlice.reducer;
export const { order, restock } = icecreamSlice.actions;