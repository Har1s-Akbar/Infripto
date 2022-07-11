import React from 'react'
import { useGetListQuery } from '../services/CryptoApi'
import {useState,useEffect} from 'react'
import SingleCoins from './SingleCoins';
import {Link} from 'react-router-dom'
import {Row, Col, Input} from 'antd'

function Coins({simplified}) {
  const count = simplified? 10 : 100;
  const [coins, setCoins] = useState([]);
  const {data:cryptolist, isFetching} = useGetListQuery(count);
  const [searchTerm, setSearchTerm] = useState('bitcoin');

  useEffect(()=>{
    if (!isFetching){
      setCoins(cryptolist)
    }
  },[cryptolist])

  useEffect(()=>{
    const filteredData = coins?.map((item)=>{
      const newArray = coins.filter((itm)=> itm.id.toLowerCase().includes(searchTerm.toLowerCase()))
      setCoins(newArray)  
    })
  },[searchTerm])

  useEffect(()=>{
    if(searchTerm === ''){
      setCoins(cryptolist)
    };
  },[searchTerm])
  if (isFetching) return <h1>Loading....</h1>
  return (
    <section className='lg:mt-10 sm:mt-5'>
      <div className='flex justify-around'>
        <h1 className='lg:text-4xl sm:text-xl'> Top Market Coins</h1>
        <Link to='/coins' className='lg:text-xl sm:text-base'>Show More</Link>
      </div>
      {! simplified &&(
        <div className=' lg:m-auto lg:my-10 sm:m-auto sm-my-5 sm:w-1/2 border-black lg:w-1/3'>
        <Input placeholder='Crypto...' onChange={(e)=>setSearchTerm(e.target.value)}>
        </Input>
        </div>
      )
      }
      <Row  className='mt-5 '>
        <Col className='grid sm:grid-cols-1 lg:grid-cols-3 m-auto grid-rows-auto sm:gap-5 lg:gap-12'>{coins.map((items ,)=>{
        return  <SingleCoins search ={searchTerm} key={items.id} {...items} />
      })}</Col>
      </Row>
    </section>
  )
}

export default Coins