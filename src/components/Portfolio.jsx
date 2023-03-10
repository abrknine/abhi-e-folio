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
// import {Link} from "react-router-dom";

const portfolios = () => {

  const port = [
    
    {
      id: 1,
      src: cartapp,
      // description: "An app for managing your shopping cart",
      tags: ["React",  "Bootstrap"],
      demoLink: "http://abhi-kart.vercel.app/",
      codeLink: "https://github.com/abrknine/abhi_kart"
     
      
    },
    {
      id: 2,
      src:  codingbootcamp,
      // description: "An app for managing your shopping cart",
      tags: ["html","css" ,"vanilla-js"],
      demoLink: "https://codingbootcamp3.vercel.app/",
      codeLink: "https://github.com/abrknine/codingbootcamp3",
      
      
    },
    {
      id: 3,
      src: foodhub,
      // description: "An app for managing your shopping cart",
      tags: ["html", "css"],
      demoLink: "https://foodwebsite-github-io.vercel.app/",
      codeLink: "https://github.com/abrknine/foodwebsite.github.io",
      
      
      
    },
    {
      id: 4,
      src: guessgame,
      // description: "An app for managing your shopping cart",
      tags: ["vanilla-js"],
      demoLink: "https://guessgame-github-io.vercel.app/",
      codeLink: "https://github.com/abrknine/guessgame.github.io"
      
    },
    {
      id:5,
      src: textutiles,
      // description: "An app for managing your shopping cart",
      tags: ["React", "Bootstrap"],
      demoLink: "https://github.com/abrknine/piggame.github.io",
      codeLink: "https://github.com/abrknine/Manipulate-text",
      
    },
    {
      id: 6,
      src: piggame,
      // description: "An app for managing your shopping cart",
      tags: ["vanilla-js"],
      demoLink: "https://piggame-github-io.vercel.app/",
      codeLink: "https://github.com/abrknine/piggame.github.io",
    },
    
  ];

  return (
    <div
      name="portfoilio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen "
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
          port.map(({ id, src,title, tags, demoLink, codeLink  }) => (
            <div key={id}  className=" shadow-md sadow-gray-600 rounded-lg">
              <img src={src} alt="" className="rounded-md " />
              <div className="flex item-center justify-center">
              
                <a href={demoLink} target="_blank" rel="noopener noreferrer"  className="w-1/2 px-6 py-6 m-4 duration-200 hover:scale-105">
                  Demo
                </a>
                
                
                <a href={codeLink} target="_blank" rel="noopener noreferrer" className="w-1/2 px-6 py-6 m-4 duration-200 hover:scale-105">
                  Code
                </a>
            
              </div>
              <h2 className="text-xl font-bold">{title}</h2>
             
      <div className="flex flex-wrap mt-4">
        {tags.map((tag) => (
          <span key={tag} className="bg-gray-800 px-2 py-1 text-sm mr-2 mb-2 rounded">
            {tag}
          </span>
        ))}
      </div>
   

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default portfolios;
