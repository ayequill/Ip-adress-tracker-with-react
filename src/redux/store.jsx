import { configureStore, combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import iptrackerReducer from './IpTracker/iptrackerSlice';

const reducer = combineReducers({
  iptracker: iptrackerReducer,
});

const store = configureStore({
  reducer,
  middleware: [thunk],
});

export default store;
