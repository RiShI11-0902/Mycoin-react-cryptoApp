import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "..";
import ErrorComponent from "./ErrorComponent";
import CoinCard from "./CoinCard";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import {TbLoader3} from "react-icons/tb"
const Coin = () => {
  const [coins, setCoins] = useState([]);
  const [error, setError] = useState(false);
  const [currency, setCurrency] = useState("inr");
  const [search, setSeacrh] = useState(" ");
  const [loading, setLoading] = useState(true)

  const currencySymbol =
    currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

  const setinr = () => {
    console.log("curr");
    setCurrency("inr");
  };
  const setusd = () => {
    console.log("curr");
    setCurrency("usd");
  };
  const seteur = () => {
    console.log("curr");
    setCurrency("eur");
  };

  const dispatch = useDispatch();
  const addToCart = (options) => {
    dispatch({ type: "addToCart", payload: options });
    // console.log(options);
    toast.success("Added");
  };

  useEffect(() => {
    const fetchExchanges = async () => {
      try {
        const { data } = await axios.get(
          `${server}/coins/markets?vs_currency=${currency}`
        );
        console.log(data);
        setCoins(data);
        setLoading(false)
        // setLoading(false);
      } catch (error) {
        setError(true);
        // setLoading(false)
      }
    };
    fetchExchanges();
  }, [currency]);
  if (error) return <ErrorComponent message="Error While Fetching Coins" />;

  // const handleSearch = (value) => {
  //   setSeacrh(value);
  //   console.log(value);
  //   // filteredCoins =
  //   // console.log(filteredCoins);
  // };
console.log();
  return (
    <>
      <div className="div flex flex-col  md:flex-row space-y-5 items-center mt-10 w-fit p-5 mx-auto justify-around">
        <div className="md:ml-10 ml-0">
          <input
            id="inputbox"
            onKeyUp={(event) => setSeacrh(event.target.value)}
            type="text"
            placeholder="Search"
            className=" bg-white placeholder:text-slate-500 placeholder:relative placeholder:left-4 border-2 border-black lg:w-[38rem] md:w-[35rem] w-80 p-2  rounded-full -mt-16 indent-7 focus:placeholder:text-white"
          />
        </div>
        <div className="top flex items-center space-x-8 w-fit  mx-20">
          <button
            className="text-xl shadow-lg shadow-slate-400 p-2 font-bold rounded-md focus:border focus:border-blue-700 "
            onClick={setinr}
          >
            ₹
          </button>
          <button
            className="text-xl shadow-lg shadow-slate-400 p-2 font-bold rounded-md focus:border focus:border-blue-700 "
            onClick={setusd}
          >
            $
          </button>
          <button
            className="text-xl shadow-lg shadow-slate-400 p-2 font-bold rounded-md focus:border focus:border-blue-700 "
            onClick={seteur}
          >
            €
          </button>
        </div>
      </div>
      <div className=" ml-4">
        <div className="container mx-auto  mt-10 gap-4 grid grid-cols-1 text-xl md:grid-cols-3 lg:grid-cols-4">
          { loading ? <TbLoader3 className="animate-spin mx-auto  mt-20 text-5xl antialiased" /> :
        coins.filter(i=>i.name.toLowerCase().includes(search)).map((i) => {
              return (
                <CoinCard
                  key={i.id}
                  id={i.id}
                  name={i.name}
                  img={i.image}
                  price={i.current_price}
                  symbol={i.symbol}
                  currencySymbol={currencySymbol}
                  handler={addToCart}
                />
              );
            })
           
          }
        </div>
      </div>
    </>
  );
};

export default Coin;
