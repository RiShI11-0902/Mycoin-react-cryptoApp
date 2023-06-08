import React from 'react'
import { Link } from 'react-router-dom'
import {CiSaveDown2} from "react-icons/ci"
import toast ,{ Toaster} from "react-hot-toast"
import 'react-toastify/dist/ReactToastify.css';
// import { useDispatch } from "react-redux";
function CoinCard({id,name,img,symbol,price,currencySymbol="₹",addhand,handler}) {
  
  return (
    <>
    
    <div className="text-center cursor-pointer hover:scale-105 rounded-3xl p-4 shadow-lg shadow-slate-400 ">
    <Toaster/>
      <CiSaveDown2 onClick={ ()=> handler({id,name,img,symbol,price,currencySymbol:"₹"}) }/>
      
      <Link to={`/coin/${id}`} >
        <img src={img} className="w-20 mx-auto" />
        <h2 className="mt-2">{symbol}</h2>
        <p className="mt-2 font-extrabold text-sm ">{name}</p>
        <p className="mt-2 text-xs font-bold">{price ? `${currencySymbol} ${price}` : "Na" }</p>
      </Link>
    </div>
    </>
  )
}

export default CoinCard