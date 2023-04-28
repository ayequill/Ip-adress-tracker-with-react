import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  ip: '',
  location: '',
  timezone: '',
  isp: '',
};

const fetchIpDetails = createAsyncThunk(
  'iptracker/fetchIpDetails',
  async () => {
    const response = await fetch(`https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_IPIFY_API_KEY}`);
    const data = await response.json();
    return data;
  },
);

const iptrackerSlice = createSlice({
  name: 'iptracker',
  initialState,
  reducers: {
    setIpDetails: (state, action) => {
      const details = state;
      details.details = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchIpDetails.pending, (state) => {
        const details = state;
        details.status = 'loading';
      })
      .addCase(fetchIpDetails.fulfilled, (state, action) => {
        const details = state;
        details.status = 'idle';
        details.details = action.payload;
      })
      .addCase(fetchIpDetails.rejected, (state) => {
        const details = state;
        details.status = 'failed';
      });
  },
});

export { fetchIpDetails };
export const { setIpDetails } = iptrackerSlice.actions;
