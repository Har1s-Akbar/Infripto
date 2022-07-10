import React from "react";
import { useGetExchangesQuery } from "../services/CryptoApi";
import ExchangesSingle from "./ExchangesSingle";
import { Typography } from "antd";

function SingleExchange() {
  const { data, isFetching } = useGetExchangesQuery();

  if (isFetching) return <h1>Loading..</h1>;
  return (
    <section className="my-20">
      <div className="text-center">
        <Typography.Title level={2}>Exchanges</Typography.Title>
      </div>
      <section className="w-11/12 m-auto mt-20 lg:gap-12 sm:gridcols-1 sm:gap-3 grid lg:grid-cols-4">
        {data.map((items) => {
          return <ExchangesSingle key={items.id} {...items} />;
        })}
      </section>
    </section>
  );
}

export default SingleExchange;
