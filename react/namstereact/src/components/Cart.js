import React from 'react'
import { useSelector } from 'react-redux'
import {CDN_URL} from '../utils/constants'
import {removeItem,clearItem} from '../utils/cartSlice'
import { useDispatch } from 'react-redux'


const Cart = () => {

    const cartItem = useSelector((store) => store.cart.items);
     const dispatch = useDispatch();

    const removeAddItem = (item) =>{
        // console.log(item)
        dispatch(removeItem(item))
    

    }
    const clearCartBtn = (cartItem) =>{
        dispatch(clearItem(cartItem))
        // console.log("cardItemmm" ,cartItem)

    }
  return (
    <>
     <div className='card-page-con'>
      <h1 style={{textAlign: "center"}}>Cart</h1>
      <div className='clear-cart-btn-con'>
      <button className='clear-cart-btn' onClick={() =>(clearCartBtn(cartItem))}>Clear Cart</button>

      </div>
     </div>
     {
        cartItem.length === 0 && <h1 style={{width: "100%" , textAlign: "center"}}>You don't have any item . please item in cart</h1>
     }
     <div className='menu-cart-con'>
        <div className='item-list-con'>
            {
                cartItem.map((itemValue) =>(
                    <div className='item-list'>
                        <div className='left-item-list'>
                            <h4 className='item-list-name'>{itemValue?.name}</h4>
                            <h6 className='item-list-discount'><span className='original-proce'>₹{itemValue?.price/100}</span> <span className='descount-price'>₹{itemValue?.price/200}</span></h6>
                            <div className='item-list-serve'>{itemValue?.description} </div>
                        </div>
                        <div className='right-item-list'>
                            <div className='right-item-imge-con'>
                                <img src={CDN_URL+itemValue.imageId} className='right-item-imge' alt='Item' />
                                <button className='add-item-btn' onClick={() => removeAddItem(itemValue)}>Remove</button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
     </div>
    </>
  )
}

export default Cart