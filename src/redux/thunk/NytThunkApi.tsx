import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

export const fetchTopSportsStories = createAsyncThunk(
  'fetchTopSportsStories',
  async () => {
    const res = await fetch(
      'https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=hNH0xz8ZdTHybuvJA0b6rBdhySJFNz4y',
    );
    const result = await res.json();
    return result;
  },
);
const TopStoriesSlice = createSlice({
  name: 'TopStories',
  initialState: {
    data: null,
    isLoader: false,
    isError: false,
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchTopSportsStories.pending, (state, action) => {
      state.isLoader = true;
    });
    builder.addCase(fetchTopSportsStories.rejected, (state, action) => {
      (state.isLoader = false), (state.isError = true);
    });
    builder.addCase(fetchTopSportsStories.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isLoader = false;
    });
  },
});

export default TopStoriesSlice.reducer;
