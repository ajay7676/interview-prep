import React, { useContext, useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
// import resList from '../utils/mockData'
<<<<<<< HEAD
import { Link } from "react-router";
import UserContext from "../utils/UserContext";

const Home = () => {
  // State Variable - Superpowerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/recipes");
    const json = await data.json();
    // console.log(json)
    setListOfRestaurants(json.recipes);
    setFilteredRestaurants(json.recipes);
  };

   const {LoggedInUser, setUserName} = useContext(UserContext);
  //  console.log(setUserName)
  // console.log(listOfRestaurants.difficulty);
  // console.log(listOfRestaurants);
  return listOfRestaurants === 0 ? (
    Shimmer
  ) : (
    <div className="body">
      {/* <div className="search">Search</div> */}
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            onClick={() => {
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.name.toLowerCase().includes(searchText.toLowerCase())
              );
=======
import { Link } from 'react-router'
import useOnlineStatus from '../utils/useOnlineStatus';
const Home = () => {
    // State Variable - Superpowerful variable
    const [listOfRestaurants, setListOfRestaurants] = useState([])
    const [filteredRestaurant, setFilteredRestaurants] = useState([])
    const [searchText, setSearchText] = useState("")
    
   useEffect(() =>{
     fetchData();
   } , []);

   const fetchData = async () =>{
      const data = await fetch(
        "https://dummyjson.com/recipes"
      );
      const json = await data.json();
      // console.log(json)
      setListOfRestaurants(json.recipes)
      setFilteredRestaurants(json.recipes)
   }     
   const onlineStatus = useOnlineStatus();
   console.log(onlineStatus)
   if(onlineStatus === false)
    return(
    <h1>Look like you are offline Please check your internet connection</h1>
  );
    return listOfRestaurants === 0 ? Shimmer :  (
      <div className="body">
        {/* <div className="search">Search</div> */}
        <div className='filter'>
          <div className='search'>
            <input type='text' className='search-box' value={searchText} onChange={(e) => setSearchText(e.target.value) }/>
            <button onClick={() => {
              const filteredRestaurant = listOfRestaurants.filter((res) => res.name.toLowerCase().includes(searchText.toLowerCase()));
>>>>>>> 750152c37cbeea4b853e904481a962330660630f
              setFilteredRestaurants(filteredRestaurant);
              // setSearchText("")
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.rating > 4.6
            );
            setListOfRestaurants(filteredList);
            console.log("Button Clicked");
          }}
        >
          Top Rated Restaurant
        </button>
        <div className="search">
          <input type='text' className='search-box' value={LoggedInUser} onChange={(e) => setUserName(e.target.value) } />
        </div>
      </div>
      <div className="res-container">
        <RestaurantCard resData={filteredRestaurant} />
      </div>
    </div>
  );
};
export default Home;
