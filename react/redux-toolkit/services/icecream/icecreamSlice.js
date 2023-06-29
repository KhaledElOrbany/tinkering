const createSlice = require('@reduxjs/toolkit').createSlice;
const { cakeActions } = require('../cake/cakeSlice');

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
  },
  extraReducers: (builder) => {
    builder.addCase(cakeActions.order, (state) => {
      state.numOfIcecream--;
    })
  }
})

module.exports = icecreamSlice.reducer;
module.exports.icecreamActions = icecreamSlice.actions;