import React from 'react'
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="relative z-30 p-3 md:p-5  text-black rounded-xl">
            <nav className="md:flex  md:justify-around items-center">
              <div className="logo text-3xl font-extrabold text-purple-400">
                MYcoin.
              </div>
              <div className='mt-3'>
                <ul className="flex md:mt-0  space-x-6 items-center">
                  <Link to="/" className="cursor-pointer hover:text-[#00D7FF]">
                    HOME
                  </Link>
                  <Link
                    to="/exchanges"
                    className="cursor-pointer hover:text-[#00D7FF]"
                  >
                    EXCHANGES
                  </Link>
                  <Link
                    to="coins"
                    className="cursor-pointer hover:text-[#00D7FF]"
                  >
                    COINS
                  </Link>
                  <Link
                    to="saved"
                    className="cursor-pointer hover:text-[#00D7FF]"
                  >
                    SAVED
                  </Link>
                </ul>
              </div>
            </nav>
          </div>
    </div>
  )
}

export default Home