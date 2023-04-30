import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  details: {},
  status: null,
};

const API_KEY = import.meta.env.VITE_API_KEY;

const fetchIpDetails = async () => {
  try {
    const response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}`);
    return await response.json();
  } catch (error) {
    error.message = 'Invalid IP address or domain';
    throw error;
  }
};

const iptrackerSlice = createSlice({
  name: 'iptracker',
  initialState,
  reducers: {},
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
export default iptrackerSlice.reducer;
