import React, { useEffect, useState } from 'react'
import DosaCard from './DosaCard'

const DosaRestaurant = () => {
  const [dosaList, setDosaList] = useState([]);
  const [dosaCardFirst, setDosaCardFirst] = useState("")

   useEffect(() =>{
     fetchData();
   } , []);

   const fetchData = async () =>{
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.599476&lng=77.350337&collection=80424&tags=layout_CCS_Dosa&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
      const json= await data.json();
      // console.log(json?.data?.cards);
      setDosaList(json?.data?.cards)
      setDosaCardFirst(json?.data?.cards[0])
   }
  //  console.log(dosaCardFirst)
  // console.log(dosaList)

  return (
    <>
      <div className='w-full px-0 py-5  h-full min-h-screen max-h-screen overflow-x-hidden overflow-y-auto bg-gray-100'>
        <div className='w-full text-left py-5 px-5'>
            <h2 className='text-4xl text-black font-bold'>{dosaCardFirst?.card?.card?.title}</h2>
            <p className='text-xl font-bold py-4'>{dosaCardFirst?.card?.card?.description}</p>
        </div>
        <div className='w-full px-5'>
            <h3 className='text-left text-3xl text-black font-bold'>Restaurants to explore</h3>
            <DosaCard  dosaInfo={dosaList}/>
        </div>
      </div>
    </>
  )
}

export default DosaRestaurant