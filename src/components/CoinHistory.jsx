import React from 'react'
import {Link} from 'react-router-dom'
import { useGetNewsQuery } from '../services/News'
import {Typography} from 'antd'
import NewsSingle from './NewsSingle';

function CoinHistory() {

  const {data, isFetching } = useGetNewsQuery();

  if(isFetching) return <h1>Loading...</h1>
console.log(data)
  return (
    <section className='w-11/12 m-auto sm:my-10'>
      <Typography.Title level={2} className='text-center'>News</Typography.Title>
      <section className='grid lg:grid-cols-3 sm:grid-cols-1 gap-10 mt-10'>
      {data.map((item)=>{
        return <NewsSingle {...item} key={data.index}/>
      })}
    </section>
    </section>
  )
}

export default CoinHistory