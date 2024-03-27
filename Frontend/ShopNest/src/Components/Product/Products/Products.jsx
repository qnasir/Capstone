import React, { useState } from 'react'
import './Products.css'
import Cookies from 'js-cookie'
import axios from 'axios'
import { Link } from 'react-router-dom'


// React Icons
import { FaIndianRupeeSign } from "react-icons/fa6";
import { SlLocationPin } from "react-icons/sl";
import { PiHeartStraightFill } from "react-icons/pi";

function Products({ product }) {

  const [isLiked, setIsLiked] = useState(false)

  const AddToWishlist = async (productId) => {
    const accessToken = Cookies.get('access_token')
    if (!accessToken) {
      window.location.href = '/login'
    } else {
      try {
        if (!isLiked) {
          let userId = localStorage.getItem('userId')
          const data = { userId, productId }
          const response = await axios.post(import.meta.env.VITE_LIKED_PRODUCT_KEY, data)
          if (response.data.message) {
            alert("Product added to wishlist")
            setIsLiked(true);
          }
        } else {
          let userId = localStorage.getItem('userId')
          const response = await axios.delete(`${import.meta.env.VITE_REMOVE_LIKED_PRODUCT_KEY}/${userId}/${productId}`)
          if (response.data.message) {
            alert('Removed successfully')
            setIsLiked(false)
          }
        }
      } catch (err) {
        console.error(err)
      }
    }

  }

  const { name, title, location, price, image, _id } = product


  return (
    <>
      <div className='product_container'>

        <Link to={`product-page/${_id}`}>
          <div className="single_product">
            <div className="productImg">
              <img src={image} alt="" />
              <Link to="/">
                <span className={isLiked ? 'heart active' : 'heart'} onClick={() => AddToWishlist(_id)}>
                  <PiHeartStraightFill className='heart_icon' />
                </span>
              </Link>
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
        </Link>

      </div>
    </>
  )
}

export default Products