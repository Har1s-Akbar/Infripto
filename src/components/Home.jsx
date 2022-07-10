import React from 'react'
import {Typography,Button, Row, Col, Statistic} from 'antd'
import {Link} from 'react-router-dom'
import millify from 'millify'
import { useGetCryptosQuery } from '../services/CryptoApi'
import Coins from './Coins'
import Exchange from './Exchange'
function Home() {

  const {data, isFetching} = useGetCryptosQuery();
  const globalStats = data?.data
  if(isFetching) return <h1>Loading....</h1>  
  return (
    <>
    <Typography.Title level={2} className='lg:p-10 text-center sm:p-5'>
      Global Crypto Statistics
    </Typography.Title>
    <Row justify='left' className='lg:ml-96 lg:py-10 sm:ml-20 sm:py-5'>
        <Col span={12} > <Statistic title='Total Cryptocurrencies' value={globalStats.active_cryptocurrencies}/></Col>
        <Col span={12} > <Statistic title='Ended ICOS' value={globalStats.ended_icos} /></Col>
        <Col span={12} > <Statistic title='Ongoing ICOS' value={globalStats.ongoing_icos} /></Col>
        <Col span={12} > <Statistic title='Total Markets' value={globalStats.markets} /></Col>
        <Col span={12} > <Statistic title='Market Change Percentage in 24 Hours' value={millify(globalStats.market_cap_change_percentage_24h_usd)}/></Col>
    </Row>
    <div>
      <Coins simplified/>
    </div>
    <div>
      <Exchange simplified/>
    </div>
    </>
  )
}

export default Home