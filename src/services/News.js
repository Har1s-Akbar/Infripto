import {fetchBaseQuery,createApi} from '@reduxjs/toolkit/query/react'

const newsHeaders={
    "X-RapidAPI-Key": "391506cf94mshac34ca3389ae3abp1eea43jsn920fd142f348",
    "X-RapidAPI-Host": "crypto-update-live.p.rapidapi.com"
}
const baseUrl = "https://crypto-update-live.p.rapidapi.com";

const createUrl = (url)=>({url, headers: newsHeaders})

export const newsApi = createApi({
    reducerPath : 'createApi',
    baseQuery : fetchBaseQuery({baseUrl}),
    endpoints : (builder)=>({
        getNews : builder.query ({
            query : ()=> createUrl(`/news`)
        })
    })
})

export const {
    useGetNewsQuery
} = newsApi