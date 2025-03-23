import React from "react";
import { CDN_URL } from "../utils/constants";

const DosaCard = ({dosaInfo}) => {
  const products = [
    {
      id: 1,
      name: "Shyam Dairy",
      role: "Co-Founder / CEO",
      imageUrl:
        "https://cdn.dummyjson.com/recipe-images/1.webp",
    }, 
  ];
  console.log(dosaInfo[4]?.card?.card?.info)
  // const {areaName} = dosaInfo[4]?.card?.card?.info;
  // const {name} = dosaInfo[4]?.card?.card?.info;
  // const {name, avgRating }= dosaInfo[4]?.card?.card?.info;
  console.log(dosaInfo)
  return (
    <div className="w-full mt-8">
     
          <div className="grid grid-cols-3 gap-5 ">
          {
        dosaInfo.map((e) => (
          <div
            className=" w-full h-auto flex items-center justify-center
          flex-col rounded-2xl" key={e.id}
          >
            <div className="relative w-full h-60">
            <img src={CDN_URL+ dosaInfo[5]?.card?.card?.info.cloudinaryImageId} className="w-full h-60 rounded-2xl relative" />
            <div className="absolute left-4 bottom-2">
              <h2 className="text-3xl text-white font-bold">$ 75 OFF ABOVE $99</h2>
            </div>
            </div>
            <div className="w-full">
              <h2 className="text-2xl py-1 w-full font-bold text-black flex justify-items-start">Shyam Dairy</h2>
              <div className="text-black">4.2 * 40-45 mins</div>
              <h5 className="text-gray-500 text-sm">North Indian, South Indian</h5>
              <h5 className="text-gray-500 text-sm">Sector 29</h5>
            </div>
          </div>
           ))
          }
        </div>
    </div>
  );
};

export default DosaCard;
