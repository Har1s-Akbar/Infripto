import {configureStore} from '@reduxjs/toolkit'
import { coinDetailList, cryptoApi, cryptoList,exchangeList, coinHistoryDetail } from '../services/CryptoApi'
import { newsApi } from '../services/News' 

export default configureStore({
    reducer : {
        [cryptoApi.reducerPath]: cryptoApi.reducer,
        [cryptoList.reducerPath]:cryptoList.reducer,
        [exchangeList.reducerPath]:exchangeList.reducer,
        [coinDetailList.reducerPath]: coinDetailList.reducer,
        [newsApi.reducerPath]: newsApi.reducer,
    }
})