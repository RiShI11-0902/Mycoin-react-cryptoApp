import React from "react";


const Header = () => {
  return (
    <>
      <div className="container">
        <div className="main pb-44 pt-40 md:pt-0 md:pb-0 container bg-no-repeat bg-cover w-full h-full  bg-opacity-20 ">
          {/* <hr className="bg-white w-full md:hidden" /> */}
         
          <div className="relative z-30 md:p-72  text-4xl  md:ml-10 text-white bg-opacity-50 rounded-xl bg-cover bg-black md:bg-none lg:bg-none mx-auto">
            <p className="w-fit mx-auto text-white  text-center mt-10 md:mt-0 font-serif font-extrabold text-4xl  italic ">
              SEE ALL THE LATEST UPDATES OF <br />
              <span className="p-4 underline font-extrabold mt-8">
                250 CRYPTO COINS
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
