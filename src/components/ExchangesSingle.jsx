import React from "react";
import { Link } from "react-router-dom";
import { Card, Typography } from "antd";
import millify from 'millify'

function ExchangesSingle({
  name,
  trust_score_rank,
  trust_score,
  trade_volume_24h_btc,
  has_trading_incentive,
  image,
  year_established,
  id,
  url,
}) {
  return (
    <article>
        <Card hoverable className="w-full transition delay-600 ease-in-out hover:bg-yellow-500"
          title={`${trust_score_rank}-     ${name}`}
          extra={<img src={image} />}
        >
          <section className="grid grid-rows-auto grid-cols-2">
            <div className="col-span-2">
              <h1 className="italic text-purple-200">{year_established}</h1>
            </div>
            <div>
                <h1>Trust Score</h1>
                <p>{trust_score}</p>
            </div>
            <div>
                <h1>Trade volume</h1>
                <p>{millify(trade_volume_24h_btc)}</p>
            </div>
            <div className='w-full'>
                <h1>Visit Site</h1>
                <a href={url} className='italic'>{url} <br /></a>
            </div>
          </section>
        </Card>
    </article>
  );
}

export default ExchangesSingle;
