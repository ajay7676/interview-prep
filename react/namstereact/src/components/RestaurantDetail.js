import React, { useEffect, useState } from 'react'
import RestaurantCategory from './RestaurantCategory'

const RestaurantDetail = () => {
    const [menuList, setMenuList] = useState([])
    const [itemList, setItemList] = useState([])
    const [showIndex, setShowIndex] = useState(0)


    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async() =>{
        const response = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.599476&lng=77.350337&restaurantId=366073&catalog_qa=undefined&query=Chole%20Bhature&submitAction=ENTER");
        const data = await response.json();

        // console.log(data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
        
        const categories = data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" )
        // console.log(categories)
        setMenuList(data)
        setItemList(data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ))
    }
    // console.log(itemList)

    const avgRating = menuList?.data?.cards[2]?.card?.card?.info.avgRatingString;
    const ratingString = menuList?.data?.cards[2]?.card?.card?.info?.totalRatingsString;
  return (
    <>
      <div className='menu-detail-con'>
        <h2 className='p-2 m-5 italic' style={{padding: "10px 7px" , fontWeight: "700" , fontSize: "1.35rem"}} >{menuList?.data?.cards[0]?.card?.card?.text}</h2>
         <div className='menu-detail-card-one'>
             <h5 className='card-one-rating-cost'>{`${avgRating} (${ratingString}) . `}</h5>
             <h6 className='card-one-restype'>Indian</h6>
         </div>
         <div className='menu-accordion-con'>
            {
              itemList.map((item,index) => (
                <RestaurantCategory key={item?.card?.card?.categoryId} showitems={index === showIndex ? true : false} onShow={() => setShowIndex(index)}  dataValue={item?.card?.card} /> 
              ))
            }
         </div>
      </div>
    </>
  )
}

export default RestaurantDetail