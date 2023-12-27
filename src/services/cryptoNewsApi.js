import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const rapid_key = process.env.REACT_APP_RAPIDAPI_KEY;
const cryptoNewsHeaders = {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': rapid_key
  }

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';  

const createRequest = (url) => ({url, headers: cryptoNewsHeaders});


export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({ newsCategory, count} ) => createRequest(`/news/search?category=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
        })
    })
});

export const { 
    useGetCryptoNewsQuery 
} = cryptoNewsApi;
