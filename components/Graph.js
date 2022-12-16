import React from "react";
import graph from "../assets/graph.jpg";
import stats from "../assets/stats.jpeg";

import Image from "next/image";
const Graph = () => {
  return (
    <div className="relative max-w-[676px] md:max-w-[1000px] mx-auto mt-16 sm:mt-24 pb-12 md:mt-16 px-5">
      <Image src={stats} alt="" className="w-full h-full  " />
      {/* Help */}
      <div className="absolute bg-[#b4bec1] w-[4rem] md:w-[6rem] lg:w-[6.5rem] text-center rounded-full text-[14px] md:text-[17px] lg:text-[19px] shadow-md shadow-gray-500 top-[4%] left-[20%] md:top-[5%] md:left-[25%] lg:top-[5.3%] lg:left-[25%]">
        <p>Help</p>
      </div>
      {/* Qualities */}
      <div className="absolute bg-[#b4bec1] w-[6rem] lg:w-[7rem] text-center rounded-full shadow-md shadow-gray-500 text-[13px] md:text-[17px] lg:text-[19px] top-[13%] left-[17%] md:top-[14%] md:left-[18%]">
        <p>Qualities</p>
      </div>
      {/* Price Chart */}
      <div className="absolute bg-[#b4bec1] w-[6rem] md:w-[6.5rem] lg:w-[7.5rem] text-center rounded-full shadow-md shadow-gray-500  text-[13px] md:text-[17px] lg:text-[19px] top-[13%] right-[18%] md:top-[14%] md:right-[20%]">
        <p>PriceChart</p>
      </div>
      {/* Market Messages */}
      <div className="absolute bg-[#b4bec1] w-[8.5rem] md:w-[11rem] lg:w-[12.5rem] text-center rounded-full text-[13px] lg:text-[19px] shadow-md whitespace-nowrap md:text-[17px] bottom-[36.5%] right-[13.5%] md:bottom-[33.5%] md:right-[15%] ">
        <p>Market Messages</p>
      </div>
    </div>
  );
};

export default Graph;
