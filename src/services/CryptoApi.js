import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
const crytoApiHeaders = {
    'X-RapidAPI-Key': '391506cf94mshac34ca3389ae3abp1eea43jsn920fd142f348',
    'X-RapidAPI-Host': 'coingecko.p.rapidapi.com'
}
 const baseUrl = 'https://coingecko.p.rapidapi.com'

 const createReq = (url)=>({url, headers :crytoApiHeaders})

 export const  cryptoApi = createApi({
    reducerPath :'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints :(builder)=>({
        getCryptos :builder.query({
            query :() => createReq('/global')
        })
    })
 }) 
 export const  cryptoList = createApi({
    reducerPath :'cryptoList',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints :(builder)=>({
        getList :builder.query({
            query :(count) => createReq(`coins/markets?vs_currency=usd&price_change_percentage=24h&page=1&sparkline=true&per_page=${count}&order=market_cap_desc`)
        })
    })
 })
 export const  exchangeList = createApi({
    reducerPath :'exchangeList',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints :(builder)=>({
        getExchanges :builder.query({
            query :() => createReq(`/exchanges`)
        })
    })
 })
 export const  coinDetailList = createApi({
    reducerPath :'coinDetailList',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints :(builder)=>({
        getCoinDetail :builder.query({
            query :(id) => createReq(`/coins/${id}?localization=true&tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=false`)
        })
    }),
 })
 export const {
    useGetCryptosQuery
 }= cryptoApi
 export const {
    useGetListQuery
 }= cryptoList

 export const {
    useGetCoinDetailQuery
 }= coinDetailList
 export const {
    useGetExchangesQuery
 }= exchangeList