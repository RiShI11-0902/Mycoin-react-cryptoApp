import React from "react";

function ExchangeCard({ name, img, rank, url }) {
  return (
    <>
    <div className="text-center cursor-pointer hover:scale-105 rounded-3xl  p-4 shadow-lg shadow-slate-400 ">
      <a href={url} target={"_blank"}>
        <img src={img} className="w-20 mx-auto" />
        <h2 className="mt-2 text-xs">{rank}</h2>
        <p className="mt-2 font-extrabold text-sm">{name}</p>
      </a>
    </div>
    </>
  );
}

export default ExchangeCard;
