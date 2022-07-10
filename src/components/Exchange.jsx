import React from 'react'
import {Typography, Table} from 'antd'
import {Link} from 'react-router-dom'
import { useGetExchangesQuery } from '../services/CryptoApi'


function Exchange() {

  const {data, isFetching} = useGetExchangesQuery();
  console.log(data)
  const  columns=[
    {
      key:'name',
      title:'Name',
      dataIndex :'name',
    },
    {
      key:'trust_score_rank',
      title:'Rank',
      dataIndex :'trust_score_rank',
    },
    {
      key:'trust_score',
      title:'Trust Score',
      dataIndex :'trust_score',
    },
    {
      key:`trade_volume_24h_btc`,
      title:'Trade Volume of last 24h',
      dataIndex :'trade_volume_24h_btc',
    }
  ]
  if(isFetching) return <h1>loading..........</h1>
  return (
    <section className='my-20 m-auto w-11/12 '>
      <div className=' flex justify-around my-10'>
        <Typography.Title level={1}>Exchanges</Typography.Title>
        <Link className='text-xl' to='/exchanges'>See More</Link>
      </div>
      <Table dataSource={data} pagination={{position:['bottomCenter']}} scroll bordered columns= {columns}/>
    </section>
  )
}

export default Exchange