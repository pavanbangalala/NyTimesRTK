import {configureStore} from '@reduxjs/toolkit';
import {TopStoriesApi, useGetTopSportStoriesQuery} from './NytApi';
import {setupListeners} from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
    [TopStoriesApi.reducerPath]: TopStoriesApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(TopStoriesApi.middleware),
});

setupListeners(store.dispatch);
