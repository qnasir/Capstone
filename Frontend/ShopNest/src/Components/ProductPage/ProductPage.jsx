import React, { useState,useEffect } from 'react'
import axios from 'axios'
import './ProductPage.css'
import image from '../Product/svg/download.jpeg'
import SearchBar from '../Product/SearchBar/SearchBar'
import Map from '../Map_ProductPage/Map'
import { useParams } from 'react-router-dom';

// React Icons
import { FaRupeeSign } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import { ShareSocial } from 'react-ionicons';


// Social Media Buttons
import {
    FacebookShareButton,
    TelegramShareButton,
    TwitterShareButton,
    WhatsappShareButton,
    PinterestShareButton,
  
} from "react-share";


//Social Media Icons
import {
    FacebookIcon,
    TelegramIcon,
    WhatsappIcon,
    PinterestIcon,
    XIcon,
} from "react-share";


function ProductPage() {

    const { productId } = useParams();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const  response = await axios.get(`https://capstone-tn3i.onrender.com/product-route/product/${productId}`)
            } catch (error) {
                console.error(error)
            }
        }
    })

    const shareURL = 'Website URl'
    // const [product, setProduct] = useState(null);
    const [isToggle, setIsToggle] = useState(false);

    const ToggleShare = () => {
        setIsToggle(!isToggle);
    };

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

                            <div className='name'>
                                <p>GREEN CHEF COOKER</p>
                            </div>

                            <div className="logo">
                                <div className={isToggle ? 'toggle active' : 'toggle'} onClick={ToggleShare}>
                                    <ShareSocial />
                                </div>

                                <ul className="share_buttons">
                                  
                                        <li style={{ '--i': '0', '--clr': '#25D366' }} className={isToggle ? 'active' : ''}>
                                                <WhatsappShareButton className='social_icon' url={shareURL}>
                                                    <WhatsappIcon size={30} round={true} />
                                                </WhatsappShareButton>
                                        </li>

                                        <li style={{ '--i': '1', '--clr': '#E60023' }} className={isToggle ? 'active' : ''}>
                                                <PinterestShareButton className='social_icon' url={shareURL}>
                                                    <PinterestIcon size={30} round={true} />
                                                </PinterestShareButton>
                                        </li>

                                        <li style={{ '--i': '2', '--clr': '#0965FE' }} className={isToggle ? 'active' : ''}>
                                                <FacebookShareButton className='social_icon' url={shareURL}>
                                                    <FacebookIcon size={30} round={true} />
                                                </FacebookShareButton>
                                        </li>

                                        <li style={{ '--i': '3', '--clr': '#000000' }} className={isToggle ? 'active' : ''}>
                                                <TwitterShareButton className='social_icon' url={shareURL}>
                                                    <XIcon size={30} round={true} />
                                                </TwitterShareButton>
                                        </li>

                                        <li style={{ '--i': '4', '--clr': '#25A3E3' }} className={isToggle ? 'active' : ''}>
                                                <TelegramShareButton className='social_icon' url={shareURL}>
                                                    <TelegramIcon size={30} round={true} />
                                                </TelegramShareButton>
                                        </li>

        
                                </ul>
                            </div>

                        </div>
                        <p className='title'>Green Chef</p>
                        <span className='price'>
                            <FaRupeeSign className='price_icon' />
                            <p>999</p>
                        </span>
                        <div className="discription">
                            <p>Discription Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui aut, voluptatem voluptates optio alias aspernatur voluptate quidem veniam ab sequi odio iste temporibus assumenda molestias velit, quis dignissimos, debitis aliquam! Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <div className="footer">
                            <div className="buttons">
                                <button className='buy'>BUY NOW</button>
                                <button className='wishlist'>ADD TO WISHLIST</button>
                            </div>
                            <div>
                                <span className='location'>
                                    <SlLocationPin />
                                    <p>BH-2</p>
                                </span>
                            </div>
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