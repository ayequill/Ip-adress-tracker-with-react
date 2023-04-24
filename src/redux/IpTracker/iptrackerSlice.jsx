import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  date: null,
  status: null,
  details: null,
};

const fetchApi = createAsyncThunk(
  'iptracker/fetchApi',
  async (ip, { rejectWithValue }) => {
    try {
      const response = await axios.get('https://geo.ipify.org/api/v2/country?apiKey=at_Lp9MbloNt0bmBARi0OKCKTzPbzmSe&ipAddress=8.8.8.8');
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);

const iptrackerSlice = createSlice({
  name: 'iptracker',
  initialState,
  reducers: {
    getDetails: (state, action) => {
      const details = state;
      details.date = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchApi.pending, (state) => {
      const isPending = state;
      isPending.status = 'loading';
    });
    builder.addCase(fetchApi.fulfilled, (state, action) => {
      const isFulfilled = state;
      isFulfilled.status = 'succeeded';
      isFulfilled.details = action.payload;
    });
    builder.addCase(fetchApi.rejected, (state, action) => {
      const isRejected = state;
      isRejected.status = 'failed';
      isRejected.details = action.payload;
    });
  },
});

export const { getDetails } = iptrackerSlice.actions;
export default iptrackerSlice.reducer;
