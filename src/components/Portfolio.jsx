import React from "react";
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/arrayDestruct.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
// import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";
 import reacrSmooth from "../assets/portfolio/reactParallax.jpg";

const portfoilio = () => {
  return (
    <div name="portfoilio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full"  >
        <div className="pb-8">
          <p className="text-4xl font-bold iniline border-b-4 border-gray-500">Portfoilio</p>
          <p className="py-6">Check out some of my work right here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8  px-12 sm:px-0">
          <div className=" shadow-md sadow-gray-600 rounded-lg">
            <img src={reactWeather} alt="" className="rounded-md " />
            <div className="frlx item-center justify-center">
              <button className="w-1/2 px-6 py-6 m-4 duration-200 hover:scale-105">Demo</button>
              <button className="w-1/2 px-6 py-6 m-4 duration-200 hover:scale-105">Code</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default portfoilio;