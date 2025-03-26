import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ dataValue , showitems,onShow }) => {

const handleClick = () =>{
  onShow();
}
  return (
    <>
      <div className="menu-accordion-list">
        {/* Accordion Header */}
        <div className="accordion-list-header" onClick={handleClick}>
          <span>{`${dataValue.title} -  (${dataValue.itemCards.length})`}</span>
          <span>⬇️</span>
        </div>
        {/* Accordion Body */}
        {showitems  && (
          <div className="accordion-list-body">
            {dataValue.itemCards.map((item) => (
              <ItemList
                key={item?.card?.info?.id}
                itemValue={item?.card?.info}
              />
            ))}
          </div>
        ) 
      }
      </div>
    </>
  );
};

export default RestaurantCategory;
