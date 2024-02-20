import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {TopStories} from '../../constants/Types';

export const TopStoriesApi = createApi({
  reducerPath: 'TopStoriesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.nytimes.com/svc/topstories/v2/',
  }),
  endpoints: builder => ({
    getTopSportStories: builder.query<TopStories, void>({
      query: () => ({
        method: 'GET',
        url: `sports.json?api-key=hNH0xz8ZdTHybuvJA0b6rBdhySJFNz4y`,
      }),
    }),
    getTopTechStories: builder.query<TopStories, void>({
      query: () => ({
        method: 'GET',
        url: 'technology.json?api-key=hNH0xz8ZdTHybuvJA0b6rBdhySJFNz4y',
      }),
    }),
    getTopWorldStories: builder.query<TopStories, void>({
      query: () => ({
        method: 'GET',
        url: 'world.json?api-key=hNH0xz8ZdTHybuvJA0b6rBdhySJFNz4y',
      }),
    }),
  }),
});

export const {useGetTopSportStoriesQuery} = TopStoriesApi;
