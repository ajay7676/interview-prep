import React, { useContext } from 'react'
import { CDN_URL } from '../utils/constants';
import { Link } from 'react-router'
import UserContext from '../utils/UserContext';

const RestaurantCard = (prop) => {
    const { resData } = prop;
    const {LoggedInUser} = useContext(UserContext)
    // console.log("TDD" ,resData);
    return (
      <>
      {
          resData.map((currValue) => (<Link to={"/restaurants/"+currValue.id}  className="res-card" key={currValue.id} onClick={() =>{
            console.log(currValue.id)
          }}>
              <img
                className="res-logo"
                src={currValue.image}
                alt=""
              />
              <h3 className="res-name">{currValue.name}</h3>
              <h4>{currValue.cuisine}</h4>
              <h4>{currValue.rating} stars</h4>
              <h4>{currValue.cookTimeMinutes} mintues</h4>
              <h4>{currValue.caloriesPerServing}</h4>
              <h4>{LoggedInUser}</h4>
            </Link >))
      }

      </>
    );
  };
  

export default RestaurantCard