const createSlice = require('@reduxjs/toolkit').createSlice;

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

module.exports = cakeSlice.reducer;
module.exports.cakeActions = cakeSlice.actions;