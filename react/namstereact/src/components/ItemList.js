import React from 'react'
import {CDN_URL} from '../utils/constants'

const ItemList = ({itemValue}) => {

    // console.log(itemValue)
  return (
    <div className='item-list-con'>
        <div className='item-list'>
            <div className='left-item-list'>
                <h4 className='item-list-name'>{itemValue?.name}</h4>
                <h6 className='item-list-discount'><span className='original-proce'>₹{itemValue?.price/100}</span> <span className='descount-price'>₹{itemValue?.price/200}</span></h6>
                <div className='item-list-serve'>{itemValue?.description} </div>
            </div>
            <div className='right-item-list'>
                <div className='right-item-imge-con'>
                    <img src={CDN_URL+itemValue.imageId} className='right-item-imge' alt='Item' />
                    <button className='add-item-btn'>ADD</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ItemList