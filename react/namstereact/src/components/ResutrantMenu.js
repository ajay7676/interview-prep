import React, {useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { RESTAURANT_MENU } from "../utils/constants";


const ResutrantMenu = () => {
    const [resInfo, setResInfo] = useState(null)
    const {resId} = useParams();

    useEffect(() => {
      fetchMenu();
    }, []);
  
    const fetchMenu = async () => {
      const data = await fetch(RESTAURANT_MENU + resId);
      const json = await data.json();
      setResInfo(json)
      console.log(json)
    }
    return resInfo === null ? <Shimmer /> :  (
      <div className="menu">
      <h1 className="">{resInfo.name} </h1>
      <h2>{resInfo.cuisine}</h2>
      <ul>
      
        {
          resInfo?.ingredients.map((elem , index) => (
            <li key={index}>{elem}</li>
          ))
        }
      </ul>
    </div>
    )
}

export default ResutrantMenu