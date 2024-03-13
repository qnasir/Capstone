import React from 'react'
import './ProductPage.css'
import image from '../Product/svg/download.jpeg'
import SearchBar from '../Product/SearchBar/SearchBar'
import Map from '../Map_ProductPage/Map'

// React Icons
// import { FaIndianRupeeSign } from "react-icons/fa6";
import { FaRupeeSign } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";


function ProductPage() {
    return (
        <>
            <div className='parent_div'>
                <SearchBar style={{ "width": "500px" }} />
            </div>
                <div className='product_page_container'>

                    <div className="product">
                        <div className="product_image">
                            <img src={image} alt="" />
                        </div>
                        <div className="product_info">
                            <div className="heading">
                                <p className='name'>GREEN CHEF COOKER</p>
                                <span className='location'>
                                    <SlLocationPin />
                                    <p>BH-2</p>
                                </span>
                            </div>
                            <p className='title'>Green Chef</p>
                            <span className='price'>
                                <FaRupeeSign className='price_icon' />
                                <p>999</p>
                            </span>
                            <div className="discription">
                                <p>Discription Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui aut, voluptatem voluptates optio alias aspernatur voluptate quidem veniam ab sequi odio iste temporibus assumenda molestias velit, quis dignissimos, debitis aliquam! Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                            <div className="buttons">
                                <button className='buy'>BUY NOW</button>
                                <button className='wishlist'>ADD TO WISHLIST</button>
                            </div>
                        </div>
                    </div>

                    <div className="seller_info">
                        <div className="seller_detail">
                            <p className='post'>Posted By</p>
                            <div className="seller_image">
                                <img src={image} alt="" />
                            </div>
                            <p className='seller'>NASIR</p>
                            <p className='verification'>VERIFIED</p>
                        </div>
                        <div className="map"><Map /></div>
                    </div>

                </div>
        </>
    )
}

export default ProductPage  