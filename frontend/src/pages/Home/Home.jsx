import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col md:flex-row items-center justify-between p-6 md:p-10">
        <div className="w-full md:w-2/3 text-center md:text-left text-3xl md:text-4xl font-bold">
          Store. The best way to buy
          <p className="text-gray-500">the products you love.</p>
        </div>
        <Link
          to={"/seller"}
          className="w-full md:w-1/3 bg-yellow-400 text-center text-3xl md:text-4xl font-bold py-6 md:py-10 rounded-lg mt-6 md:mt-0"
        >
          SELL
        </Link>
      </div>
    </div>
  );
}

export default Home;
