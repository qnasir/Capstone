import React, { useState } from 'react'
import './Products.css'

// React Icons
import { FaIndianRupeeSign } from "react-icons/fa6";
import { SlLocationPin } from "react-icons/sl";
import { PiHeartStraightFill } from "react-icons/pi";

function Products({product}) {

  const [ isLiked,setIsLiked ] = useState(false)

  const AddToWishlist = () => {
    setIsLiked(!isLiked);
  }

  const { name, title, location, price, image } = product


  return (
    <>
      <div className='product_container'>

        <div className="single_product">
          <div className="productImg">
            <img src={image} alt="" />
            <span className={isLiked ? 'heart active' : 'heart'} onClick={AddToWishlist}>
              <PiHeartStraightFill className='heart_icon'/>
            </span>
          </div>

          <div className="productInfo">

            <div className="title">
              <p className='productName'>{name}</p>
              <p className='productTitle'>{title}</p>
            </div>

            <div className="price_div">
              <span>
                <SlLocationPin className='location_icon' />
                <p className='location'>{location}</p>
              </span>
              <span className='price'>
                <FaIndianRupeeSign />
                <span className='price_text'>{price}</span>
              </span>
            </div>

          </div>
        </div>


      </div>
    </>
  )
}

export default Products