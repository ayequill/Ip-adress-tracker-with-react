import { configureStore } from '@reduxjs/toolkit';
import iptrackerReducer from './IpTracker/iptrackerSlice';

export default configureStore({
  reducer: {
    iptracker: iptrackerReducer,
  },
});
