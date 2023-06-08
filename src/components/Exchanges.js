import { data } from "autoprefixer";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { server } from "..";
import Loader from "./Loader";
import ExchangeCard from "./ExchangeCard"
import ErrorComponent from "./ErrorComponent"
import {TbLoader3} from "react-icons/tb"

const Exchanges = () => {
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false)
  useEffect(() => {
    const fetchExchanges = async () => {
      try {
        const { data } = await axios.get(`${server}/exchanges`);
        // console.log(data);
        setExchanges(data);
        setLoading(false);
      } catch (error) {
        setError(true)
        setLoading(false)
      }
    };
    fetchExchanges();
  }, []);

  if(error) return <ErrorComponent message="Error While Fetching Exchanges" />

  return ( 
    <div className="p-3">
    <div className="container mt-10 gap-10 grid grid-cols-1  w-fit text-3xl md:grid-cols-3 lg:grid-cols-4 "> 
      {
      loading ? <TbLoader3 className="animate-spin mx-auto mt-20 text-5xl antialiased" /> :

      exchanges.map((i)=>{
        return <ExchangeCard key={i.id} name={i.name} rank={i.trust_score_rank}img={i.image} url={i.url} />
      })}
    </div>
    </div>
  );
};


export default Exchanges;
