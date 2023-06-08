import React from 'react'
import {CiBookmarkRemove} from "react-icons/ci"
const SavedItem = ({id,name,img,price,currencySymbol,symbol,removeItem}) => {
  return (
    <div className='p-3'>
        <div className="text-center cursor-pointer hover:scale-105 rounded-3xl p-4 shadow-lg shadow-slate-400 ">
            <CiBookmarkRemove className='w-10' onClick={()=> removeItem(name)}/>
        <img src={img} className="w-20 mx-auto" />
        <h2 className="mt-2">{symbol}</h2>
        <p className="mt-2 font-extrabold text-sm ">{name}</p>
        <p className="mt-2 text-xs font-bold">{price ? `${currencySymbol} ${price}` : "Na" }</p>
    </div>
    </div>
  )
}

export default SavedItem