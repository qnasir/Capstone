import React from 'react'
import './Products.css'

// React Icons
import { FaIndianRupeeSign } from "react-icons/fa6";
import { SlLocationPin } from "react-icons/sl";

function Products({product}) {

  const { name, title, location, price, image } = product


  return (
    <>
      <div className='product_container'>

        <div className="single_product">
          <div className="productImg">
            <img src={image} alt="" />
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