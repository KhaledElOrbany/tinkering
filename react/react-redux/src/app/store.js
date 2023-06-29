import { configureStore } from '@reduxjs/toolkit';
// import { reduxLogger } from 'redux-logger';
import cakeReducer from '../services/cake/cakeSlice';
import icecreamReducer from '../services/icecream/icecreamSlice';
import userReducer from '../services/user/userSlice';

// const logger = reduxLogger.createLogger()

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
    user: userReducer
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),  
})

export default store