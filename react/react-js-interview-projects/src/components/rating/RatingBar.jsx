import React,{useState}from 'react'
import { FaRegStar } from "react-icons/fa";
import  './style.css'

const RatingBar = ({numberOfStars }) => {
    const [rating, setRating] = useState(0);
    const [hoverState, setHoverState] = useState(0)

    const clickMouseOnRating = (currentIndex) =>{
        console.log(currentIndex)
        setRating(currentIndex)

    }
    const mouseHoverOnRating = (currentIndex) =>{
        setHoverState(currentIndex)

    }
    const mouseLeaveFromRating = (currentIndex) =>{
        // console.log(currentIndex)
        setHoverState(rating)

    }
  return (
    <>
       <div className="star-rating">
          {
            [...Array(numberOfStars)].map((_, index) =>{
                index+= 1;
               return (
                 <>
                    <FaRegStar key={index}  
                    className={index <= (hoverState || rating) ? "active" : "inactive"}
                     onClick={() => clickMouseOnRating(index)}
                       onMouseMove={() => mouseHoverOnRating(index)} 
                       onMouseLeave={() => mouseLeaveFromRating(index)} 
                       size={40}
                    />
                 </>
               )
            })
          }
       </div>
    </>
  )
}

export default RatingBar