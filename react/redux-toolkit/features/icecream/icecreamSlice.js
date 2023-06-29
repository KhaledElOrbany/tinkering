const createSlice = require('@reduxjs/toolkit').createSlice;

const initialState = {
  numOfIcecream: 30,
}

const icecreamSlice = createSlice({
  name: 'icecream',
  initialState,
  reducers: {
    order: (state, { payload }) => {
      state.numOfIcecream -= payload.quantity;
    },
    restock: (state, { payload }) => {
      state.numOfIcecream += payload.quantity;
    }
  }
})

module.exports = icecreamSlice.reducer;
module.exports.icecreamActions = icecreamSlice.actions;