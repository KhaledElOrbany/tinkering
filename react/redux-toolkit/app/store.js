const configureStore = require('@reduxjs/toolkit').configureStore;
// const reduxLogger = require('redux-logger');
const cakeReducer = require('../services/cake/cakeSlice');
const icecreamReducer = require('../services/icecream/icecreamSlice');
const userReducer = require('../services/user/userSlice')

// const logger = reduxLogger.createLogger()

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
    user: userReducer
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),  
})

module.exports = store