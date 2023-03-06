import React from "react";
// import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
// import installNode from "../assets/portfolio/installNode.jpg";
// import navbar from "../assets/portfolio/navbar.jpg";
// import usestate from "../assets/portfolio/usestate.jpg"
// import reactWeather from "../assets/portfolio/reactWeather.jpg";
// import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
// // import cart_app from "../assets/portfolio/cart-app.jpg";
import cartapp from "../assets/portfolio/cartapp.jpg";
import codingbootcamp from "../assets/portfolio/codingbootcamp.jpg";
import foodhub from "../assets/portfolio/foodhub.jpg";
import guessgame from "../assets/portfolio/guessgame.jpg";
import textutiles from "../assets/portfolio/textutiles.jpg";
import piggame from "../assets/portfolio/piggame.jpg";




const portfolios = () => {

  const port = [
    
    {
      id: 1,
      src: cartapp,
     
      
    },
    {
      id: 2,
      src:  codingbootcamp,
      
      
    },
    {
      id: 3,
      src: foodhub,
      
      
      
    },
    {
      id: 4,
      src: guessgame,
      
      
    },
    {
      id:5,
      src: textutiles,
     
      
    },
    {
      id: 6,
      src: piggame,
      
      
    },
    
  ];

  return (
    <div
      name="portfoilio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold iniline border-b-4 border-gray-500">
            Portfoilio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8  px-12 sm:px-0">
          {
          port.map(({ id, src }) => (
            <div key={id}  className=" shadow-md sadow-gray-600 rounded-lg">
              <img src={src} alt="" className="rounded-md " />
              <div className="flex item-center justify-center">
              
                <button  className="w-1/2 px-6 py-6 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
             
                <button className="w-1/2 px-6 py-6 m-4 duration-200 hover:scale-105">
                  Code
                </button>
            
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default portfolios;
