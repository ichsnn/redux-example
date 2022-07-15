import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../views/counter/hooks/counterSlice';

export default configureStore({
  reducer: {
    counter: counterReducer
  }
})