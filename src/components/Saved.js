import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import SavedItem from "./SavedItem";
const Saved = () => {
  const { savedItems } = useSelector((state) => state.saved);
  const dispatch = useDispatch();
  //   console.log(savedItems);
  const removeItem = (name) => {
    dispatch({ type: "removeCart", payload: name });
  };
  return (
    <div className="p-3">
      <div className=" mt-2 gap-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 text-xl ">
        {savedItems.length > 0
          ? savedItems.map((i) => {
              return (
                <SavedItem
                  id={i.id}
                  name={i.name}
                  symbol={i.symbol}
                  img={i.img}
                  price={i.price}
                  currencySymbol={i.currencySymbol}
                  removeItem={removeItem}
                />
              );
            })
          : <div className="w-fit mx-auto"> 
            <p className="text-2xl font-serif font-extrabold">NOTHING IS SAVED</p>
          </div> }
      </div>
    </div>
  );
};

export default Saved;
