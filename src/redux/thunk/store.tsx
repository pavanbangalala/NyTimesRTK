import {configureStore} from '@reduxjs/toolkit';
import {fetchTopSportsStories} from './NytThunkApi';
import TopSportsStoriesReducer from './NytThunkApi';

export const store = configureStore({
  reducer: {
    TopSporstStories: TopSportsStoriesReducer,
  },
});
