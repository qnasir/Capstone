import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { FaIndianRupeeSign } from "react-icons/fa6";
import { SlLocationPin } from "react-icons/sl";
import { useParams } from 'react-router-dom'
import './Wishlist.css'

function Wishlist() {

  const [wishProducts, setWishProducts] = useState([])
  const [products, setProducts] = useState([])

  const { userId } = useParams()

  useEffect(() => {

    // Fetching product ids from user id
    const fetchProducts = async () => {
      try {
        console.log(userId)
        const response = await axios.get(`${import.meta.env.VITE_WISHLIST_ID_KEY}/${userId}`)
        setProducts(response.data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchProducts()


  }, [])

  return (
    <div className="grid_parent_wishlist">
      {products.map((product) => {
        return (
          <>
            <div key={product._id} className='product_container'>
              <Link to={`product-page/${product._id}`}>
                <div className="single_product">
                  <div className="productImg">
                    <img src={product.images[0]} alt="" />
                  </div>

                  <div className="productInfo">
                    <div className="title">
                      <p className='productName'>{product.name}</p>
                      <p className='productTitle'>{product.title}</p>
                    </div>

                    <div className="price_div">
                      <span>
                        <SlLocationPin className='location_icon' />
                        <p className='location'>{product.location}</p>
                      </span>
                      <span className='price'>
                        <FaIndianRupeeSign />
                        <span className='price_text'>{product.price}</span>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </>
        );
      })}
    </div>
  )

}

export default Wishlist
