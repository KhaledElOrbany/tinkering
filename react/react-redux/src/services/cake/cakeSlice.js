import { createSlice } from '@reduxjs/toolkit';

const cakeSlice = createSlice({
  name: 'cake',
  initialState: {
    numOfCakes: 10,
    icecreamQuantity: 0,
  },
  reducers: {
    order: (state, { payload }) => {
      if (state.numOfCakes > 0) {
        state.numOfCakes -= payload.quantity;

        // dispatch(orderIcecream({ quantity: (payload.quantity % 2) }));
      }
    },
    restock: (state, { payload }) => {
      state.numOfCakes += payload.quantity;
    }
  }
})

export default cakeSlice.reducer;
export const { order, restock } = cakeSlice.actions;