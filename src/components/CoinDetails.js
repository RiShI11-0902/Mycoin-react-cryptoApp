import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import loader from './Loader'
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { server } from "../index";
import Chart from "./Chart";
import ErrorComponent from "./ErrorComponent";
import {TbLoader3} from "react-icons/tb"


const CoinDetails = () => {
  const [coins, setCoins] = useState({ coins: [] });
  const [error, setError] = useState(false);
  const [currency, setCurrency] = useState("inr");
  const [loading, setloading] = useState(true);
  const [days, setDays] = useState("24h");
  const [chartArray, setChartArray] = useState([]);

  const params = useParams();

  const fetchCoin = async () => {
    try {
      const { data } = await axios.get(`${server}/coins/${params.id}`);
      const { data: chartData } = await axios.get(
        `${server}/coins/${params.id}/market_chart?vs_currency=${currency}&days=${days}`
      );
      console.log(data);
      console.log(`${params.id}`);
      setChartArray(chartData.prices);
      setCoins(data);
      setloading(false);
    } catch (error) {
      setError(true);
      // setLoading(false)
    }
  };
  useEffect(() => {
    fetchCoin();
  }, [params.id, currency, days]);

  const btns = ["24h", "7d", "14d", "30d", "60d", "200d", "365d", "max"];

  const currencySymbol =
    currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

  const switchChartStats = (key) => {
    switch (key) {
      case "24h":
        setDays("24h");
        break;
      case "7d":
        setDays("7d");
        break;
      case "14d":
        setDays("14d");
        // setLoading(true);
        break;
      case "30d":
        setDays("30d");
        // setLoading(true);
        break;
      case "60d":
        setDays("60d");
        // setLoading(true);
        break;
      case "200d":
        setDays("200d");
        // setLoading(true);
        break;
      case "365d":
        setDays("365d");
        // setLoading(true);
        break;
      case "max":
        setDays("max");
        // setLoading(true);
        break;

      default:
        setDays("24h");
        // setLoading(true);
        break;
    }
  };
  // useEffect(() => {
  //  fetchCoin()
  // }, [])

  if (error) return <ErrorComponent message="Error While Fetching Coin" />;
  return (
    <>  {
      loading ? <TbLoader3 className="animate-spin mx-auto  mt-20 text-5xl antialiased" /> :
      <div className="container">
      <p className="text-2xl font-semibold mt-5">
        Last updated on: {""}{" "}
        {Date(coins.market_data?.last_updated.split("G"[0]))}{" "}
      </p>
      <div className="rank flex flex-row items-center space-x-5">
     <p>Market Cap Rank:</p>  <p className="font-extrabold text-xl text-white bg-black p-2 w-fit"> {`#${coins?.market_cap_rank}`}</p>
        </div>
      <div className="box w-[95%] mx-auto mt-4">
        <Chart arr={chartArray} currency={currencySymbol} days={days} />
        <div className="btn">
          {btns.map((i) => {
            return (
              <>
                <button
                  key={i}
                  className="text-lg bg-rose-500 p-2 border-2 mx-2 mt-3"
                  onClick={() => switchChartStats(i)}
                >
                  {i}
                </button>
              </>
            );
          })}
        </div>
      </div>
      <section className="w-fit -mt-9 mx-auto p-5">
        <div className="flex flex-row space-x-10 mx-auto w-fit mt-10 items-center">
          <div className="img w-16">
            <img src={coins.image?.large} />
          </div>
          <div className="text text-3xl font-extrabold ml-10">
            {coins.name}
          </div>
          <div className="decreas flex font-semibold items-center space-x-5">
            {coins.market_data?.price_change_percentage_24h}
            {coins.market_data?.price_change_percentage_24h < 0 ? (
              <AiFillCaretDown />
            ) : (
              <AiFillCaretUp />
            )}
          </div>
        </div>
        <div className="mt-5">
          <div className="num text-2xl font-medium">
           <p>Price: </p> {currencySymbol} {coins.market_data?.current_price[currency]}
          </div>
           <div className="title grid grid-cols-2 gap-2 mt-5">
          <p>
           <span className="font-semibold">MAX SUPPLY :</span> {" "}
            {coins?.market_data?.max_supply
              ? coins?.market_data?.max_supply
              : "NULL"}
          </p>
          <p> <span className="font-semibold">CIRCULATING SUPPLY :</span>
            {" "}
            <span className="">
              {coins.market_data?.circulating_supply}
            </span>
          </p>
          <p> <span className="font-semibold"> MARKET CAP :</span>
            {currencySymbol}{" "}
            <span className="">
              {coins.market_data?.market_cap[currency]}
            </span>
          </p>
          <p> <span className="font-semibold">ALL TIME HIGH :</span>
             {currencySymbol}{" "}
            <span className="">
              {coins.market_data?.ath[currency]}
            </span>
          </p>
          <p> <span className="font-semibold">ALL TIME LOW : <br /></span>
             {currencySymbol}{" "}
            <span className="">
              {coins.market_data?.atl[currency]}
            </span>
          </p>
        </div>
        </div>
      </section>
    </div>
    }
      
    </>
  );
};

export default CoinDetails;