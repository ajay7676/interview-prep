import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { RESTAURANT_MENU } from "../utils/constants";
import useResutrantMenu from "../utils/useResutrantMenu";


const ResutrantMenu = () => {
    // const [resInfo, setResInfo] = useState(null)
    const {resId} = useParams();
    const resInfo = useResutrantMenu(resId);
    console.log(resInfo)
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