import { useEffect, useState } from "react";
import { RESTAURANT_MENU } from "./constants";

const useResutrantMenu = (resId) =>{
     const [resInfo, setResInfo] = useState(null)
    // featch Data

      useEffect(() => {
          featchData();
      }, []);

      const featchData = async () =>{
          const data = await fetch(RESTAURANT_MENU + resId);
          const json =await data.json();
          console.log(json)
          setResInfo(json)
      }
      

    return resInfo;

}
export default useResutrantMenu;