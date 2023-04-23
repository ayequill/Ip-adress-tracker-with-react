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
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchApi.pending, (state) => {
      state.status = 'loading';
    })
      .addCase(fetchApi.fulfilled, (state, action) => {
        state.status = 'success';
        state.date = action.payload;
      })
      .addCase(fetchApi.rejected, (state, action) => {
        state.status = 'failed';
        state.details = action.payload;
      });
    getDetails = (state, action) => {
      state.status = 'success';
      state.date = action.payload;
    };
  },
});

export const { getDetails } = iptrackerSlice.actions;
export default iptrackerSlice.reducer;
