import React, { useState } from 'react'
import {Card, Input,Image, Statistic} from 'antd'
import { Link } from 'react-router-dom'
import millify from 'millify'


function SingleCoins({id,name, market_cap_rank, market_cap, image,high_24h,low_24h,symbol,ath,current_price, total_volume, search}) {
    return (
        <section className='w-full'>
            <Link to={`/${id}`}>   
            <Card className='w-96 transition-all ease-in-out delay-5000 hover:bg-green-600 ' extra={<img src={image} alt={name} className='h-10' />} title={`${market_cap_rank}-    ${name}`} hoverable>
                <section className='grid grid-cols-2 grid-rows-3 justify-between items-center text-left'>
                <div>
                    <h2>Symbol</h2>
                    <p>{symbol}</p>
                </div>
                <div>
                    <h2>Current Price</h2>
                    <p>{millify(current_price)} $</p>
                </div>
                
                
                <div>
                    <h2>T.Volume</h2>
                    <p>{millify(market_cap)}</p>
                </div>
                <div>
                    <h2>Market Cap Rank</h2>
                    <p>{millify(total_volume)}</p>
                </div>
                
                
                <div>
                    <h2>Highest 24h</h2>
                    <p>{millify(high_24h)}</p>
                </div>
                <div>
                    <h2>Lowest 24h</h2>
                    <p>{millify(low_24h)}</p>
                </div>
                <div>
                    <h2>All Time High</h2>
                    <p>{millify(ath)}</p>
                </div>
                </section>
                
            </Card >
            </Link>
        </section>
      )
}

export default SingleCoins